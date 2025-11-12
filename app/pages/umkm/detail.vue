<template>
    <div class="bg-white text-gray-900">

        <SecondHeader />
        <market-place-banner />

        <div class="bg-gray-50 py-12">
            <div class="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">

                <div class="lg:col-1 space-y-8">

                    <div class="lg:pe-30 rounded-lg">
                        <img src="/icon/no-img.png" alt="Produk Utama"
                            class="w-full h-[400px] object-cover bg-gray-200 rounded-lg">
                        <h1 class="text-2xl text-center font-bold mt-6 mb-2">Ikan Bakar Mr Raffi</h1>
                        <p class="text-gray-700 text-center">Rp. 2.000.000</p>
                    </div>

                    <div class="">
                        <h3 class="text-lg font-bold mb-4">BERI KOMENTAR</h3>
                        <div class="flex items-center gap-3 mb-3">
                            <img src="/icon/no-img.png" alt="Avatar" class="w-10 h-10 rounded-full bg-gray-200">
                            <span class="font-semibold">Indy</span>
                        </div>
                        <div class="flex text-yellow-400 mb-4">
                            <svg v-for="i in 5" :key="i" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.83 5.632a1 1 0 00.95.69h5.923c.969 0 1.371 1.24.588 1.81l-4.79 3.476a1 1 0 00-.364 1.118l1.83 5.632c.3.921-.755 1.688-1.54 1.118l-4.79-3.476a1 1 0 00-1.176 0l-4.79 3.476c-.784.57-1.838-.197-1.54-1.118l1.83-5.632a1 1 0 00-.364-1.118L.588 11.058c-.783-.57-.38-1.81.588-1.81h5.923a1 1 0 00.95-.69L9.049 2.927z" />
                            </svg>
                        </div>
                        <textarea class="w-full h-32 border border-gray-300 rounded-lg p-3 bg-gray-100"
                            placeholder="Tulis komentar Anda..."></textarea>
                        <div class="flex justify-end mt-3">
                            <button
                                class="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600">Kirim</button>
                        </div>
                    </div>
                </div>

                <aside class="space-y-8">

                    <div class="">
                        <h3 class="text-lg font-bold mb-4">YANG MUNGKIN ANDA SUKA</h3>
                        <div class="grid grid-cols-3 gap-4">
                            <div v-for="i in 6" :key="`suka-${i}`" class="rounded-lg p-2">
                                <div class="relative">
                                    <img src="/icon/no-img.png" alt="Produk Suka"
                                        class="w-full h-35 object-cover rounded-md">
                                    <span class="absolute top-1 right-1 bg-white rounded-full p-1 shadow">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                            viewBox="0 0 24 24"><!-- Icon from Material Symbols Light by Google - https://github.com/google/material-design-icons/blob/master/LICENSE -->
                                            <path fill="currentColor"
                                                d="m12 19.654l-.758-.685q-2.448-2.236-4.05-3.828q-1.601-1.593-2.528-2.81t-1.296-2.2T3 8.15q0-1.908 1.296-3.204T7.5 3.65q1.32 0 2.475.675T12 6.289Q12.87 5 14.025 4.325T16.5 3.65q1.908 0 3.204 1.296T21 8.15q0 .996-.368 1.98q-.369.986-1.296 2.202t-2.519 2.809q-1.592 1.592-4.06 3.828zm0-1.354q2.4-2.17 3.95-3.716t2.45-2.685t1.25-2.015Q20 9.006 20 8.15q0-1.5-1-2.5t-2.5-1q-1.194 0-2.204.682T12.49 7.385h-.978q-.817-1.39-1.817-2.063q-1-.672-2.194-.672q-1.48 0-2.49 1T4 8.15q0 .856.35 1.734t1.25 2.015t2.45 2.675T12 18.3m0-6.825" />
                                        </svg> </span>
                                </div>
                                <h4 class="text-xs font-semibold mt-2 truncate">Ikan Bakar Mr</h4>
                                <p class="text-gray-700 text-xs">Rp. 2.000.000</p>
                                <button
                                    class="mt-1 bg-green-600 text-white text-xs px-3 py-1 rounded-full w-full hover:bg-green-700">Lihat
                                    Detail</button>
                            </div>
                        </div>
                    </div>

                    <div class="">
                        <h3 class="text-lg font-bold mb-4">LOKASI</h3>
                        <div class="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                            
                        </div>
                    </div>
                </aside>
            </div>
        </div>

        <section class="container mx-auto px-4 py-16">
            <div class="flex justify-between items-center mb-8">
                <h2 class="text-2xl font-bold">TEMUKAN PRODUK LAINNYA</h2>
                <a href="#" class="text-orange-500 font-semibold hover:underline">lihat berurutan &gt;</a>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div v-for="i in 4" :key="`produk-${i}`"
                    class="rounded-lg shadow-md overflow-hidden text-center bg-white">
                    <div class="relative">
                        <img src="/icon/no-img.png" alt="Produk Lainnya"
                            class="w-full h-64 object-contain p-4 bg-white">
                        <button
                            class="absolute top-4 right-4 bg-orange-500 w-10 h-10 rounded-full text-white flex items-center justify-center shadow-lg hover:bg-orange-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zM7 18a2 2 0 100 4 2 2 0 000-4z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold">Sabun Cuci Muka</h3>
                        <p class="text-gray-500 text-sm">Rp 100.000</p>
                    </div>
                </div>
            </div>
        </section>

        <the-footer/>
    </div>
</template>

<script setup>
import SecondHeader from '~/components/SecondHeader.vue';

</script>