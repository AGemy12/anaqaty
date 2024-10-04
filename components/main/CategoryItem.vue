<template>
  <div class="category_item">
    <nuxt-link class="category_item_image_link" :to="eventPath">
      <div class="category_item_img">
        <img :src="categoryItemImg" :alt="categoryItemImgAlt" />
      </div>
    </nuxt-link>
    <div class="category_item_info">
      <nuxt-link class="category_item_category_link" :to="categoryPath">
        {{ categoryItemType }}
      </nuxt-link>
      <nuxt-link class="category_item_info_link" :to="eventPath">
        {{ eventTitle }}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  categoryItemImg: {
    String,
  },
  categoryItemImgAlt: {
    String,
  },
  categoryItemType: {
    String,
  },
  eventPath: {
    String,
  },
  categoryPathLink: {
    String,
  },
  eventTitle: {
    String,
  },
});
</script>

<style lang="scss">
.category_item {
  background-color: var(--white);
  border-radius: var(--sm_border_rd);
  box-shadow: var(--shadow);
  overflow: hidden;
  .category_item_image_link {
    display: block;
    .category_item_img {
      @include flex(center, center);
      img {
        width: 100%;
      }
    }
  }
  .category_item_info {
    padding: 1rem;
    text-align: justify;

    .category_item_category_link {
      display: block;
      width: fit-content;
      color: #686666;
      font-size: 0.8rem;
      font-weight: bold;
      transition: color var(--main_transition);
    }
    .category_item_info_link {
      margin: 0 0.5rem;
      display: block;
      transition: color var(--main_transition);
    }
  }
  &:hover .category_item_info_link {
    color: #686666;
  }
  &:hover .category_item_category_link {
    color: var(--dark);
  }
}
</style>
