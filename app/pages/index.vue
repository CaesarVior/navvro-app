<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold text-center my-8">Daftar UMKM</h1>
    <div class="flex flex-col md:flex-row gap-4 mb-8">
      <SearchBar @search="updateSearchQuery" />
      <CategoryFilter :categories="categories" @filter="updateCategoryFilter" />
    </div>
    <div v-if="paginatedMsmes.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <MsmeCard v-for="msme in paginatedMsmes" :key="msme.id" :msme="msme" />
    </div>
    <div v-else class="text-center text-gray-500">
      <p>Tidak ada UMKM yang ditemukan.</p>
    </div>
    <Pagination :current-page="currentPage" :total-pages="totalPages" @page-change="changePage" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import CategoryFilter from '~/components/CategoryFilter.vue'
import MsmeCard from '~/components/MsmeCard.vue'
import Pagination from '~/components/Pagination.vue'
import SearchBar from '~/components/SearchBar.vue'
import msmes from '~/data/msme.json'
console.log(msmes);

const allMsmes = ref(msmes)
const searchQuery = ref('')
const categoryFilter = ref('')
const currentPage = ref(1)
const itemsPerPage = 6

const categories = computed(() => {
  const allCategories = allMsmes.value.map(msme => msme.category)
  return ['Semua', ...new Set(allCategories)]
})

const filteredMsmes = computed(() => {
  let result = allMsmes.value

  if (searchQuery.value) {
    result = result.filter(msme =>
      msme.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  if (categoryFilter.value && categoryFilter.value !== 'Semua') {
    result = result.filter(msme => msme.category === categoryFilter.value)
  }

  return result
})

const totalPages = computed(() => {
  return Math.ceil(filteredMsmes.value.length / itemsPerPage)
})

const paginatedMsmes = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredMsmes.value.slice(start, end)
})

const updateSearchQuery = (query) => {
  searchQuery.value = query
  currentPage.value = 1
}

const updateCategoryFilter = (category) => {
  categoryFilter.value = category
  currentPage.value = 1
}

const changePage = (page) => {
  currentPage.value = page
}
</script>
