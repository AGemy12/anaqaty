import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const axiosRequest = axios.create({
    baseURL: `https://fakestoreapi.com/`,
    headers: {
      common: {
        Accept: "application/json",
      },
    },
  });

  axiosRequest.interceptors.response.use(
    (response) => response,
    (error) => {
      const code = parseInt(error.response && error.response.status);

      if (code === 404) {
        const requestUrl = error.response.config.url;
        if (!requestUrl.includes("company/email")) {
          redirect("/404");
        }
      } else if (code === 500) {
        redirect("/500");
      } else if (code === 401) {
        console.log("401");
        localStorage.clear();
        nuxtApp.$pinia?.state.value.auth?.resetState &&
          nuxtApp.$pinia.state.value.auth.resetState();
        window.location.reload();
      }
    }
  );

  nuxtApp.provide("axiosRequest", axiosRequest);
});
