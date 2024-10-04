<template>
  <div>
    <HeroCarousel />
    <div class="container">
      <Category
        :category-details="categoryItemData"
        categoryName="موضة"
        :home-page="true"
      />
      <Category
        :category-details="categoryItemData"
        categoryName="جمال"
        :home-page="true"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Category from "~/components/main/Category.vue";
import HeroCarousel from "~/components/main/HeroCarousel.vue";

const categoryItemData = ref([
  {
    id: 1,
    title: "موضة",
    src: "https://static.sayidaty.net/styles/900_scale/public/2024-09/376780.jpg.webp?VersionId=7kuUM4iaAn79I2QpVlQk71gc16IHsFsh",
    eventPath: "##",
    eventTitle: "الصندوق الثقافي يشارك بمعرض الرياض الدولي للكتاب",
    categoryPathLink: "/fashion",
    categoryItemImg: "##",
    categoryItemType: "موضة",
  },
  {
    id: 2,
    title: "موضة",
    src: "https://static.sayidaty.net/styles/600x380/public/2024-09/shutterstock_1585399819_0_0.jpg.webp?VersionId=GRA8bTbdxhGyD9te0fDzq2Y3zsYADw9k",
    eventPath: "##",
    eventTitle:
      "أجمل الفيديوهات بمناسبة اليوم الوطني السعودي 94: إبداع يعكس الهوية",
    categoryPathLink: "##",
    categoryItemImg: "##",
    categoryItemType: "موضة",
  },
  {
    id: 3,
    title: "موضة",
    src: "https://static.sayidaty.net/styles/600x380/public/2024-09/376793.jpg.webp?VersionId=1L5Zy4hQeZgsJyPLglrFumdjXgsvU7YY",
    eventPath: "##",
    eventTitle: " أفكار لتزيين الأرفف الفارغة في المنزل بطريقة أنيقة",
    categoryPathLink: "##",
    categoryItemType: "  منزل و ديكور ",
  },
]);
</script>

<style lang="scss" scoped></style>
