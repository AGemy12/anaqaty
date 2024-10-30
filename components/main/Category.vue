<template>
  <section class="category_container">
    <CategoryTitle :categorytitle="categoryName" v-if="homePage" />
    <div class="category_content">
      <CategoryItem
        v-for="item in categoryDetails"
        :key="item.id"
        :topicImage="item.image_path"
        :topicImageAlt="item.topicImageAlt"
        :topicLink="`/${item.category ? item.category.name : categorySlug}/${
          item.id
        }/${item.slug}`"
        :topicHeadTitle="item.title"
        :categoryType="categoryType"
        :categoryPath="
          item.category
            ? `/${item.category.name}/${item.category.id}`
            : categoryPath
        "
      />
    </div>
  </section>
</template>

<script setup>
import CategoryTitle from "../mini/CategoryTitle.vue";
import CategoryItem from "./CategoryItem.vue";
import { useRoute } from "vue-router";

defineProps({
  homePage: {
    type: Boolean,
    required: true,
  },
  categoryName: {
    type: String,
  },
  categoryDetails: {
    type: Array,
    default: [],
  },
  categoryType: {
    type: String,
  },
  categoryPath: {
    type: String,
  },
  categorySlug: {
    type: String,
  },
  fireClickHandle: {
    type: Function,
  },
});

onMounted(() => {});
</script>

<style lang="scss">
.category_container {
  overflow: hidden;
  .category_content {
    @include grid(300px, 20px);
  }
}
</style>
