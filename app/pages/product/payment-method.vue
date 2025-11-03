<template>
    <TheHeader />
    <div class="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Kolom Kiri -->
        <div class="space-y-8">
            <!-- Metode Pembayaran -->
            <div>
                <h2 class="text-lg font-semibold mb-4 text-gray-800">METODE PEMBAYARAN</h2>
                <div class="grid grid-cols-2 gap-3">
                    <div class="relative flex flex-col items-center p-6 pt-4 pb-10 rounded-lg"
                        style="background-color: #003399;">
                        <img src="/icon/bca.png" alt="" class="w-30">
                        <span class="absolute bottom-2 right-3 text-xs font-poppins text-white cursor-pointer">Hapus</span>
                    </div>

                    <div class="relative flex flex-col items-center p-6 pt-5 pb-10 rounded-lg"
                        style="background-color: #00539D;">
                        <img src="/icon/bri.png" alt="" class="w-20">
                        <span class="absolute bottom-2 right-3 text-xs font-poppins text-white cursor-pointer">Hapus</span>
                    </div>
                    <div class="relative flex flex-col items-center p-6 pt-5 pb-10 rounded-lg"
                        style="background-color: #FDAE26;">
                        <img src="/icon/jago.png" alt="" class="w-23">
                        <span class="absolute bottom-2 right-3 text-xs font-poppins text-white cursor-pointer">Hapus</span>
                    </div>
                    <div class="relative flex flex-col items-center p-6 pt-5 pb-10 rounded-lg"
                        style="background-color: #000000;">
                        <img src="/icon/qris.png" alt="" class="w-20">
                        <span class="absolute bottom-2 right-3 text-xs font-poppins text-white cursor-pointer">Hapus</span>
                    </div>
                    <div class="relative flex flex-col items-center p-6 pt-5 pb-10 rounded-lg"
                        style="background-color: #EA6F1A;">
                        <img src="/icon/seabank.png" alt="" class="w-25">
                        <span class="absolute bottom-2 right-3 text-xs font-poppins text-white cursor-pointer">Hapus</span>
                    </div>
                </div>
            </div>

            <!-- Opsi Pengiriman -->
            <div>
                <h2 class="text-lg font-semibold mb-4 text-gray-800">Opsi Pengiriman</h2>
                <div class="grid grid-cols-3 gap-2">
                    <img src="/icon/no-img.png" alt="jne" class="p-2 border rounded-md">
                    <img src="/icon/no-img.png" alt="jnt" class="p-2 border rounded-md">
                    <img src="/icon/no-img.png" alt="sicepat" class="p-2 border rounded-md">
                    <img src="/icon/no-img.png" alt="anteraja" class="p-2 border rounded-md">
                    <img src="/icon/no-img.png" alt="ninja" class="p-2 border rounded-md">
                    <img src="/icon/no-img.png" alt="idexpress" class="p-2 border rounded-md">
                </div>
            </div>
        </div>

        <!-- Kolom Kanan -->
        <div class="md:col-span-2 space-y-6">
            <h2 class="text-lg font-semibold text-gray-800">KERANJANG ANDA</h2>

            <!-- Item -->
            <div class="space-y-4">
                <div class="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border">
                    <div class="flex items-center space-x-4">
                        <img src="/icon/no-img.png" alt="produk" class="w-20 h-20 object-cover rounded-md border">
                        <div>
                            <h3 class="font-semibold">Ikan Bakar Mr Raffi</h3>
                            <p class="text-sm text-gray-500">Jumlah: 6</p>
                            <p class="text-sm text-gray-500">Opsi Pengiriman: JNE</p>
                            <p class="text-sm text-gray-500">Catatan: Lorem ipsum</p>
                        </div>
                    </div>
                    <p class="font-semibold text-gray-800">Rp. 2.000.000</p>
                </div>

                <div class="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border">
                    <div class="flex items-center space-x-4">
                        <img src="/icon/no-img.png" alt="produk" class="w-20 h-20 object-cover rounded-md border">
                        <div>
                            <h3 class="font-semibold">Ikan Bakar Mr Raffi</h3>
                            <p class="text-sm text-gray-500">Jumlah: 6</p>
                            <p class="text-sm text-gray-500">Opsi Pengiriman: JNE</p>
                            <p class="text-sm text-gray-500">Catatan: Lorem ipsum</p>
                        </div>
                    </div>
                    <p class="font-semibold text-gray-800">Rp. 2.000.000</p>
                </div>
            </div>

            <!-- Total -->
            <div class="pt-6 border-t">
                <h3 class="font-semibold mb-2">Total Pembelian</h3>
                <div class="flex items-center border rounded-full overflow-hidden">
                    <input type="text" placeholder="Masukkan Kode Promo Anda" class="flex-1 px-4 py-2 outline-none">
                    <button class="px-4 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>