<template>
  <header class="app_header">
    <div class="app_header_content container">
      <div class="app_header_content_top_header">
        <MenuBars />
        <Logo />
        <SocialGroup />
      </div>
      <NavLinks />
    </div>
  </header>
  <Menu />
</template>

<script setup lang="ts">
import Logo from "./main/Logo.vue";
import Menu from "./main/Menu.vue";
import NavLinks from "./main/NavLinks.vue";
import SocialGroup from "./main/SocialGroup.vue";
import MenuBars from "./mini/MenuBars.vue";
</script>

<style lang="scss" scoped>
.app_header {
  background-color: var(--white);
  padding: 2rem 0;

  .app_header_content {
    .app_header_content_top_header {
      @include flex(space-between, center, row);
      padding-bottom: 2rem;
    }
  }
}

@media (max-width: 768px) {
  .app_header {
    padding: 1rem 0;
    .app_header_content {
      .app_header_content_top_header {
        padding-bottom: 0rem;
      }
    }
  }
}
</style>
