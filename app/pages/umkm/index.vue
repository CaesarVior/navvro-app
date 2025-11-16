<style scoped>
.primary-collor {
    background-color: #ffffff;
}
</style>

<template>
    <ListProductHeader />
    <section class="relative h-96 bg-cover bg-center bg-[url('/images/banner.png')] rounded-xl">
        <div class="absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl">
            <h2 class="text-white text-2xl sm:text-4xl font-bebas-neue tracking-widest text-center shadow-lg px-4">
                TEMUKAN UMKM DISINI
            </h2>
        </div>
    </section>
    <div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
            <div class="max-w-7xl flex flex-col items-center mb-12">
                <div class="w-full max-w-3xl"> <div class="flex-grow">
                        <input type="text" placeholder="Cari UMKM..."
                            class="w-full px-4 py-2 p-5 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white text-xs text-white bg-primary"
                            v-model="searchQuery">
                    </div>
                    <h2 v-if="searchQuery" class="text-lg font-medium text-gray-700 mb-4 text-center my-3">
                        Hasil Pencarian untuk "{{ searchQuery }}"
                    </h2>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4"> <div class="md:col-span-1">
                    <UmkmSidebar @update:filters="updateFilters" />
                </div>

                <div class="md:col-span-3">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <UmkmCard v-for="store in filteredStores" :key="store.id" :product="store" />
                        <div v-if="filteredStores.length === 0" class="col-span-full text-center text-gray-500 py-10">
                            <p class="text-xl font-semibold">Oops! Tidak ada UMKM yang cocok.</p>
                            <p>Coba ubah filter atau kata pencarian Anda.</p>
                        </div>
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
import TheFooter from '~/components/TheFooter.vue';
import UmkmCard from '~/components/UmkmCard.vue';
import UmkmSidebar from '~/components/UmkmSidebar.vue';

// Mengimpor data master UMKM
import allStores from '~/data/products.json';

// --- State untuk Filtering ---
const searchQuery = ref('');
const activeFilters = ref({
    locations: [],
    categories: [],
    minPrice: '',
    maxPrice: ''
});

// --- Fungsi untuk memperbarui filter ---
const updateFilters = (newFilters) => {
    activeFilters.value = newFilters;
};

// --- Fungsi Helper untuk mengambil Kota dari string lokasi ---
const getCity = (lokasiString) => {
    if (!lokasiString) return '';
    return lokasiString.split(', ').pop();
};

// --- Computed Property untuk memfilter daftar UMKM ---
const filteredStores = computed(() => {
    let stores = allStores;

    // 1. Filter berdasarkan Pencarian (Nama UMKM)
    if (searchQuery.value) {
        stores = stores.filter(store =>
            store.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    }

    // 2. Filter berdasarkan Lokasi
    const selectedLocs = activeFilters.value.locations;
    if (selectedLocs && selectedLocs.length > 0) {
        stores = stores.filter(store =>
            selectedLocs.includes(getCity(store.lokasi))
        );
    }

    // 3. Filter berdasarkan Kategori
    const selectedCats = activeFilters.value.categories;
    if (selectedCats && selectedCats.length > 0) {
        stores = stores.filter(store =>
            selectedCats.includes(store.category)
        );
    }

    // 4. Filter berdasarkan Harga
    // Catatan: JSON Anda tidak memiliki harga di level 'store'.
    // Logika ini akan memfilter store jika *salah satu* produknya masuk rentang harga.
    const minPrice = parseFloat(activeFilters.value.minPrice);
    const maxPrice = parseFloat(activeFilters.value.maxPrice);

    if (!isNaN(minPrice)) {
        stores = stores.filter(store => 
            store.product.some(p => p.price >= minPrice)
        );
    }
    if (!isNaN(maxPrice)) {
        stores = stores.filter(store => 
            store.product.some(p => p.price <= maxPrice)
        );
    }

    return stores;
});
</script>