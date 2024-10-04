<template>
  <div class="app_header_content_top_header_socail_group">
    <SocialItem icon-name="ic:baseline-facebook" path="##" />
    <SocialItem icon-name="ri:instagram-line" path="##" />
    <SocialItem icon-name="ic:baseline-tiktok" path="##" />
    <SocialItem icon-name="ant-design:linkedin-filled" path="##" />
  </div>
</template>

<script setup lang="ts">
import SocialItem from "../mini/SocialItem.vue";
</script>

<style lang="scss">
.app_header_content_top_header_socail_group {
  @include flex(center, center, row, 10px);
}

@media (max-width: 768px) {
  .app_header_content_top_header_socail_group {
    display: none;
  }
}
</style>
