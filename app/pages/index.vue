<template>
  <TheHeader @search="updateSearchQuery">
    <template #search>
      <SearchBar @search="updateSearchQuery" />
    </template>
  </TheHeader>

  <TheAbout />
  <TheSwap />
  <main class="max-w-7xl mx-auto p-6">
    <h1 class="text-4xl font-extrabold text-center text-gray-800 my-8">
      Daftar UMKM
    </h1>
    <div class="flex flex-col md:flex-row gap-4 mb-8">
      <CategoryFilter :categories="categories" @filter="updateCategoryFilter" />
    </div>
    <div
      v-if="paginatedMsmes.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <MsmeCard v-for="msme in paginatedMsmes" :key="msme.id" :msme="msme" />
    </div>
    <div v-else class="text-center text-gray-500">
      <p>Tidak ada UMKM yang ditemukan.</p>
    </div>
    <Pagination
      :current-page="currentPage"
      :total-pages="totalPages"
      @page-change="changePage"
    />
  </main>

  <TheFooter />
</template>

<script setup>
import { computed, ref } from "vue";
import CategoryFilter from "~/components/CategoryFilter.vue";
import MsmeCard from "~/components/MsmeCard.vue";
import Pagination from "~/components/Pagination.vue";
import SearchBar from "~/components/SearchBar.vue";
//import TheAbout from "~/components/TheAbout.vue";
import TheHeader from "~/components/TheHeader.vue";
import msmes from "~/data/msme.json";

const allMsmes = ref(msmes);
const searchQuery = ref("");
const categoryFilter = ref("");
const currentPage = ref(1);
const itemsPerPage = 6;

const categories = computed(() => {
  const allCategories = allMsmes.value.map((msme) => msme.category);
  return ["Semua", ...new Set(allCategories)];
});

const filteredMsmes = computed(() => {
  let result = allMsmes.value;

  if (searchQuery.value) {
    result = result.filter((msme) =>
      msme.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  if (categoryFilter.value && categoryFilter.value !== "Semua") {
    result = result.filter((msme) => msme.category === categoryFilter.value);
  }

  return result;
});

const totalPages = computed(() => {
  return Math.ceil(filteredMsmes.value.length / itemsPerPage);
});

const paginatedMsmes = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredMsmes.value.slice(start, end);
});

const updateSearchQuery = (query) => {
  searchQuery.value = query;
  currentPage.value = 1;
};

const updateCategoryFilter = (category) => {
  categoryFilter.value = category;
  currentPage.value = 1;
};

const changePage = (page) => {
  currentPage.value = page;
};
</script>
