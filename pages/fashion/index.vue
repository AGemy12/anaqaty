<template>
  <section class="section_container container">
    <PageTitle page-title="موضة" />
    <div class="section_content">
      <div>
        <Category :category-details="categoryData" />
        <Pagination :paginations-data="paginationsNum" />
      </div>
      <div class="section_content_part">
        <PageSubTitle page-sub-title="الأحدث" />
        <Category :category-details="categoryItemData" />
      </div>
      <div class="section_content_part">
        <PageSubTitle page-sub-title="الأكثر مشاهدة" />
        <Category :category-details="categoryItemData" />
      </div>
    </div>
  </section>
</template>

<script setup>
import Category from "~/components/main/Category.vue";
import PageSubTitle from "~/components/mini/PageSubTitle.vue";
import PageTitle from "~/components/mini/PageTitle.vue";
import Pagination from "~/components/mini/Pagination.vue";
import { ref, onMounted } from "vue";

const { $axiosRequest } = useNuxtApp();

const categoryData = ref([]);

const pageData = ref({
  categoryItemData: [],
});

async function asyncData() {
  try {
    let res = await $axiosRequest.get("products");
    categoryData.value = res.data;
    console.log(categoryData);
  } catch (error) {
    console.log("Erro ===>", error);
  }
}

// const categoryItemData = ref([
//   {
//     id: 1,
//     title: "موضة",
//     src: "https://static.sayidaty.net/styles/900_scale/public/2024-09/376780.jpg.webp?VersionId=7kuUM4iaAn79I2QpVlQk71gc16IHsFsh",
//     eventPath: "##",
//     eventTitle: "الصندوق الثقافي يشارك بمعرض الرياض الدولي للكتاب",
//     categoryPathLink: "##",
//     categoryItemImg: "##",
//     categoryItemType: "موضة",
//   },
//   {
//     id: 2,
//     title: "موضة",
//     src: "https://static.sayidaty.net/styles/600x380/public/2024-09/shutterstock_1585399819_0_0.jpg.webp?VersionId=GRA8bTbdxhGyD9te0fDzq2Y3zsYADw9k",
//     eventPath: "##",
//     eventTitle:
//       "أجمل الفيديوهات بمناسبة اليوم الوطني السعودي 94: إبداع يعكس الهوية",
//     categoryPathLink: "##",
//     categoryItemImg: "##",
//     categoryItemType: "موضة",
//   },
//   {
//     id: 3,
//     title: "موضة",
//     src: "https://static.sayidaty.net/styles/600x380/public/2024-09/376793.jpg.webp?VersionId=1L5Zy4hQeZgsJyPLglrFumdjXgsvU7YY",
//     eventPath: "##",
//     eventTitle: " أفكار لتزيين الأرفف الفارغة في المنزل بطريقة أنيقة",
//     categoryPathLink: "##",
//     categoryItemType: "  منزل و ديكور ",
//   },
// ]);

const paginationsNum = ref([
  { id: 1, label: "1" },
  { id: 2, label: "2" },
  { id: 3, label: "3" },
  { id: 4, label: "4" },
  { id: 5, label: "5" },
  { id: 6, label: "6" },
]);

onMounted(() => {
  asyncData();
});
</script>

<style lang="scss">
.section_container {
  .section_content {
    .section_content_part {
      margin: 2rem 0;
    }
  }
}
</style>
