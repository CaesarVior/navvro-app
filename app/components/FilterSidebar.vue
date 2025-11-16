<template>
  <aside class="bg-gray-50 p-6 rounded-lg shadow-sm">
    <div class="mb-8">
      <h3 class="font-semibold text-gray-800 mb-3">HARGA</h3>

      <div class="relative mt-4">
        <div class="flex items-center w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
          <span class="px-2 py-1 border-r border-gray-300 font-poppins text-sm">Rp</span>
          <input type="number" placeholder="Harga Minimum" class="w-full py-2 border-none focus:ring-0 text-sm"
            v-model="minPrice">
        </div>
      </div>

      <div class="relative mt-3">
        <div class="flex items-center w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
          <span class="px-2 py-1 border-r border-gray-300 font-poppins text-sm">Rp</span>
          <input type="number" placeholder="Harga Maksimum" class="w-full py-2 border-none focus:ring-0 text-sm"
            v-model="maxPrice">
        </div>
      </div>
    </div>

    <div class="mb-6">
      <h3 class="filter-title">LOKASI</h3>
      <div class="relative mt-4">
        <button @click="isOpen = !isOpen"
          class="inline-flex items-center w-full justify-between text-gray-500 font-poppins bg-white border border-gray-400 focus:ring-4 focus:ring-orange-200 shadow-xs font-medium leading-5 rounded-lg text-sm px-4 py-2.5 focus:outline-none"
          type="button">
          <span class="truncate">
            <span v-if="selectedLocations.length === 0">Cari lokasi</span>
            <span v-else>{{selectedLocations.map(loc => loc.name).join(', ')}}</span>
          </span>
          <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
            height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m19 9-7 7-7-7" />
          </svg>
        </button>
        <div v-if="isOpen"
          class="absolute top-full mt-2 z-10 bg-white border border-gray-200 rounded-lg shadow-lg w-full">
          <ul class="p-2 text-sm text-gray-700 font-medium">
            <li v-for="location in locations" :key="location.id">
              <label :for="'loc-' + location.id"
                class="flex items-center w-full p-2 hover:bg-gray-100 rounded cursor-pointer">
                <input :id="'loc-' + location.id" type="checkbox" :value="location" v-model="selectedLocations"
                  class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500">
                <span class="ml-2">{{ location.name }}</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mb-6">
      <h3 class="font-semibold text-gray-800 mb-3">KATEGORI</h3>
      <div class="space-y-2">
        <div>
          <input type="checkbox" id="cat1" class="rounded text-[#FF8B49]" v-model="selectedCategories" value="Makanan">
          <label for="cat1" class="ml-2 text-sm text-gray-600">Makanan</label>
        </div>
        <div>
          <input type="checkbox" id="cat2" class="rounded text-[#FF8B49]" v-model="selectedCategories" value="Minuman">
          <label for="cat2" class="ml-2 text-sm text-gray-600">Minuman</label>
        </div>
        <div>
          <input type="checkbox" id="cat3" class="rounded text-[#FF8B49]" v-model="selectedCategories" value="Jasa">
          <label for="cat3" class="ml-2 text-sm text-gray-600">Jasa</label>
        </div>
        <div>
          <input type="checkbox" id="cat4" class="rounded text-[#FF8B49]" v-model="selectedCategories"
            value="Pertanian & Perkebunan">
          <label for="cat4" class="ml-2 text-sm text-gray-600">Pertanian & Perkebunan</label>
        </div>
        <div>
          <input type="checkbox" id="cat5" class="rounded text-[#FF8B49]" v-model="selectedCategories" value="ATK">
          <label for="cat5" class="ml-2 text-sm text-gray-600">Alat Tulis</label>
        </div>
        <div>
          <input type="checkbox" id="cat6" class="rounded text-[#FF8B49]" v-model="selectedCategories" value="Fashion">
          <label for="cat6" class="ml-2 text-sm text-gray-600">Fashion & Aksesoris</label>
        </div>
        <div>
          <input type="checkbox" id="cat7" class="rounded text-[#FF8B49]" v-model="selectedCategories" value="craft">
          <label for="cat7" class="ml-2 text-sm text-gray-600">Kerajinan</label>
        </div>
      </div>
    </div>

    <button class="w-full bg-red-900 text-white py-2 rounded-lg font-medium hover:bg-red-800 transition-colors"
      @click="clearFilters">
      Hapus Semua
    </button>
  </aside>
</template>

<script setup>
import { ref } from 'vue'

// --- PERUBAHAN 5: Gunakan defineModel ---
// Ini adalah variabel yang terhubung DUA ARAH ke parent
const selectedCategories = defineModel('selectedCategories', { default: () => [] })
const minPrice = defineModel('minPrice', { default: '' })
const maxPrice = defineModel('maxPrice', { default: '' })
// Catatan: selectedLocations tetap lokal di sini karena Anda belum memintanya di parent
// Jika Anda ingin filter lokasi, Anda juga harus mengubahnya menjadi defineModel.

// --- Data untuk Filter Lokasi (Kode Anda sebelumnya) ---
const selectedLocations = ref([])
const isOpen = ref(false)
const locations = ref([
  { id: 1, name: 'Klojen' },
  { id: 2, name: 'Lowokwaru' },
  { id: 3, name: 'Sukun' },
  { id: 4, name: 'Kedungkandang' },
  { id: 5, name: 'Blimbing' },
])

// --- PERUBAHAN 6: Fungsi untuk menghapus filter ---
const clearFilters = () => {
  // Ini akan otomatis meng-update parent karena kita pakai defineModel
  selectedCategories.value = []
  minPrice.value = ''
  maxPrice.value = ''

  // Kosongkan juga filter lokal (lokasi)
  selectedLocations.value = []
}
</script>