<template>
    <TheHeader />
    <div class="px-4">
        <div class="container">

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
                <Carousel class="col-span-1" />

                <div class="col-span-1 lg:col-span-2">
                    <div class="gap-4">
                        <span class="text-sm flex gap-2 text-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5">
                                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2" />
                                    <path
                                        d="M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6" />
                                </g>
                            </svg>
                            Rafi Ahmad
                        </span>
                        <h1 class="text-primary text-2xl sm:text-3xl font-bebas-neue mt-2">IKAN BAKAR MR RAFFI</h1>
                        <p class="mt-1 text-gray-700">Rp. 2.800.890</p>

                        <div>
                            <p class="mb-2 mt-5 pt-3">Pilih Varian</p>
                            <div class="flex flex-wrap gap-6">
                                <button v-for="varian in ['Pedas', 'Manis', 'Asin']" :key="varian"
                                    @click="varianTerpilih = varian" :class="[
                                        'rounded-full border px-5 py-3 text-sm font-medium hover:text-white hover:bg-orange-400',
                                        varianTerpilih === varian
                                            ? 'border-orange-400 bg-orange-400 text-white'
                                            : 'border-orange-400 border-2 text-gray-700',
                                    ]">
                                    {{ varian }}
                                </button>
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center gap-4 sm:gap-12 mt-5 pt-3">
                                <p>Jumlah</p>
                                <div class="flex items-center gap-4">
                                    <button @click="decrease"
                                        class="w-5 h-6 p-2 flex items-center justify-center border border-black rounded-full font-bold hover:bg-gray-100">
                                        −
                                    </button>

                                    <span>{{ quantity }} pc</span>

                                    <button @click="increase"
                                        class="w-5 h-6 p-2 flex items-center justify-center border border-black rounded-full font-bold hover:bg-gray-100">
                                        +
                                    </button>
                                </div>
                                <span class="text-sm text-gray-500">Tersedia: 20</span>
                            </div>
                        </div>

                        <div class="flex items-center gap-3 pt-4">
                            <button
                                class="flex-grow rounded-full bg-green-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-green-700">
                                Masukkan ke Keranjang
                            </button>
                            <button
                                class="rounded-full border border-gray-300 p-3 text-gray-500 transition hover:border-red-500 hover:text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="my-8" />

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
                <div class="col-span-1">
                    <h2 class="mb-4 text-xl font-semibold">Rating & Review</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-3 justify-center items-center">
                        <div class="flex items-end justify-center sm:justify-start">
                            <span class="text-5xl sm:text-7xl font-bebas-neue text-primary">4,5</span>
                            <span class="text-xl sm:text-2xl font-bebas-neue text-primary">/5</span>
                        </div>

                        <div class="mt-4 flex flex-col gap-2 col-span-1 sm:col-span-2">
                            <div v-for="rating in [5, 4, 3, 2, 1]" :key="rating" class="flex items-center gap-2">
                                <span class="flex items-center text-sm">
                                    <span class="text-yellow-500 me-2">
                                        <svg class="ml-0.5 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.182c.969 0 1.371 1.24.588 1.81l-3.38 2.454a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.539 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.34 9.401c-.783-.57-.381-1.81.588-1.81h4.182a1 1 0 00.95-.69L9.049 2.927z" />
                                        </svg>
                                    </span>
                                    <span>
                                        {{ rating }}
                                    </span>
                                </span>
                                <div class="h-1.5 flex-grow rounded-full bg-gray-200">
                                    <div class="h-full rounded-full bg-green-800"
                                        :style="{ width: `${ratingWidths[rating]}%` }"></div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div class="col-span-1 lg:col-span-2">
                    <div class="block p-6 border border-gray-300 rounded-lg">
                        <h2 class="mb-4 text-xl font-semibold">Deskripsi Produk</h2>
                        <p class="text-sm text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin velarcu ut urna congue
                            bibendum. Nullam in interdum dui, sit amet pulvinar est. Mauris quis purus at dui pulvinar
                            ut. Nunc varius, odio sed sollicitudin egestas, erat nisi suscipit dolor, vitae aliquam
                            ligula turpis quis mauris. Phasellus suscipit sagittis dolor, vitae semper ex.
                        </p>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 mt-5">
                <div class="block p-6 border border-gray-300 rounded-lg col-span-1">
                    <span class="font-semibold">Nivor Caevan</span>
                    <div class="flex items-center justify-between">
                        <div class="flex text-yellow-500">
                            <svg v-for="i in 5" :key="i" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.182c.969 0 1.371 1.24.588 1.81l-3.38 2.454a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.539 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.34 9.401c-.783-.57-.381-1.81.588-1.81h4.182a1 1 0 00.95-.69L9.049 2.927z" />
                            </svg>
                        </div>
                        <div>
                            <span class="text-sm text-gray-600">27 Oktober 2025</span>
                        </div>
                    </div>
                    <p class="text-sm text-gray-600 mt-2">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                        placerat, sapien venenatis justo sit nunc. Idque Caesaris facere
                        destitisti? Non est igitur voluptas bonum."
                    </p>

                    <div class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-500 mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>


                <div class="col-span-1 lg:col-span-2">
                    <div class="block p-6 border border-gray-300 rounded-lg">
                        <h2 class="mb-4 text-xl font-semibold">Pengiriman</h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div class="flex items-center gap-3 mt-4">
                                <div class="flex h-10 w-10 items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="M12 22q-.6 0-1.15-.225t-.975-.65q-.725-.725-1.25-.95T7.05 19.95q-1.25 0-2.125-.875T4.05 16.95q0-1.05-.225-1.575t-.95-1.25q-.425-.425-.65-.975T2 12t.225-1.15t.65-.975q.725-.725.95-1.25T4.05 7.05q0-1.25.875-2.125T7.05 4.05q1.05 0 1.575-.225t1.25-.95q.425-.425.975-.65T12 2t1.15.225t.975.65q.725.725 1.25.95t1.575.225q1.25 0 2.125.875t.875 2.125q0 1.05.225 1.575t.95 1.25q.425.425.65.975T22 12t-.225 1.15t-.65.975q-.725.725-.95 1.25t-.225 1.575q0 1.25-.875 2.125t-2.125.875q-1.05 0-1.575.225t-1.25.95q-.425.425-.975.65T12 22m2.5-6q.625 0 1.063-.437T16 14.5t-.437-1.062T14.5 13t-1.062.438T13 14.5t.438 1.063T14.5 16m-5.05-.05l6.5-6.5l-1.4-1.4l-6.5 6.5zM9.5 11q.625 0 1.063-.437T11 9.5t-.437-1.062T9.5 8t-1.062.438T8 9.5t.438 1.063T9.5 11" />
                                    </svg>
                                </div>
                                <div>
                                    <span class="block text-sm text-gray-600">Diskon</span>
                                    <span class="block text-xs">50%</span>
                                </div>
                            </div>
                            <div class="flex items-center gap-3 mt-4">
                                <div class="flex h-10 w-10 items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="M5.5 14a2.5 2.5 0 0 1 2.45 2H15V6H4a2 2 0 0 0-2 2v8h1.05a2.5 2.5 0 0 1 2.45-2m0 5a2.5 2.5 0 0 1-2.45-2H1V8a3 3 0 0 1 3-3h11a1 1 0 0 1 1 1v2h3l3 4v5h-2.05a2.5 2.5 0 0 1-4.9 0h-7.1a2.5 2.5 0 0 1-2.45 2m0-4A1.5 1.5 0 0 0 4 16.5A1.5 1.5 0 0 0 5.5 18A1.5 1.5 0 0 0 7 16.5A1.5 1.5 0 0 0 5.5 15m12-1a2.5 2.5 0 0 1 2.45 2H21v-3.68l-.24-.32H16v2.5c.42-.31.94-.5 1.5-.5m0 1a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5M16 9v2h4l-1.5-2z" />
                                    </svg>
                                </div>
                                <div>
                                    <span class="block text-sm text-gray-600">Waktu Pengiriman</span>
                                    <span class="block text-xs">3 - 4 Hari</span>
                                </div>
                            </div>
                            <div class="flex items-center gap-3 py-5">
                                <div class="flex h-10 w-10 items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="M22 14v-2c0-.839 0-1.585-.013-2.25H2.013C2 10.415 2 11.161 2 12v2c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013z" />
                                    </svg>
                                </div>
                                <div>
                                    <span class="block text-sm text-gray-600">Estimasi Sampai</span>
                                    <span class="block text-xs">27 - 30 Oktober 2025</span>
                                </div>
                            </div>
                            <div class="flex items-center gap-3 py-5">
                                <div class="flex h-10 w-10 items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35"
                                        viewBox="0 0 256 256">
                                        <path fill="currentColor"
                                            d="m222.72 67.91l-88-48.18a13.9 13.9 0 0 0-13.44 0l-88 48.18A14 14 0 0 0 26 80.18v95.64a14 14 0 0 0 7.28 12.27l88 48.18a13.92 13.92 0 0 0 13.44 0l88-48.18a14 14 0 0 0 7.28-12.27V80.18a14 14 0 0 0-7.28-12.27M127 30.25a2 2 0 0 1 1.92 0L212.51 76l-33.94 18.57l-84.52-46.26ZM122 223l-83-45.43a2 2 0 0 1-1-1.75V86.66l84 46ZM43.49 76l38.07-20.85l84.51 46.26L128 122.24ZM218 175.82a2 2 0 0 1-1 1.75L134 223v-90.36l36-19.71V152a6 6 0 0 0 12 0v-45.63l36-19.71Z" />
                                    </svg>
                                </div>
                                <div>
                                    <span class="block text-sm text-gray-600">Tipe Paket</span>
                                    <span class="block text-xs">Reguler</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <hr class="my-8" />

            </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const varianTerpilih = ref('Manis')

const ratingWidths = {
    5: 80, // 80%
    4: 15, // 15%
    3: 5,  // 5%
    2: 0,  // 0%
    1: 0,  // 0%
}

const quantity = ref(1)

const increase = () => {
    quantity.value++
}

const decrease = () => {
    if (quantity.value > 1) quantity.value--
}

</script>