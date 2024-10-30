<template>
  <MainLoader v-if="isLoading" />
  <section v-else>
    <HeroCarousel />
    <div class="container">
      <template v-for="[key, category] in Object.entries(homeArticlesData)">
        <Category
          v-if="category.articles.length > 0"
          :category-details="category.articles"
          :categoryName="category.name"
          :home-page="true"
          :category-slug="category.name"
          :category-type="category.name"
          :categoryPath="`/${category.name}/${category.id}`"
        />
      </template>

      <ArticlesCarousel
        categorytitle="الأعلى مشاهدة"
        :articles-items="latestArticlesData"
      />
      <ArticlesCarousel
        categorytitle="احدث المقالات"
        :articles-items="latestArticlesData"
      />
    </div>
  </section>
</template>

<script setup>
/* <==============> Start :: Imports <==============> */
import Category from "~/components/main/Category.vue";
import HeroCarousel from "~/components/main/HeroCarousel.vue";
import MainLoader from "~/components/main/MainLoader.vue";
import { ref, onMounted } from "vue";
import ArticlesCarousel from "~/components/main/ArticlesCarousel.vue";

/* <==============> End :: Imports <==============> */

/* <==============> Start :: Head Page Details <==============> */
useHead({
  title: "Anaqaty | الصفحة الرئيسية",
});

/* <==============> End :: Head Page Details <==============> */

/* <==============> Start :: Consts <==============> */
const { $axiosRequest } = useNuxtApp();
const isLoading = ref(true);
const homeArticlesData = ref({});
const latestArticlesData = ref([]);
const mostViewedArticels = ref([]);
/* <==============> End :: Consts <==============> */

/* <==============> Start :: Get Data Request <==============> */
async function getDataReq() {
  try {
    let res = await $axiosRequest.get("HomeArticles");
    homeArticlesData.value = res.data.categories;
    // console.log(homeArticlesData.value.Your_blog_posts.articles);
  } catch (error) {
    console.log("Erro ===>", error);
  }
}
/* <==============> End :: Get Data Request <==============> */

/* <==============> Start :: Most Viewed Atricles Request <==============> */
async function getMostViewedArticlesReq() {
  try {
    let res = await $axiosRequest.get("MostViewed");
    mostViewedArticels.value = res.data.most_viewed;
  } catch (error) {
    console.log("Erro ===>", error);
  }
}
/* <==============> End :: Most Viewed Atricles Request <==============> */

/* <==============> Start :: Latest Atricles Request <==============> */
async function getLatestArticlesReq() {
  try {
    let res = await $axiosRequest.get("LatestArticles");
    latestArticlesData.value = res.data.Latest_Articles;
    console.log(latestArticlesData.value);
  } catch (error) {
    console.log("Erro ===>", error);
  }
}
/* <==============> End :: Latest Atricles Request <==============> */

onMounted(async () => {
  await getDataReq();
  await getLatestArticlesReq();
  await getMostViewedArticlesReq();
  if (homeArticlesData) {
    isLoading.value = !isLoading.value;
  }
});
</script>

<style lang="scss" scoped></style>
