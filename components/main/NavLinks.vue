<template>
  <ul class="app_header_content_navbar">
    <li v-for="navLink in navLinksHandler" :key="navLink.id">
      <nuxt-link :to="navLink.path">
        {{ navLink.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from "vue";
const navLinksHandler = computed(function () {
  const navLinks = [
    {
      id: 1,
      title: "موضة",
      path: "/fashion",
    },
    {
      id: 2,
      title: "جمال",
      path: "##",
    },
    {
      id: 3,
      title: "رشاقة",
      path: "##",
    },
    {
      id: 4,
      title: "صحة بدنية",
      path: "##",
    },
    {
      id: 5,
      title: "سلام نفسي",
      path: "##",
    },
    {
      id: 6,
      title: "حكايات بنات ",
      path: "##",
    },
    {
      id: 7,
      title: "علاقات صحية",
      path: "##",
    },
    {
      id: 8,
      title: "أمومة",
      path: "##",
    },
    {
      id: 9,
      title: "منزل وديكور",
      path: "##",
    },
    {
      id: 10,
      title: "طبخ",
      path: "##",
    },
    {
      id: 11,
      title: "مواهبكن",
      path: "##",
    },
  ];
  return navLinks;
});
</script>

<style lang="scss">
.app_header_content_navbar {
  @include flex(space-between, center);
  li {
    a {
      display: block;
      font-size: 1rem;
      text-wrap: nowrap;
      font-weight: bold;
      padding: 0.3rem 0;
      position: relative;
      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 0%;
        height: 1px;
        background-color: var(--dark);
        transition: all var(--main_transition);
      }
      &::before {
        bottom: 0;
        right: 0;
      }
      &::after {
        top: 0;
        left: 0;
      }
      &:hover::before,
      &:hover::after {
        width: 100%;
      }
    }
  }
}

@media (max-width: 992px) {
  .app_header_content_navbar {
    gap: 10px;
    li {
      a {
        font-size: 0.8rem;
        padding: 0;
      }
    }
  }
}

@media (max-width: 768px) {
  .app_header_content_navbar {
    display: none;
  }
}
</style>
