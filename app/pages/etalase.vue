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
          <h2 class="text-lg font-medium text-gray-700 mb-4 text-center my-3">
            Hasil Pencarian untuk {{ searchValue }}
          </h2>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div class="md:col-span-1">
          <FilterSidebar />
        </div>

        <div class="md:col-span-3">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-[85vh] overflow-y-auto">
            <ProductCard v-for="product in products" :key="product.id_produk" :product="product" />
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
import umkm from '~/data/umkm.json'
// const products = ref([
//   { id: 1, name: 'Ikan Bakar Mr Raffi', seller: 'Raffi Ahmad', category: 'Makanan', price: '2.000.000', image: '', isTopSeller: false },
//   { id: 2, name: 'Sambal Bu\'de', seller: 'Bu\'de', category: 'Makanan', price: '1.500.000', image: '', isTopSeller: false },
//   { id: 3, name: 'Rendang Kering', seller: 'Uni Padang', category: 'Makanan', price: '3.000.000', image: '', isTopSeller: false },
//   { id: 4, name: 'Tas Anyam', seller: 'Pengrajin Lokal', category: 'Fashion', price: '500.000', image: '', isTopSeller: false },
//   { id: 5, name: 'Tas Anyam', seller: 'Pengrajin Lokal', category: 'Fashion', price: '500.000', image: '', isTopSeller: false },
//   { id: 6, name: 'Tas Anyam', seller: 'Pengrajin Lokal', category: 'Fashion', price: '500.000', image: '', isTopSeller: false },
//   { id: 7, name: 'Tas Anyam', seller: 'Pengrajin Lokal', category: 'Fashion', price: '500.000', image: '', isTopSeller: false },
//   { id: 8, name: 'Tas Anyam', seller: 'Pengrajin Lokal', category: 'Fashion', price: '500.000', image: '', isTopSeller: false },
//   // ... data produk lainnya
// ]);

const stores = ref(umkm)
const searchValue = ref("...")
const getSearchValue = (value) => {
  if (value) {
    searchValue.value = value
  }
  else {
    searchValue.value = "..."
  }
}
const products = computed(() => {

  // .flatMap() adalah fungsi JS untuk "meratakan" array.
  // Ia akan mengambil array 'store.produk' dari SETIAP 'store'
  // lalu menggabungkan semuanya menjadi SATU array besar.
  const all = stores.value.flatMap(store => {
    return store.produk.map(product => {
      return {
        ...product,
        "id_toko": store.id,
        "nama_toko": store.nama
      }
    }

    )
  })

  
  if (searchValue.value && searchValue.value !== "...") {

    // 3. Simpan query pencarian dalam huruf kecil
    const query = searchValue.value.toLowerCase();

  //   // 4. Jalankan filter
    return all.filter(product => {
      const productName = product.nama.toLowerCase()
      const productCategory = product.kategori.toLowerCase()
      return productName.includes(query) || productCategory.includes(query);
    })
  }

  // Jika tidak ada pencarian, tampilkan semua
  return all;
})
// console.log(products.value);


</script>
