<template>
  <h1 class="category_title">{{ categorytitle }}</h1>
</template>

<script setup>
defineProps({
  categorytitle: {
    type: String,
  },
});
</script>

<style lang="scss">
.category_title {
  width: fit-content;
  margin: 3rem auto;
  padding: 5px 20px;
  position: relative;
  &::before {
    content: "";
    @include absoluteBottom(0, 50%, -50%);
    background-color: var(--dark);
    width: 100%;
    height: 2px;
  }
  &::after {
    content: "";
    @include absoluteBottom(-4px, 50%, -50%);
    background-color: var(--dark);
    width: 10px;
    height: 10px;
    transform: translateX(-50%) rotate(45deg) !important;
  }
}
</style>
