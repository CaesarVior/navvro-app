<template>
  <TheHeader @search="updateSearchQuery" @toggle-mobile-menu="handleToggle">
    <template #search>
      <SearchBar @search="updateSearchQuery" placeholder="Cari UMKM"/>
    </template>
  </TheHeader>
  <MobileMenu v-if="isMobileMenuOpen" @close="handleToggle" />
  <TheAbout />
  <CategoryCard />
  <ProductCollection />
  
</template>

<script setup>
import { computed, ref } from 'vue'
import CategoryFilter from '~/components/CategoryFilter.vue'
import MsmeCard from '~/components/MsmeCard.vue'
import Pagination from '~/components/Pagination.vue'
import SearchBar from '~/components/SearchBar.vue'
import TheAbout from '~/components/TheAbout.vue'
import TheHeader from '~/components/TheHeader.vue'
import msmes from '~/data/msme.json'

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
  categoryFilter.value = category
  currentPage.value = 1
}

const changePage = (page) => {
  currentPage.value = page;
};

const isMobileMenuOpen = ref(false);

function handleToggle() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}
</script>
