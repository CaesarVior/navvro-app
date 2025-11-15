<style scoped>
.primary-collor {
    background-color: #ffffff;
}
</style>
<template>
    <SecondHeader></SecondHeader>
    <MarketPlaceBanner />
    <div class="bg-stone-50">
        <main class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16">

            <section>
                <h2 class="text-4xl font-bebas-neue font-bold text-primary pt-18 text-center mb-2 tracking-wide">
                    PRODUK TERBAIK DARI TOKO INI
                </h2>
                <p class="text-center font-poppins text-gray-600 text-sm mb-6 mt-4">
                    Jelajahi koleksi unggulan yang paling disukai pelanggan kami. Temukan <br> kualitas, keunikan, dan
                    nilai terbaik di setiap produk.
                </p>

                <div class="flex space-x-6 overflow-x-auto pb-6 pt-12 items-center justify-center gap-8">
                    <div v-for="product in featuredProducts" :key="product.id"
                        class="bg-white rounded-lg shadow-md w-80 flex-shrink-0 transition-all duration-300 hover:shadow-xl">

                        <div class="relative h-65 w-full overflow-hidden rounded-t-lg">
                            <img :src="product.image" :alt="product.name" class="h-full w-full object-cover">

                            <div
                                class="absolute bottom-0 rounded-lg left-0 right-0 bg-[#3a6b5a] bg-opacity-90 text-white text-center py-2 text-sm font-semibold">
                                Diskon 50 %
                            </div>

                            <div class="absolute top-3 right-3 space-y-2">
                                <button
                                    class="bg-primary rounded-full p-2 shadow-md hover:bg-orange-600 transition-colors"
                                    aria-label="Tambah ke keranjang">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                        <path fill="white"
                                            d="M8.75 13a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm7.25-.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-3.25.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z" />
                                        <path fill="white" fill-rule="white"
                                            d="M17.274 3.473c-.476-.186-1.009-.217-1.692-.222A1.75 1.75 0 0 0 14 2.25h-4a1.75 1.75 0 0 0-1.582 1c-.684.006-1.216.037-1.692.223A3.25 3.25 0 0 0 5.3 4.563c-.367.493-.54 1.127-.776 1.998l-.628 2.303a3 3 0 0 0-1.01.828c-.622.797-.732 1.746-.621 2.834c.107 1.056.44 2.386.856 4.05l.026.107c.264 1.052.477 1.907.731 2.574c.265.696.602 1.266 1.156 1.699c.555.433 1.19.62 1.929.71c.708.084 1.59.084 2.675.084h4.724c1.085 0 1.966 0 2.675-.085c.74-.088 1.374-.276 1.928-.71c.555-.432.891-1.002 1.156-1.698c.255-.667.468-1.522.731-2.575l.027-.105c.416-1.665.748-2.995.856-4.05c.11-1.09 0-2.038-.622-2.835a3 3 0 0 0-1.009-.828l-.628-2.303c-.237-.871-.41-1.505-.776-1.999a3.25 3.25 0 0 0-1.426-1.089M7.272 4.87c.22-.086.486-.111 1.147-.118c.282.59.884.998 1.58.998h4c.698 0 1.3-.408 1.582-.998c.661.007.927.032 1.147.118c.306.12.572.323.768.587c.176.237.279.568.57 1.635l.354 1.297c-1.038-.139-2.378-.139-4.043-.139H9.622c-1.664 0-3.004 0-4.042.139l.354-1.297c.29-1.067.394-1.398.57-1.635a1.75 1.75 0 0 1 .768-.587M10 3.75a.25.25 0 0 0 0 .5h4a.25.25 0 1 0 0-.5zm-5.931 6.865c.279-.357.72-.597 1.63-.729c.931-.134 2.193-.136 3.986-.136h4.63c1.793 0 3.054.002 3.985.136c.911.132 1.352.372 1.631.73c.279.357.405.842.311 1.758c-.095.936-.399 2.16-.834 3.9c-.277 1.108-.47 1.876-.688 2.45c-.212.554-.419.847-.678 1.05c-.259.202-.594.331-1.183.402c-.61.073-1.4.074-2.544.074h-4.63c-1.144 0-1.935-.001-2.544-.074c-.59-.07-.924-.2-1.183-.402c-.26-.203-.467-.496-.678-1.05c-.218-.574-.411-1.342-.689-2.45c-.434-1.74-.739-2.964-.834-3.9c-.093-.916.033-1.402.312-1.759"
                                            clip-rule="evenodd" />
                                    </svg>
                                </button>

                            </div>
                            <div class="absolute top-13 right-3 space-y-2">
                                <button class="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition-colors"
                                    aria-label="Tambah ke keranjang">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                        <path fill="black"
                                            d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0" />
                                    </svg>
                                </button>

                            </div>
                        </div>
                        <div class="p-4 pt-2">
                            <div class="flex justify-between items-start">
                                <div>
                                    <span class="text-gray-500 text-sm font-poppins">Makanan</span>
                                    <h3 class="font-semibold text-gray-800 text-lg leading-tight mt-0.5">{{ product.name
                                    }}</h3>
                                    <span class="text-green-600 text-sm font-poppins">Rp. 10.000</span>
                                </div>
                                <div class="flex items-center gap-1 mt-1 flex-shrink-0">
                                    <Icon name="heroicons:star-solid" class="w-5 h-5 text-yellow-400" />
                                    <span class="text-md font-semibold text-gray-700">{{ product.rating }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div>
                <div class="grid grid-cols-1 md:grid-cols-2 mt-25 gap-6 sm:gap-8 mb-20">
                    <div class="col-span-1 bg-[#FFEBDF] px-5 py-6 rounded-lg">
                        <span class="text-white bg-[#3a6b5a] p-2 rounded-lg text-[50%] md:text-xs font-poppins">
                            Diskon 50%
                        </span>
                        <div class="mt-6 flex justify-between items-center">
                            <span class="font-bebas-neue text-4xl">HARI UMKM <br /> NASIONAL 20205</span>
                            <img src="/images/toko2.png" alt="gambar toko">

                        </div>
                        <p class="font-poppins text-sm">Lorem Ipsum Dolor Sit Amet <br /> Consectur Sit Amet</p>
                        <div class="mt-7 flex justify-center gap-1">
                            <button
                                class="bg-[#3a6b5a] hover:bg-[#2f5a4a] flex justify-center gap-1 text-white text-xs xl:text-sm font-poppins px-3 py-3 rounded-2xl mx-auto lg:mx-0 shadow-lg transition-colors">
                                <Icon class=" text-white w-3 h-3" name="solar:cart-bold" />
                                <span class=" font-poppins text-xs">Belanja sekarang</span>
                            </button>
                        </div>
                    </div>
                    <div class="col-span-1 bg-[#BB5E27] px-5 py-6 rounded-lg">
                        <span class="text-white bg-[#3a6b5a] p-2 rounded-lg text-[50%] md:text-xs font-poppins">
                            Diskon 50%
                        </span>
                        <div class="mt-6 flex justify-between items-center text-white">
                            <span class="font-bebas-neue text-4xl">FESTIVAL <br /> UMKM 2025</span>
                            <img src="/images/toko2.png" alt="gambar toko">
                        </div>
                        <p class="font-poppins text-sm text-white">Lorem Ipsum Dolor Sit Amet <br /> Consectur Sit Amet
                        </p>
                        <div class="mt-7 flex justify-center gap-1">
                            <button
                                class="bg-[#C2C2C2] flex justify-center gap-1 text-xs xl:text-sm font-poppins px-3 py-2 rounded-full mx-auto lg:mx-0 shadow-lg transition-colors">
                                <Icon class="w-3 h-3" name="mdi:clock-outline" />
                                <span class="font-poppins text-xs">23:59:58</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>


            <section class="py-20">
                <h2 class="text-4xl font-bebas-neue text-primary text-center mb-2 tracking-wide">
                    LOKASI
                </h2>
                <p class="text-center text-gray-600 text-sm mb-10">
                    Temukan toko ini dengan cepat di area terdekat Anda.
                </p>

                <div class="rounded-lg shadow-lg overflow-hidden h-[450px] w-full">

                    <iframe src="https://maps.app.goo.gl/wY7DYigQ1GMAnSGLA" width="100%" height="450" style="border:0;"
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>

                </div>
            </section>


            <section class="mt-16">
                <div class="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 items-center">
                    <div class="items-center justify-center">
                        <h2 class="text-4xl font-bebas-neue text-gray-900 mb-6 tracking-wide">
                            PRODUK LAIN DARI TOKO INI
                        </h2>
                    </div>
                    <div class="col-span-2 gap-6">
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div v-for="product in allProducts" :key="product.id">
                                <div>

                                    <div class="p-4 flex items-center space-x-3">
                                        <img src="https://via.placeholder.com/40" alt="Seller"
                                            class="w-10 h-10 rounded-full bg-gray-300">
                                        <div>
                                            <p class="font-semibold text-sm text-gray-800">{{ product.nama_toko }}</p>
                                            <p class="text-xs text-gray-500">{{ product.kategori }} - {{ product.nama }}
                                            </p>
                                        </div>
                                    </div>

                                    <div class="relative">
                                        <span v-if="product.isTopSeller"
                                            class="absolute top-2 left-2 bg-yellow-300 text-yellow-800 text-xs font-bold px-2 py-1 rounded">
                                            Penjualan Teratas
                                        </span>
                                        <div
                                            class="w-full rounded-2xl h-48 flex items-center justify-center images-cover p-4">
                                            <img src="/images/banner.png"
                                                class="w-full h-full rounded-lg text-gray-400 hover:scale-[1.03]"
                                                fill="none"></img>
                                        </div>
                                    </div>

                                    <div class="p-4">
                                        <div class="flex justify-center items-center mb-3">
                                            <div class="flex items-center space-x-2">
                                                <button class="w-6 h-6 rounded-full border text-gray-500">-</button>
                                                <span class="text-sm font-medium">1 pc</span>
                                                <button class="w-6 h-6 rounded-full border text-gray-500">+</button>
                                            </div>

                                        </div>
                                        <div class="flex justify-center items-center mb-3">

                                            <p class="text-gray-500 font-poppins">Rp. {{ product.harga }}</p>
                                        </div>

                                        <div class="space-y-2">
                                            <button class="w-full py-2 rounded-lg text-sm font-medium transition-colors
                       text-green-600 border border-green-600 hover:bg-green-600 hover:text-white">
                                                Masukkan ke Keranjang
                                            </button>
                                            <NuxtLink to="/product/detail" class="w-full flex text-center justify-center py-2 rounded-lg text-sm font-medium transition-colors
                bg-green-700 text-white hover:bg-green-800">Lihat Produk</NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>



        </main>
    </div>
    <section class="mt-16 bg-[#F6F1E9] py-20">
        <div class="container">
            <h2 class="text-4xl font-bebas-neue text-primary text-center tracking-wide">
                KATA MEREKA
            </h2>
            <p class="font-poppins text-gray-600 text-center mb-20">Dengar langsung bagaimana pelanggan menilai kualitas
                <br> produk dan layanan toko ini.
            </p>

            <div class="justify-end text-end mb-3">
                <div class="flex items-center text-end justify-end">
                    <p class="font-poppins text-gray-800 me-3">Urutkan</p>
                    <div class="relative max-w-xs">

                        <button @click="isOpen = !isOpen"
                            class="relative w-full cursor-pointer rounded-lg bg-gray-100 py-2.5 pl-4 pr-10 text-left shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:text-sm">
                            <span class="flex items-center">
                                <Icon name="heroicons:bars-3-bottom-left-20-solid" class="w-5 h-5 text-gray-500" />

                                <span class="ml-2 block truncate">
                                    <span class="font-medium text-gray-900">{{ selectedSortOption.name }}</span>
                                </span>
                            </span>
                            <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                <Icon name="heroicons:chevron-down-20-solid" class="h-5 h-5 text-gray-400"
                                    aria-hidden="true" />
                            </span>
                        </button>

                        <div v-if="isOpen"
                            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
                            <ul>
                                <li v-for="option in sortOptions" :key="option.id">
                                    <button @click="selectOption(option)" :class="[
                                        option.id === selectedSortOption.id ? 'font-medium bg-orange-50 text-orange-800' : 'font-normal text-gray-900',
                                        'w-full text-left relative cursor-pointer select-none py-2 px-4 hover:bg-orange-100 hover:text-orange-900'
                                    ]">
                                        {{ option.name }}
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-5 sm:grid-cols-1 gap-6">
                <div v-for="review in reviews" :key="review.id" class="bg-white rounded-lg shadow-md p-4 ">
                    <div class="flex justify-between items-start">
                        <div>
                            <span class="text-gray-500 text-xs font-poppins">Ahmad Raffi</span>
                        </div>
                        <div class="flex items-center gap-1 mt-1 flex-shrink-0">
                            <Icon name="heroicons:star-solid" class="w-5 h-5 text-yellow-400" />
                            <span class="text-md font-bebas-neue text-gray-700">4.5</span>
                        </div>
                    </div>
                    <p class="text-sm font-semibold">Bilh 7 Muaro</p>
                    <p class="text-xs text-green-700">Rp. 10.000</p>
                    <div class="h-20 justify-center items-center mt-3">
                        <p class="text-xs text-gray-500 font-poppins">"{{ review.comment }}"</p>

                    </div>
                    <a href="" class="text-sm text-green-800 flex hover:text-black">Belanja Sekarang
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-green-800 ms-2 hover:text-black" width="20"
                            height="20" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M17.073 12.5H5.5q-.213 0-.357-.143T5 12t.143-.357t.357-.143h11.573l-3.735-3.734q-.146-.147-.152-.345t.152-.363q.166-.166.357-.168t.357.162l4.383 4.383q.13.13.183.267t.053.298t-.053.298t-.183.268l-4.383 4.382q-.146.146-.347.153t-.367-.159q-.16-.165-.162-.354t.162-.354z" />
                        </svg>
                    </a>
                    <!-- <p class="text-xs text-gray-400 pt-2">Produk: {{ review.productName }}</p> -->
                </div>
            </div>
            <section class="mt-12 text-center">
                <button
                    class="bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition-colors text-lg">
                    Tambahkan Komentar
                </button>
            </section>

        </div>
    </section>


    <TheFooter />
