<template>
    <section class="w-full container max-w-6xl mx-auto px- xl:px-0 mt-20">
        <h1 class="font-bebas-neue text-center text-5xl">
            TEMUKAN PRODUK <span class="text-orange-500">UMKM</span> DISINI
        </h1>
        <p class="font-poppins text-lg text-center p-5">Koleksi berkualitas dari pelaku usaha kecil dan menengah di
            seluruh <br />
            Indonesia.
        </p>
        <div class="flex space-x-6 overflow-x-auto pb-6 pt-12 items-center justify-center gap-8">
            <div v-for="product in featuredProducts.slice(0, 3)" :key="product.id"
                class="bg-white rounded-lg shadow-md w-80 flex-shrink-0 transition-all duration-300 hover:shadow-xl">

                <div class="relative h-65 w-full overflow-hidden rounded-t-lg">
                    <img :src="product.images[0] || '/icon/no-img.png'" :alt="product.name"
                        class="h-full w-full object-cover">

                    <div
                        class="absolute bottom-0 rounded-lg left-0 right-0 bg-[#3a6b5a] bg-opacity-90 text-white text-center py-2 text-sm font-semibold">
                        Diskon 50 %
                    </div>

                    <div class="absolute top-3 right-3 space-y-2">
                        <button class="bg-primary rounded-full p-2 shadow-md hover:bg-orange-600 transition-colors"
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
                            aria-label="Lihat Produk">
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
                            <span class="text-gray-500 text-sm font-poppins">{{ product.category }}</span>
                            <h3 class="font-semibold text-gray-800 text-lg leading-tight mt-0.5">{{
                                product.name }}</h3>
                            <span class="text-green-600 text-sm font-poppins">{{ formatCurrency(product.price)
                            }}</span>
                        </div>
                        <div class="flex items-center gap-1 mt-1 flex-shrink-0">
                            <Icon name="heroicons:star-solid" class="w-5 h-5 text-yellow-400" />
                            <span class="text-md font-semibold text-gray-700">{{ product.rating.average
                            }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex mt-15 justify-center">
            <a href="/product"
                class="bg-[#3a6b5a] hover:bg-[#2f5a4a] text-white text-xs xl:text-sm font-poppins px-10 py-3 rounded-xl mx-auto lg:mx-0 shadow-lg transition-colors">
                <span>Lihat lebih banyak</span>
            </a>
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
                    <p class="font-poppins text-sm text-white">Lorem Ipsum Dolor Sit Amet <br /> Consectur Sit Amet</p>
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
    </section>
</template>
<script setup>

</script>