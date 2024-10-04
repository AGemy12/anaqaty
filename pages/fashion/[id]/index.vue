<template>
  <section class="article_container container">
    <div class="article_head_content">
      <ArticleSection
        :with-article-title="true"
        main-head="الذهبي والبرونزي والفضي ألوان رائجة في ديكور المنزل في 2025 "
        article-date="سبتمبر 24, 2024 "
        cat-path="##"
        cat-title="موضة"
        article-section-para="تعد مجموعات ’هدية الملوك‘ من عطور أمواج الخيار المثالي لكل المناسبات. حيث تجسد الروح الفريدة لدار أمواج وتبرز معاني الضوء، والإشراق، والدفء، والتكاتف التي تميز هذا الموسم. كل عطر في هذه المجموعات يروي حكاية خاصة تغمر الحواس وتلامس المشاعر."
        :has-paragraph="true"
      />
      <ArticleSection
        main-head="الذهبي والبرونزي والفضي ألوان رائجة في ديكور المنزل في 2025 "
        article-date="سبتمبر 24, 2024 "
        cat-path="##"
        cat-title="موضة"
        article-section-para="وتمتلك أمواج حضوراً عالمياً مميزاً حيث تصل منتجاتها إلى عشاق الفخامة إلى ما يقارب 100 دولة حول العالم. كما يبلغ عدد بوتيكاتها المستقلة الآن 14 بوتيك ومن ضمنهم بوتيكات تم افتتاحها مؤخراً في كلا من عمان، والإمارات العربية المتحدة، والولايات المتحدة الأمريكية، والصين، وماليزيا، فضلاً عن نجاحها في توسيع شبكة عرض منتجاتها لما يقرب من 1,000 متجر راقٍ في مواقع استراتيجية ذات هوية خاصة بها في كبرى المتاجر العالمية، ودور العطور، والمطارات."
        :has-paragraph="true"
      />
    </div>
  </section>
</template>

<script setup>
import ArticleSection from "~/components/mini/ArticleSection.vue";
</script>

<style lang="scss">
.article_container {
  margin: 2rem 0;
  .article_head_content {
    img {
      width: 100%;
      display: block;
    }
  }
}
</style>
