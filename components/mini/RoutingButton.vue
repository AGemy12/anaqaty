<template>
  <div class="routing">
    <div class="content container">
      <nuxt-link to="/">الرئيسية</nuxt-link>
      <Icon name="material-symbols-light:arrow-back-ios-new" />
      <nuxt-link :to="`/${firstSegment}/${categoryId}`">{{
        firstSegment
      }}</nuxt-link>
      <Icon name="material-symbols-light:arrow-back-ios-new" />
      <p>{{ articleTitle }}</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

defineProps({
  categoryId: {
    type: String,
  },
});

const route = useRoute();

const firstSegment = ref("");
const articleTitle = ref(route.params.slug.replace(/-/g, " "));

onMounted(() => {
  if (process.client) {
    const path = window.location.pathname;

    const segments = path.split("/");
    firstSegment.value = decodeURIComponent(segments[1]);
  }
});
</script>

<style lang="scss">
.routing {
  width: fit-content;
  margin: 2rem 0;
  .content {
    @include flex(center, center, row, 0.3rem);
    span {
      font-size: 15px;
    }
    a {
      transition: var(--main_transition);
      font-weight: bold;
      &:hover {
        text-decoration: underline;
      }
    }
    @media (max-width: 480px) {
      a,
      p {
        font-size: 0.7rem;
      }
      span {
        font-size: 10px;
      }
    }
  }
}
</style>
