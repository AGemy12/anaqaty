<template>
  <ul class="pagination_container">
    <li>
      <button>
        <Icon name="material-symbols:arrow-right-alt-rounded" />
      </button>
    </li>
    <template v-for="item in paginationsData">
      <li>
        <button>{{ item.label }}</button>
      </li>
    </template>
    <li>
      <button>
        <Icon name="material-symbols:arrow-left-alt-rounded" />
      </button>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  paginationsData: {
    type: Array,
  },
});
</script>

<style lang="scss">
.pagination_container {
  width: fit-content;
  margin: 1rem auto;
  @include flex(center, center, row, 5px);
  li {
    button {
      @include flex(center, center, 5px);
      width: 30px;
      height: 30px;
      background-color: transparent;
      border: none;
      font-size: 17px;
      transition: var(--main_transition);
      border-radius: var(--sm_border_rd);
      &.active,
      &:hover {
        background-color: rgba(0, 0, 0, 0.5);
        color: var(--white);
      }
      span {
        font-size: 20px;
      }
    }
  }
}
</style>
