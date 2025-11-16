<template>
    <section class=" py-16 sm:py-24 bg-[#F6F1E9]">
        <div class="container">

            <div class="text-center">
                <h2 class="text-5xl font-bebas-neue text-gray-900 uppercase">
                    Produk <span class="orange-primary">UMKM</span> baru
                </h2>
                <p class="mt-4 max-w-2xl mx-auto text-lg font-poppins">
                    Koleksi baru yang tengah naik daun dari pelaku usaha kecil dan menengah di seluruh Indonesia.
                </p>
            </div>

            <div class="mt-12 lg:mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

                <div v-for="product in products" :key="product.id"
                    class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl">

                    <div class="bg-white rounded-xl shadow-lg flex transition-all duration-300 hover:shadow-2xl">

                        <div class="w-2/5 bg-gray-100 p-4 flex items-center justify-center rounded-l-xl">
                            <img src="/images/product/makanan.jpg" alt="Bilih 7 Muaro"
                                class="max-w-full max-h-40 object-contain">
                        </div>

                        <div class="w-3/5 p-4 flex flex-col">
                            <div class="flex justify-between items-center mb-1">
                                <p class="text-xs font-poppins text-gray-500">Makanan</p>
                                <div class="flex items-center gap-1">
                                    <Icon name="heroicons:star-solid" class="w-4 h-4 text-yellow-400" />
                                    <span class="text-xs font-semibold text-gray-800">5.0</span>
                                </div>
                            </div>

                            <h3 class="text-lg font-semibold text-gray-800 leading-tight">Bilih 7 Muaro</h3>
                            <p class="mt-1 text-base text-[#3a6b5a]">Rp1.500.000</p>

                            <p class="mt-3 text-xs font-poppins text-gray-500 line-clamp-2 flex-1">
                                Lorem Ipsum Dolor Sit Amet Consectur Sit Amet
                            </p>

                            <a href="#"
                                class="mt-4 text-sm font-semibold text-[#3a6b5a] hover:text-[#2f5a4a] flex items-center gap-1">
                                Belanja Sekarang
                                <Icon name="heroicons:arrow-right" class="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <div class="mt-16 text-center">
                <button
                    class="bg-[#3a6b5a] hover:bg-[#2f5a4a] text-white font-medium py-3 px-8 rounded-full shadow-lg transition-colors text-lg">
                    Lihat lebih banyak
                </button>
            </div>

        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

// Mengatur judul halaman
useHead({
    title: 'Produk UMKM Baru - NAVVR0'
})

const products = ref([
    { id: 1, name: 'Bilih 7 Muaro', category: 'Makanan', rating: 5.0, price: '1.500.000', description: 'Lorem ipsum dolor sit amet consectetur sit amet.', image: '/images/product/makanan.jpg' },
    { id: 2, name: 'Bilih 7 Muaro', category: 'Makanan', rating: 5.0, price: '1.500.000', description: 'Lorem ipsum dolor sit amet consectetur sit amet.', image: '/images/product/makanan.jpg' },
    { id: 3, name: 'Bilih 7 Muaro', category: 'Makanan', rating: 5.0, price: '1.500.000', description: 'Lorem ipsum dolor sit amet consectetur sit amet.', image: '/images/product/makanan.jpg' },
]);
</script>