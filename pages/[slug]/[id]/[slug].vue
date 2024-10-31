<template>
  <MainLoader v-if="isLoading" />
  <section class="article_container container" v-else>
    <div class="article_head_content">
      <RoutingButton :category-id="articleData.category.id" />
      <ArticleSection
        :with-article-title="true"
        :main-head="articleData.title"
        :main-img-src="articleData.image_path"
        :article-date="articleData.published_at"
        :cat-path="`/${articleData.category.name}/${articleData.category.id}`"
        :cat-title="articleData.category.name"
        :article-body="articleData.content"
        :has-paragraph="true"
      />
      <ArticlesCarousel
        v-if="relatedArticlesData.length > 0"
        categorytitle="مواضيع ذات صلة"
        :articles-items="relatedArticlesData"
      />
    </div>
  </section>
</template>
<script setup>
/* <==============> Start :: Imports <==============> */
import ArticleSection from "~/components/mini/ArticleSection.vue";
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import MainLoader from "~/components/main/MainLoader.vue";
import RoutingButton from "~/components/mini/RoutingButton.vue";
import ArticlesCarousel from "~/components/main/ArticlesCarousel.vue";

/* <==============> End :: Imports <==============> */

/* <==============> Start :: Consts <==============> */
const route = useRoute();
const router = useRouter();
const { $axiosRequest } = useNuxtApp();
const fullLink = ref("");
const isLoading = ref(true);
const pageTitle = ref("");
const pageKeywords = ref("");
const pageDesc = ref("");
const ogImage = ref("");
const articleData = ref({});
const relatedArticlesData = ref([]);
const articleSlug = ref("");
/* <==============> End :: Consts <==============> */

/* <==============> Start :: Page Head Details <==============> */
useHead({
  title: pageTitle,
  meta: [
    {
      name: "keywords",
      content: pageKeywords,
    },
    {
      name: "description",
      content: pageDesc,
    },
    {
      name: "abstract",
      content: pageDesc,
    },
    {
      property: "og:site_name",
      content: "موقع أناقتي",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: fullLink,
    },
    {
      property: "og:title",
      content: pageTitle,
    },
    {
      property: "og:description",
      content: pageDesc,
    },
    {
      property: "og:image",
      content: ogImage,
    },
  ],
});
/* <==============> End :: Page Head Details <==============> */

/* <==============> End :: Consts <==============> */

/* <==============> Start :: Get Topic Data Req <==============> */
async function getTopicData() {
  try {
    const articleId = String(route.params.id);
    const articleSlug = String(route.params.slug);

    const res = await $axiosRequest.get(`ArticleViews/${articleId}`);
    if (res.status >= 200 && res.status < 300) {
      articleData.value = res.data.article;
      pageTitle.value = `Anaqaty | ${res.data.article.title}` || "Anaqaty";
      pageKeywords.value = res.data.article.keywords
        .map((item) => item.keyword)
        .join(", ");
      pageDesc.value = res.data.article.summary;
      ogImage.value = res.data.article.image_path;
      isLoading.value = false;
      if (
        String(res.data.article.id) !== articleId ||
        String(res.data.article.slug) !== articleSlug
      ) {
        router.replace("/not-found");
      }
    }
  } catch (error) {
    console.log("Error ===>", error);
  }
}
/* <==============> End :: Get Topic Data Req <==============> */

/* <==============> Start :: Get Related Articles Req <==============> */
async function getRelatedTopicData() {
  try {
    const articleId = String(route.params.id);

    const res = await $axiosRequest.get(`relatedArticles/${articleId}`);
    if (res.status >= 200 && res.status < 300) {
      relatedArticlesData.value = res.data.related_articles;
      isLoading.value = false;
    }
  } catch (error) {
    console.log("Error ===>", error);
  }
}
/* <==============> End :: Get Related Articles Req <==============> */

/* <==============> Start :: Watch route changes <==============> */
watch(
  () => route.params.id,
  () => {
    getTopicData(); // إعادة استدعاء الدالة عند تغير `id` في الرابط
  }
);
/* <==============> End :: Watch route changes <==============> */

/* <==============> Start :: Mounted Hook <==============> */
onMounted(() => {
  getTopicData();
  getRelatedTopicData();
  if (process.client) {
    const category = encodeURIComponent(route.params.category);
    const id = encodeURIComponent(route.params.id);
    const slug = encodeURIComponent(route.params.slug);

    fullLink.value = `${window.location.origin}/${category}/${id}/${slug}`;
  }
});
/* <==============> End :: Mounted Hook <==============> */
</script>

<style lang="scss">
.article_container {
  margin: 2rem 0;
  .article_head_content {
    img {
      width: 100%;
      display: block;
    }
  }
  .article_body {
    padding: 1em;
    a {
      text-decoration: underline;
      color: blue;
    }
    p {
      margin: 1em 0;
      text-align: justify;
      line-height: 2;
    }
    ul {
      margin: 0.5rem auto 0.5rem 0;
      width: 90%;
      li {
        position: relative;
        display: flex;
        line-height: 2;
        &::before {
          content: "";
          position: absolute;
          right: -15px;
          top: 15px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #000;
        }
        span {
          margin: 0 15px 0 0;
          text-align: justify;
        }
      }
    }

    .image img {
      width: 100%;
      height: auto;
      aspect-ratio: 1/1 !important;
    }
  }
}
</style>