</template>

<script setup>
import { ref } from 'vue';

useHead({
    title: 'Toko Ragnarok - NAVVR0'
})

// Data dummy untuk "Produk Terbaik"
const featuredProducts = ref([
    { id: 1, name: 'Gado-Gado Urap Pilihan', rating: 4.8, image: '/images/product/makanan.jpg' },
    { id: 2, name: 'Kangkung Pedas Spesial', rating: 4.9, image: '/images/product/makanan.jpg' },
    { id: 3, name: 'Gado-Gado Urap Nikmat', rating: 4.8, image: '/images/product/makanan.jpg' },
]);

// Data dummy untuk "Produk Lain"
const allProducts = ref([
    { id: 1, seller: 'Raffi Ahmad', name: 'Makanan', price: 'Rp 2.000.000', views: 1024, likes: 200, comments: 15 },
    { id: 2, seller: 'Raffi Ahmad', name: 'Makanan', price: 'Rp 2.000.000', views: 1024, likes: 200, comments: 15 },
    { id: 3, seller: 'Raffi Ahmad', name: 'Makanan', price: 'Rp 2.000.000', views: 1024, likes: 200, comments: 15 },
    { id: 4, seller: 'Raffi Ahmad', name: 'Makanan', price: 'Rp 2.000.000', views: 1024, likes: 200, comments: 15 },
    { id: 5, seller: 'Raffi Ahmad', name: 'Makanan', price: 'Rp 2.000.000', views: 1024, likes: 200, comments: 15 },
    { id: 6, seller: 'Raffi Ahmad', name: 'Makanan', price: 'Rp 2.000.000', views: 1024, likes: 200, comments: 15 },
]);

// Data dummy untuk "Ulasan"
const reviews = ref([
    { id: 1, name: 'Nita W.', rating: 5.0, productName: 'Gado-Gado Urap', comment: 'Bumbunya mantap, sayurnya segar. Pengiriman juga cepat. Pasti pesan lagi!' },
    { id: 2, name: 'Budi S.', rating: 4.5, productName: 'Kangkung Pedas', comment: 'Enak, tapi buat saya agak terlalu pedas. Overall oke.' },
    { id: 3, name: 'Citra L.', rating: 5.0, productName: 'Gado-Gado Urap', comment: 'Porsinya banyak, harganya pas. Langganan!' },
]);


const sortOptions = [
    { id: 1, name: 'Harga terendah' },
    { id: 2, name: 'Harga tertinggi' },
    { id: 3, name: 'Pembelian terbanyak' },
    { id: 4, name: 'Dilihat terbanyak' },
    { id: 5, name: 'Pembaruan terbaru' },
]

const isOpen = ref(false)

const selectedSortOption = ref(sortOptions[0])

function selectOption(option) {
    selectedSortOption.value = option
    isOpen.value = false
}
</script>
