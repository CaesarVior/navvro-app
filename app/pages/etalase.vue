<style>
.primary-collor-etalase {
  background-color: #ffffff;
}
</style>
<template>
    <ListProductHeader/>
    <HeroBanner/>
    <div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="max-w-7xl flex flex-col items-center">
        <div class="w-3xl">
          <SearchBar/>
          <h2 class="text-lg font-medium text-gray-700 mb-4 text-center my-3">
            Hasil Pencarian untuk "...."
          </h2>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        <div class="md:col-span-1">
          <FilterSidebar />
        </div>
        
        <div class="md:col-span-3">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard 
              v-for="product in products" 
              :key="product.id"
              :product="product"
            />
          </div>
          
        </div>
      </div>
    </div>
  </div>
    <TheFooter/>
</template>
<script setup>
import { ref } from 'vue';
import ListProductHeader from '~/components/SecondHeader.vue';
import HeroBanner from '~/components/HeroBanner.vue';
import TheFooter from '~/components/TheFooter.vue';
import ProductCard from '~/components/ProductCard.vue';
const products = ref([
  { id: 1, name: 'Ikan Bakar Mr Raffi', seller: 'Raffi Ahmad', category: 'Makanan', price: '2.000.000', image: '', isTopSeller: true },
  { id: 2, name: 'Sambal Bu\'de', seller: 'Bu\'de', category: 'Makanan', price: '1.500.000', image: '', isTopSeller: false },
  { id: 3, name: 'Rendang Kering', seller: 'Uni Padang', category: 'Makanan', price: '3.000.000', image: '', isTopSeller: false },
  { id: 4, name: 'Tas Anyam', seller: 'Pengrajin Lokal', category: 'Fashion', price: '500.000', image: '', isTopSeller: false },
  { id: 5, name: 'Tas Anyam', seller: 'Pengrajin Lokal', category: 'Fashion', price: '500.000', image: '', isTopSeller: false },
  { id: 6, name: 'Tas Anyam', seller: 'Pengrajin Lokal', category: 'Fashion', price: '500.000', image: '', isTopSeller: false },
  // ... data produk lainnya
]);
</script>
