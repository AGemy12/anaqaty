<template>
  <section class="category_container">
    <CategoryTitle :categorytitle="categoryName" v-if="homePage" />
    <div class="category_content">
      <CategoryItem
        v-for="item in categoryDetails"
        :key="item.id"
        :categoryItemImg="item.image"
        :categoryPathLink="item.image"
        :eventPath="item.image"
        :eventTitle="item.title"
        :categoryItemType="item.category"
      />
    </div>
  </section>
</template>

<script setup>
import CategoryTitle from "../mini/CategoryTitle.vue";
import CategoryItem from "./CategoryItem.vue";

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
});
</script>

<style lang="scss">
.category_container {
  .category_content {
    @include grid(300px, 20px);
  }
}
</style>
