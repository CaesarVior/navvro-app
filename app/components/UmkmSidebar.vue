<template>
    <aside class="bg-gray-50 p-6 rounded-lg shadow-sm">

        <!-- <div class="mb-8">
            <h3 class="font-semibold text-gray-800 mb-3">HARGA</h3>
            <div class="relative mt-4">
                <div class="flex items-center w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
                    <span class="px-2 py-1 border-r border-gray-300 font-poppins text-sm">Rp</span>
                    <input type="number" placeholder="Harga Minimum" 
                           class="w-full py-2 border-none focus:ring-0 text-sm"
                           v-model="minPrice">
                </div>
            </div>
            <div class="relative mt-3">
                <div class="flex items-center w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
                    <span class="px-2 py-1 border-r border-gray-300 font-poppins text-sm">Rp</span>
                    <input type="number" placeholder="Harga Maksimum" 
                           class="w-full py-2 border-none focus:ring-0 text-sm"
                           v-model="maxPrice">
                </div>
            </div>
        </div> -->

        <div class="mb-6">
            <h3 class="filter-title">LOKASI</h3>
            <div class="relative mt-4">
                <button @click="isLocationOpen = !isLocationOpen"
                    class="inline-flex items-center w-full justify-between text-gray-500 font-poppins bg-white border border-gray-400 focus:ring-4 focus:ring-orange-200 shadow-xs font-medium leading-5 rounded-lg text-sm px-4 py-2.5 focus:outline-none"
                    type="button">
                    <span class="truncate">
                        <span v-if="selectedLocations.length === 0">Cari lokasi</span>
                        <span v-else>{{ selectedLocations.map(loc => loc.name).join(', ') }}</span>
                    </span>
                    <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m19 9-7 7-7-7" />
                    </svg>
                </button>

                <div v-if="isLocationOpen"
                    class="absolute top-full mt-2 z-10 bg-white border border-gray-200 rounded-lg shadow-lg w-full max-h-60 overflow-y-auto">
                    <ul class="p-2 text-sm text-gray-700 font-medium">
                        <li v-for="location in uniqueLocations" :key="location.id">
                            <label :for="'loc-' + location.id"
                                class="flex items-center w-full p-2 hover:bg-gray-100 rounded cursor-pointer">
                                <input :id="'loc-' + location.id" type="checkbox" :value="location"
                                    v-model="selectedLocations"
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
                <div v-for="category in uniqueCategories" :key="category.key">
                    <input :id="'cat-' + category.key" type="checkbox" :value="category.key"
                           v-model="selectedCategories" 
                           class="rounded text-orange-500">
                    <label :for="'cat-' + category.key" class="ml-2 text-sm text-gray-600">{{ category.name }}</label>
                </div>
            </div>
        </div>

        <button @click="clearFilters"
            class="w-full bg-red-900 text-white py-2 rounded-lg font-medium hover:bg-red-800 transition-colors">
            Hapus Semua
        </button>
    </aside>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue'
// 1. Impor data JSON untuk mendapatkan daftar filter
import stores from '~/data/products.json'

// --- State Internal Sidebar ---
const minPrice = ref('');
const maxPrice = ref('');
const selectedLocations = ref([]); // Akan berisi objek { id, name }
const selectedCategories = ref([]); // Akan berisi string 'fnb', 'fashion'
const isLocationOpen = ref(false);

// 2. Mendefinisikan event 'emit' untuk dikirim ke parent
const emit = defineEmits(['update:filters']);

// --- Helper & Data Dinamis ---

// Fungsi untuk mengubah 'fnb' -> 'Makanan & Minuman'
const formatCategoryName = (key) => {
    const names = {
        'fnb': 'Makanan & Minuman',
        'fashion': 'Fashion',
        'craft': 'Kerajinan'
    };
    return names[key] || key.charAt(0).toUpperCase() + key.slice(1);
}

// Fungsi untuk mengambil Kota dari string lokasi
const getCity = (lokasiString) => lokasiString.split(', ').pop();

// 3. Computed Property untuk Lokasi Unik
const uniqueLocations = computed(() => {
    // Ambil semua lokasi -> ['Kota Malang', 'Yogyakarta', 'Surabaya', 'Bali', 'Kota Malang']
    const allCities = stores.map(store => getCity(store.lokasi));
    // Filter unik -> ['Kota Malang', 'Yogyakarta', 'Surabaya', 'Bali']
    const uniqueCities = [...new Set(allCities)];
    // Format ke objek { id, name }
    return uniqueCities.map((city, index) => ({
        id: index + 1,
        name: city
    }));
});

// 4. Computed Property untuk Kategori Unik
const uniqueCategories = computed(() => {
    const allCategories = stores.map(store => store.category);
    const uniqueCategoryKeys = [...new Set(allCategories)];
    // Format ke objek { key, name }
    return uniqueCategoryKeys.map(key => ({
        key: key,
        name: formatCategoryName(key)
    }));
});

// 5. Kirim data filter ke parent SETIAP KALI ada perubahan
watchEffect(() => {
    emit('update:filters', {
        locations: selectedLocations.value.map(loc => loc.name), // Kirim array nama ['Kota Malang']
        categories: selectedCategories.value, // Kirim array key ['fnb']
        minPrice: minPrice.value,
        maxPrice: maxPrice.value
    });
});

// 6. Fungsi untuk tombol "Hapus Semua"
const clearFilters = () => {
    minPrice.value = '';
    maxPrice.value = '';
    selectedLocations.value = [];
    selectedCategories.value = [];
    isLocationOpen.value = false;
};
</script>