<template>
  <TheHeader @search="updateSearchQuery" @toggle-mobile-menu="handleToggle">
    <template #search>
      <SearchBar @search="updateSearchQuery" placeholder="Cari UMKM" />
    </template>
  </TheHeader>
  <MobileMenu v-if="isMobileMenuOpen" @close="handleToggle" />
  <TheAbout />
  <CategoryCard />
  <!-- <BestMSME/> -->
  <ProductCollection />
  <TheSwap/>
  <TestimonialCarrousel/>
  <TheFooter/>
</template>

<script setup>
import { computed, ref } from 'vue'
import CategoryFilter from '~/components/CategoryFilter.vue'
import SearchBar from '~/components/SearchBar.vue'
import TheAbout from '~/components/TheAbout.vue'
import TheHeader from '~/components/TheHeader.vue'
import BestMSME from '~/components/BestMSME.vue'
import TestimonialCarrousel from '~/components/TestimonialCarrousel.vue'
const searchQuery = ref("");
const categoryFilter = ref("");
const currentPage = ref(1);

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
