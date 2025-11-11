<style scoped>
.primary-collor {
    background-color: #ffffff;
}
</style>
<template>
    <SecondHeader />
    <div classclass="bg-gray-50 min-h-screen p-4 md:p-12">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

                <div class="lg:col-span-2">
                    <h1 class="text-2xl font-bold text-gray-800 mb-6">KERANJANG ANDA ({{ cartItems.length }})</h1>

                    <div class="space-y-6">
                        <div v-for="item in cartItems" :key="item.id"
                            class="bg-white rounded-xl shadow-lg p-4 md:p-6 flex flex-col md:flex-row gap-6">

                            <div
                                class="w-full md:w-36 h-36 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-4-4l4 4m-6-6l-4 4"></path>
                                </svg>
                            </div>

                            <div class="flex-1 flex flex-col justify-between">
                                <div class="flex flex-col md:flex-row justify-between gap-4">
                                    <div class="flex-1">
                                        <h2 class="text-lg font-bold text-gray-900">{{ item.name }}</h2>
                                        <p class="text-sm text-gray-500">{{ item.subtitle }}</p>

                                        <div class="flex items-center border border-gray-300 rounded-full w-fit my-3">
                                            <button class="p-2 text-gray-500 hover:text-gray-800 transition-colors">
                                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fill-rule="evenodd"
                                                        d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </button>
                                            <span class="px-3 text-sm font-medium">{{ item.quantity }} pc</span>
                                            <button class="p-2 text-gray-500 hover:text-gray-800 transition-colors">
                                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fill-rule="evenodd"
                                                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div class="text-left md:text-right">
                                        <p class="text-lg font-bold text-gray-900">RP {{
                                            item.price.toLocaleString('id-ID') }}</p>
                                        <span v-if="item.discount" class="text-sm font-semibold text-red-600">
                                            Diskon {{ item.discount }}%
                                        </span>
                                    </div>
                                </div>

                                <div class="flex space-x-6 text-sm text-gray-700 my-3">
                                    <span class="flex items-center gap-2">
                                        <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        Garansi 30 Hari
                                    </span>
                                    <span class="flex items-center gap-2">
                                        <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z">
                                            </path>
                                        </svg>
                                        Gratis Ongkir
                                    </span>
                                </div>

                                <div class="flex items-center space-x-6 text-sm mt-4 border-t border-gray-100 pt-4">
                                    <button
                                        class="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                            </path>
                                        </svg>
                                        Hapus
                                    </button>
                                    <button
                                        class="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                                            </path>
                                        </svg>
                                        Simpan Untuk Nanti
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="mt-6">
                            <button
                                class="bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors">
                                Lanjut Belanja &rsaquo;
                            </button>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-1 space-y-8">

                    <div class="bg-white rounded-xl shadow-lg p-6 space-y-4">
                        <h2 class="text-lg font-bold text-gray-800">RINGKASAN PESANAN</h2>

                        <div class="flex space-x-2">
                            <input type="text" placeholder="Masukkan Kode Promo"
                                class="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400">
                            <button
                                class="text-orange-500 font-semibold px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors">Gunakan</button>
                        </div>

                        <select
                            class="w-full border border-gray-300 rounded-lg px-4 py-2 text-green-600 font-semibold focus:outline-none focus:ring-2 focus:ring-orange-400 appearance-none"
                            style="background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27><path stroke=%27%23059669%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/></svg>'); background-position: right 0.75rem center; background-repeat: no-repeat; background-size: 1.25em;">
                            <option>&#10004; Lihat Promo Lainnya</option>
                        </select>

                        <div class="space-y-2 text-sm">
                            <div class="flex justify-between text-gray-600">
                                <span>Jumlah (3)</span>
                                <span class="font-medium text-gray-800">IDR 300.000.000</span>
                            </div>
                            <div class="flex justify-between text-gray-600">
                                <span>Harga Pengiriman</span>
                                <span class="font-medium text-gray-800">IDR 0</span>
                            </div>
                            <div class="flex justify-between text-gray-600">
                                <span>Diskon</span>
                                <span class="font-medium text-gray-800">- IDR 1.500.000</span>
                            </div>
                            <div class="flex justify-between text-gray-600">
                                <span>Pajak</span>
                                <span class="font-medium text-gray-800">IDR 1.500.000</span>
                            </div>
                        </div>

                        <div class="flex justify-between font-bold text-lg pt-4 border-t border-gray-200">
                            <span>SUB TOTAL:</span>
                            <span>IDR 298.500.000</span>
                        </div>

                        <div classs="bg-gray-100 p-3 rounded-lg flex items-center gap-3 text-xs text-gray-700">
                            <span>🔒</span>
                            <span class="flex-1">Perlindungan ekstra untuk pesanan Anda <strong
                                    class="text-orange-500">IDR 1.500</strong></span>
                            <input type="checkbox" class="rounded text-orange-500 focus:ring-orange-400" checked>
                        </div>

                        <button
                            class="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors">
                            Bayar Sekarang
                        </button>

                        <p class="text-xs text-gray-500 text-center">
                            💡 Pengembalian dana dibillungi oleh <span class="font-semibold text-blue-600">navvro</span>
                        </p>
                    </div>

                    <div class="bg-white rounded-xl shadow-lg p-6 space-y-4">
                        <h2 class="text-lg font-bold text-gray-800">PILIH PEMBAYARAN ANDA:</h2>
                        <div class="grid grid-cols-2 gap-4">
                            <div v-for="n in 4" :key="n"
                                class="border border-gray-300 rounded-lg h-16 flex items-center justify-center cursor-pointer hover:border-orange-500 hover:ring-2 hover:ring-orange-200 transition-all">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dana_blue.svg/1280px-Logo_dana_blue.svg.png"
                                    alt="QRIS Logo" class="h-8 object-contain" v-if="n === 1">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_ShopeePay.svg/1200px-Logo_of_ShopeePay.svg.png"
                                    alt="QRIS Logo" class="h-8 object-contain" v-if="n === 2">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Gopay_logo.svg/1280px-Gopay_logo.svg.png"
                                    alt="QRIS Logo" class="h-10 object-contain" v-if="n === 3">
                                <img src="https://upload.wikimedia.org/wikipedia/id/thumb/e/e4/QRIS_logo.svg/1200px-QRIS_logo.svg.png"
                                    alt="QRIS Logo" class="h-10 object-contain" v-if="n === 4">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const cartItems = ref([
    {
        id: 1,
        name: 'IKAN BAKAR MR RAFFI',
        subtitle: 'Dalam Keranjang',
        quantity: 1,
        price: 100000000,
        discount: null
    },
    {
        id: 2,
        name: 'IKAN BAKAR MR RAFFI',
        subtitle: 'Dalam Keranjang',
        quantity: 1,
        price: 100000000,
        discount: 10
    },
    {
        id: 3,
        name: 'IKAN BAKAR MR RAFFI',
        subtitle: 'Dalam Keranjang',
        quantity: 1,
        price: 100000000,
        discount: 10
    }
])
</script>