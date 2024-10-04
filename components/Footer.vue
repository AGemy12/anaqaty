<template>
  <footer class="footer_content">
    <div class="footer_content_container container">
      <div class="footer_content_top">
        <Logo />
        <div class="footer_content_top_links">
          <ul>
            <li v-for="navLink in navLinksFooterOne" :key="navLink.id">
              <nuxt-link :to="navLink.path">
                {{ navLink.title }}
              </nuxt-link>
            </li>
          </ul>
          <ul>
            <li v-for="navLink in navLinksFooterTow" :key="navLink.id">
              <nuxt-link :to="navLink.path">
                {{ navLink.title }}
              </nuxt-link>
            </li>
          </ul>
          <ul>
            <li v-for="navLink in navLinksFooterThree" :key="navLink.id">
              <nuxt-link :to="navLink.path">
                {{ navLink.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <SocialGroup />
      </div>

      <div class="footer_content_copy_rights">
        <p>
          جميع الحقوق محفوظة لموقع
          <a href="/"> <img src="/black_logo.svg" alt="" /> </a> وتخضع لشروط
          وإتفاق الإستخدام © 2024
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Logo from "./main/Logo.vue";
import SocialGroup from "./main/SocialGroup.vue";
import { computed } from "vue";
const navLinksFooterOne = computed(function () {
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
  ];
  return navLinks;
});
const navLinksFooterTow = computed(function () {
  const navLinks = [
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
const navLinksFooterThree = computed(function () {
  const navLinks = [
    {
      id: 12,
      title: "سياسة الخصوصية",
      path: "##",
    },
    {
      id: 13,
      title: "الشروط والأحكام",
      path: "##",
    },
  ];
  return navLinks;
});
</script>

<style lang="scss">
.footer_content {
  background-color: var(--alt_color);
  padding: 2rem 0;
  margin-top: 1rem;
  .footer_content_container {
    @include flex(center, stretch, column, 20px);
    .footer_content_top {
      @include flex(space-between, flex-start);
      .footer_content_top_links {
        width: fit-content;
        margin: 0 auto;
        @include flex(center, flex-start, row, 50px);

        ul {
          @include flex(center, center, column, 10px);
          li {
            a {
              display: block;
              padding: 5px 10px;
              background-color: var(--alt_color);
              transition: background-color var(--main_transition) ease;
              border-radius: var(--sm_border_rd);
              font-size: 1rem;
              font-weight: bold;
              &:hover {
                background-color: #dbd7d0;
              }
            }
          }
        }
      }
    }
    .footer_content_copy_rights {
      border-top: 1px solid rgba(0, 0, 0, 0.3);
      width: 100%;
      p {
        width: fit-content;
        margin: 1rem auto 0 auto;
        font-weight: bold;
        font-size: 0.8rem;
        @include flex(center, center, row, 5px);
        a {
          margin: 0 5px;
          font-size: 0.2rem;
          font-weight: bold;
          img {
            width: 70px;
          }
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .footer_content_top_links {
    gap: 0px !important;
    ul {
      li {
        a {
          font-size: 0.8rem !important;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .footer_content_top {
    flex-direction: column;
    align-items: center !important;
    gap: 30px;
    .footer_content_top_links {
      @include flex(center, center !important, column, 0 !important);
      ul {
        gap: 5px !important;
        li {
          a {
            font-size: 0.8rem !important;
          }
        }
      }
    }
    .app_header_content_top_header_socail_group {
      display: flex !important;
    }
  }
  .footer_content_copy_rights {
    p {
      font-size: 0.5rem !important;
      a {
        img {
          width: 40px !important;
        }
      }
    }
  }
}
</style>
