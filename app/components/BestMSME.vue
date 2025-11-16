<template>
    <section class="w-full container max-w-6xl mx-auto px- xl:px-0 mt-20">
        <h1 class="font-bebas-neue text-center text-5xl">
            TEMUKAN PRODUK <span class="text-orange-500">UMKM</span> DISINI
        </h1>
        <p class="font-poppins text-lg text-center p-5">Koleksi berkualitas dari pelaku usaha kecil dan menengah di
            seluruh <br />
            Indonesia.
        </p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 xl:gap-9 mt-10">
            
            <div v-for="product in bestProduct" :key="product.nama" class="col-span-1 items-center">
                <div class="relative w-full aspect-square rounded-4xl">
                    <span
                        class="absolute top-2 left-2 rounded-full bg-[#3a6b5a] p-1 text-[1vw] lg:text-xs font-semibold text-white">
                        Diskon 50 %
                    </span>
                    <span
                        class="w-6 h-6 absolute top-15 right-4 bg-orange-500 rounded-full flex items-center justify-center p-1">
                        <Icon name="solar:cart-bold" class="text-white text-3xl" />
                    </span>
                    <span
                        class="w-6 h-6 absolute top-25 right-4 bg-white rounded-full flex items-center justify-center p-1">
                        <Icon name="mdi:eye-outline" class="text-3xl" />
                    </span>
                    
                    <img :src="product.gambar" :alt="product.nama"
                        class="w-[100%] h-[100%] object-cover aspect-square rounded-xl">
                </div>
                <div class="flex justify-between mt-2">
                    <p class="font-poppin text-xs text-gray-500 sm:text-sm">{{ product.kategori }}</p>
                    <div class="flex items-center gap-1">
                        <Icon name="heroicons:star-solid" class="w-4 h-4 text-yellow-400" />
                        <span class="text-sm font-bold font-bebas-neue text-center">{{ product.rating }}</span>
                    </div>
                </div>
                <p class="font-poppins font-semibold text-sm sm:text-lg">{{ product.nama }}</p>
                
                <p class="font-poppins text-[#3a6b5a] text-xs sm:text-sm">Rp {{ formatPrice(product.harga) }}</p>
            </div>
        </div>
        <div class="flex mt-15 justify-center">
            <button
                class="bg-[#3a6b5a] hover:bg-[#2f5a4a] text-white text-xs xl:text-sm font-poppins px-10 py-3 rounded-xl mx-auto lg:mx-0 shadow-lg transition-colors">
                <span>Lihat lebih banyak</span>
            </button>
        </div>
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
                            <span class=" font-poppins text-xs">Belanja sekarang</span></button>
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
                    <p class="font-poppins text-sm text-white">Lorem Ipsum Dolor Sit Amet <br /> Consectur Sit Amet</p>
                    <div class="mt-7 flex justify-center gap-1">
                        <button
                            class="bg-[#C2C2C2] flex justify-center gap-1 text-xs xl:text-sm font-poppins px-3 py-2 rounded-full mx-auto lg:mx-0 shadow-lg transition-colors">
                            <Icon class="w-3 h-3" name="mdi:clock-outline" />
                            <span class="font-poppins text-xs">23:59:58</span></button>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'
import storeData from '~/data/products.json'

const bestProduct = computed(() => {
    if (!storeData || !Array.isArray(storeData)) {
        return []
    }

    const allProducts = storeData.flatMap(store => store.product)

    const topSellers = allProducts.filter(product => product.isTopSeller === true)

    const formattedProducts = topSellers.map(product => ({
        nama: product.name,
        kategori: product.category,
        rating: product.rating.average,
        harga: product.price,
        gambar: product.images[0] || '/images/bestProduct.png' 
    }))

    return formattedProducts.slice(0, 4)
})

const formatPrice = (value) => {
    if (typeof value !== 'number') {
        return '0'
    }
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}
</script>