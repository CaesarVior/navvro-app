<style scoped>
.primary-collor {
  background-color: #ffffff;
}
</style>

<template>
  
  <ListProductHeader />
  
  <HeroBanner />
   <div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
         <div class="max-w-7xl flex flex-col items-center">
            <div class="w-full max-w-3xl">
              
          <SearchBar placeholder="Cari produk" @search=getSearchValue />
               <h2 v-if="searchValue && searchValue !== '...'"
            class="text-lg font-medium text-gray-700 mb-4 text-center my-3">
                  Hasil Pencarian untuk "{{ searchValue }}"
                 </h2>
             
        </div>
           </div>

         <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">

            <div class="md:col-span-1">
                   
          <FilterSidebar v-model:selectedCategories="selectedCategories" v-model:minPrice="minPrice"
            v-model:maxPrice="maxPrice" />
             
        </div>

            <div class="md:col-span-3">
               <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-[85vh] overflow-y-auto">
                 
            <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
                
          </div>
          <div v-if="filteredProducts.length === 0" class="text-center mt-10 text-gray-500">
            <p class="text-lg font-medium">Oops! Produk tidak ditemukan.</p>
            <p>Coba ubah filter atau kata kunci pencarian Anda.</p>
          </div>
             
        </div>

           </div>
        </div>
     </div>
  
  <TheFooter />
</template>

<script setup>
import { ref, computed } from 'vue';
import ListProductHeader from '~/components/SecondHeader.vue';
import HeroBanner from '~/components/HeroBanner.vue';
import TheFooter from '~/components/TheFooter.vue';
import ProductCard from '~/components/ProductCard.vue';
import FilterSidebar from '~/components/FilterSidebar.vue';
import SearchBar from '~/components/SearchBar.vue';
import umkm from '~/data/products.json'

const stores = ref(umkm)
const searchValue = ref("...")

// --- PERUBAHAN 3: Buat state untuk menampung filter ---
const selectedCategories = ref([])
const minPrice = ref('') // Gunakan string kosong, sama seperti di child
const maxPrice = ref('') // Gunakan string kosong, sama seperti di child

const getSearchValue = (value) => {
  if (value) {
    searchValue.value = value
  }
  else {
    searchValue.value = "..."
  }
}

// --- PERUBAHAN 4: Logika 'computed' yang di-update ---
const filteredProducts = computed(() => {

  // 1. Dapatkan semua produk (logika Anda sebelumnya, sudah benar)
  const allProducts = stores.value.flatMap(store => {
    return store.product.map(product => {
      return {
        ...product,
        "id_toko": store.id,
        "nama_toko": store.name,
        "kategori_toko": store.category,
      }
    })
  })

  let products = allProducts;

  // 2. Filter berdasarkan SearchValue
  if (searchValue.value && searchValue.value !== "...") {
    const query = searchValue.value.toLowerCase();
    products = products.filter(product => {
      const productName = product.name.toLowerCase()
      const productCategory = product.category.toLowerCase()
      return productName.includes(query) || productCategory.includes(query);
    })
  }

  // --- LOGIKA FILTER BARU ---


  if (selectedCategories.value.length > 0) {
    products = products.filter(product =>
      selectedCategories.value.includes(product.kategori_toko) ||  selectedCategories.value.includes(product.category) 
    )
  }

  const min = parseFloat(minPrice.value)
  if (!isNaN(min) && min > 0) {
    products = products.filter(product =>
      product.price >= min
    )
  }

  const max = parseFloat(maxPrice.value)
  if (!isNaN(max) && max > 0) {
    products = products.filter(product =>
      product.price <= max
    )
  }

  return products;
})
</script>