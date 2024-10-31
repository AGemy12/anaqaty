<template>
  <div class="article_section_container">
    <div class="article_section">
      <img :src="mainImgSrc" alt="" />
      <div class="article_head_title" v-if="withArticleTitle">
        <nuxt-link :to="catPath"> {{ catTitle }} </nuxt-link>
        <h1>{{ mainHead }}</h1>
        <span> {{ articleDate }} </span>
      </div>
    </div>
    <div class="article_body" v-html="cleanedArticleBody"></div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  withArticleTitle: {
    type: Boolean,
  },
  mainHead: {
    type: String,
  },
  articleDate: {
    type: String,
  },
  catTitle: {
    type: String,
    required: true,
  },
  catPath: {
    type: String,
    required: true,
  },
  articleBody: {
    type: String,
    required: true,
  },
  mainImgSrc: {
    type: String,
  },
});

const cleanedArticleBody = computed(() => {
  return props.articleBody
    ? props.articleBody.replace(/<p>&nbsp;<\/p>/g, "").trim()
    : "";
});
</script>

<style lang="scss">
.article_section_container {
  margin: 0 auto;
  max-width: 900px;
  .article_section {
    position: relative;
    box-shadow: var(--shadow);
    border-radius: var(--md_border_rd);
    overflow: hidden;
    div.article_head_title {
      position: absolute;
      top: 0px;
      background-color: rgba(0, 0, 0, 0.7);
      width: 100%;
      min-height: 80px;
      padding: 1rem;
      @include flex(center, flex-start, column, 5px);
      h1 {
        text-align: justify;
        font-size: 1.2rem;
        font-weight: bold;
        width: fit-content;
        color: var(--white);
      }
      a {
        color: rgba(255, 255, 255, 0.7);
        transition: var(--main_transition);
        display: flex;
        width: fit-content;
        margin: 0.5rem;
        text-decoration: underline;
      }
      span {
        color: white;
        font-weight: lighter;
      }
      &:hover {
        a {
          color: var(--white);
        }
      }
      @media (max-width: 992px) {
        min-height: unset;
        height: auto;
      }
      @media (max-width: 768px) {
        padding: 0.5rem;
        h1 {
          font-size: 0.8rem;
        }
        a {
          font-size: 0.8rem;
          margin: 0;
          margin: 0;
        }
        span {
          font-size: 0.8rem;
        }
      }
      @media (max-width: 480px) {
        padding: 0.5rem;
        gap: 2.5px;
        h1 {
          font-size: 0.6rem;
        }
        a {
          font-size: 0.6rem;
          margin: 0;
        }
        span {
          font-size: 0.5rem;
        }
      }
    }
  }
  /*
  p {
    margin: 1.5rem 0;
    font-size: 1.3rem;
    text-align: justify;
    line-height: 2;
    @media (max-width: 450px) {
      font-size: 1rem;
    }
  }
  .article_body {
    p,
    li {
      font-size: 1rem;
      line-height: 2;
      text-align: justify;
      margin-top: 0.5rem;
      margin-bottom: 0;
    }
  }
    */
}
</style>
