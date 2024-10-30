<template>
  <MainLoader v-if="isLoading" />

  <section class="section_container container" v-else>
    <div class="your_blogs_content" v-if="route.params.id == '31'">
      <nuxt-link
        to="https://api.whatsapp.com/send?phone=905378753852"
        target="_blank"
      >
        <span class="your_blogs_text"> يمكنك ارسال تدويناتك عبر الواتساب</span>
        <Icon class="your_blogs_icon" name="logos:whatsapp-icon" />
      </nuxt-link>
    </div>
    <PageTitle :page-title="pageTitle" />
    <div class="section_content">
      <div>
        <Category :category-details="categoryArticlesData.data" />
        <Pagination
          :more-than-two-pages="moreThanTwoPages"
          :value="currentPage"
          :length="totalPages"
          @update:model-value="getCategoryArticles"
        />
        <ArticlesCarousel
          v-if="mostViewedArticles.length > 0"
          categorytitle="الأعلى مشاهدة"
          :articles-items="mostViewedArticles"
        />
        <ArticlesCarousel
          v-if="latestArticles.length > 0"
          categorytitle=" أحدث المقالات "
          :articles-items="latestArticles"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import Category from "~/components/main/Category.vue";
import PageTitle from "~/components/mini/PageTitle.vue";
import Pagination from "~/components/mini/Pagination.vue";
import { ref, onMounted, watch } from "vue";
import MainLoader from "~/components/main/MainLoader.vue";
import { useRoute, useRouter } from "vue-router";
import ArticlesCarousel from "~/components/main/ArticlesCarousel.vue";

const { $axiosRequest } = useNuxtApp();
const route = useRoute();
const router = useRouter();
const categoryArticlesData = ref([]);
const mostViewedArticles = ref([]);
const latestArticles = ref([]);
const isLoading = ref(true);
const pageTitle = ref(route.params.slug.replace(/-/g, " "));
const moreThanTwoPages = ref(false);
const totalPages = ref(1);
const currentPage = ref(1);
useHead({
  title: `Anaqaty | ${pageTitle.value}`,
});

/* <==============> Start :: Get Category Articles Req <==============> */
async function getCategoryArticles(page = 1) {
  const categoryId = route.params.id;
  isLoading.value = true;
  try {
    const res = await $axiosRequest.get(
      `ArticlesBycategory/${categoryId}?page=${page}`
    );
    if (res.status >= 200 && res.status < 300) {
      categoryArticlesData.value = res.data.articles;
      totalPages.value = res.data.articles.last_page;
      currentPage.value = res.data.articles.current_page;
      moreThanTwoPages.value = totalPages.value > 1;

      isLoading.value = false;
    }
  } catch (error) {
    console.log("Error ===>", error);
    isLoading.value = false;
  }
}
/* <==============> End :: Get Category Articles Req <==============> */

/* <==============> Start :: Get Most Viewed Articles Req <==============> */
async function getMostViewedArticles() {
  const categoryId = route.params.id;
  isLoading.value = true;
  try {
    const res = await $axiosRequest.get(`CategoryMostViewed/${categoryId}`);
    if (res.status >= 200 && res.status < 300) {
      mostViewedArticles.value = res.data.category_most_viewed;
      isLoading.value = false;
    }
  } catch (error) {
    console.log("Error ===>", error);
    isLoading.value = false;
  }
}
/* <==============> End :: Get Most Viewed Articles Req <==============> */

/* <==============> Start :: Get Most Viewed Articles Req <==============> */
async function getLatestArticles() {
  const categoryId = route.params.id;
  isLoading.value = true;
  try {
    const res = await $axiosRequest.get(`CategoryLatestArticles/${categoryId}`);
    if (res.status >= 200 && res.status < 300) {
      latestArticles.value = res.data.Category_Latest_Articles;
      isLoading.value = false;
    }
  } catch (error) {
    console.log("Error ===>", error);
    isLoading.value = false;
  }
}
/* <==============> End :: Get Most Viewed Articles Req <==============> */

onMounted(() => {
  getCategoryArticles();
  getMostViewedArticles();
  getLatestArticles();
});
</script>
