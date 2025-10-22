<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold text-center my-8">Daftar UMKM</h1>
    <div class="flex flex-col md:flex-row gap-4 mb-8">
      <SearchBar @search="updateSearchQuery" />
      <CategoryFilter :categories="categories" @filter="updateCategoryFilter" />
    </div>
    <div v-if="paginatedData.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <DataCard v-for="data in paginatedData" :key="data.id" :data="data" />
    </div>
    <div v-else class="text-center text-gray-500">
      <p>Tidak ada UMKM yang ditemukan.</p>
    </div>
    <Pagination :current-page="currentPage" :total-pages="totalPages" @page-change="changePage" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import datas from '~/data/datas.json'
import DataCard from '~/components/DataCard.vue'
import SearchBar from '~/components/SearchBar.vue'
import CategoryFilter from '~/components/CategoryFilter.vue'
import Pagination from '~/components/Pagination.vue'

const alldatas = ref(datas)
const searchQuery = ref('')
const categoryFilter = ref('')
const currentPage = ref(1)
const itemsPerPage = 6

const categories = computed(() => {
  const allCategories = alldatas.value.map(data => data.category)
  return ['Semua', ...new Set(allCategories)]
})

const filtereddatas = computed(() => {
  let result = alldatas.value

  if (searchQuery.value) {
    result = result.filter(data =>
      data.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  if (categoryFilter.value && categoryFilter.value !== 'Semua') {
    result = result.filter(data => data.category === categoryFilter.value)
  }

  return result
})

const totalPages = computed(() => {
  return Math.ceil(filtereddatas.value.length / itemsPerPage)
})

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filtereddatas.value.slice(start, end)
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
