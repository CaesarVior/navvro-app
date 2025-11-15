<style scoped>
.primary-collor {
    background-color: #ffffff;
}
</style>
<template>
    <SecondHeader></SecondHeader>
  <div class="bg-stone-50">

    <main class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      
      <h1 class="text-3xl font-bebas-neue text-gray-900 mb-8">
        Keranjang Anda (3)
      </h1>

      <div class="flex flex-col lg:flex-row lg:items-start gap-8">

        <div class="lg:w-2/3 w-full space-y-6">
          
          <div v-for="item in cartItems" :key="item.id" 
               class="border border-gray-300 rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row gap-6">
            
            <div class="w-full sm:w-32 h-32 rounded-md flex items-center justify-center flex-shrink-0">
              <img src="/icon/no-img.png" alt="">
            </div>

            <div class="flex-1 flex flex-col sm:flex-row justify-between gap-4">
              <div>
                <h2 class="text-2xl font-bebas-neue text-gray-900">{{ item.name }}</h2>
                <p class="text-xs font-poppins text-gray-500">{{ item.description }}</p>
                <div class="mt-2 space-y-1 text-sm text-gray-600">
                  <div class="flex items-center gap-2">
                    <Icon name="heroicons:shield-check" class="w-4 h-4 text-green-500" />
                    <span>Garansi {{ item.warranty }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <Icon name="heroicons:truck" class="w-4 h-4 text-blue-500" />
                    <span>Gratis Ongkir</span>
                  </div>
                </div>
              </div>

              <div class="text-left sm:text-right flex-shrink-0">
                <p class="text-lg font-bold text-gray-900">{{ item.price }}</p>
                <p v-if="item.discount" class="text-sm text-red-500 line-through">{{ item.discount }}</p>
                
                <div class="mt-3 flex items-center justify-start sm:justify-end gap-2">
                  <button class="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center">-</button>
                  <span class="w-8 text-center font-semibold">1</span>
                  <button class="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center">+</button>
                </div>
              </div>
            </div>
            
            <div class="w-full sm:w-auto border-t sm:border-t-0 sm:border-l border-gray-200 pt-4 sm:pt-0 sm:pl-6 flex sm:flex-col items-center justify-end sm:justify-start gap-4">
              <button class="flex items-center gap-1 text-sm text-gray-500 hover:text-red-500">
                <Icon name="heroicons:trash" class="w-4 h-4" />
                <span>Hapus</span>
              </button>
              <button class="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500">
                <Icon name="heroicons:bookmark" class="w-4 h-4" />
                <span>Simpan</span>
              </button>
            </div>
          </div>

          <a href="/produk" class="inline-flex items-center gap-2 bg-primary mb-8 text-white font-semibold px-5 py-2 rounded-full hover:bg-orange-600 transition-colors text-xs font-poppins">
            <Icon name="heroicons:arrow-left" class="w-5 h-5" />
            <span>Lanjut Belanja</span>
          </a>
        </div>


        <div class="lg:w-1/3 w-full lg:sticky lg:top-28">
          <div class="bg-white rounded-lg shadow p-6 space-y-6">
            
            <h2 class="text-xl font-bold text-gray-900 border-b pb-4">
              Ringkasan Pesanan
            </h2>

            <div>
              <label for="kupon" class="text-sm font-medium text-gray-700">Kode Kupon</label>
              <select id="kupon" class="mt-1 w-full border-gray-300 rounded-md shadow-sm text-sm">
                <option>Masukan kode kupon (opsional)</option>
              </select>
            </div>

            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-600">Jumlah (3)</span>
                <span class="font-medium text-gray-900">Rp 300.000.000</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Harga Pengiriman</span>
                <span class="font-medium text-gray-900">Rp 0</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Pajak</span>
                <span class="font-medium text-gray-900">Rp 1.500.000</span>
              </div>
              <div class="flex justify-between text-red-600">
                <span class="">Diskon (10%)</span>
                <span class="font-medium">- Rp 1.980.000</span>
              </div>
            </div>

            <div class="border-t pt-4 space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-lg font-bold text-gray-900">SUB TOTAL:</span>
                <span class="text-lg font-bold text-gray-900">Rp 298.520.000</span>
              </div>

              <div class="flex items-start gap-3">
                <input id="berlangganan" type="checkbox" class="mt-1 rounded border-gray-300 text-orange-500 focus:ring-orange-500">
                <label for="berlangganan" class="text-sm text-gray-600">
                  Berlangganan <span class="font-bold text-orange-500">potongan ekstra 20%</span> untuk pesanan di masa mendatang
                </label>
              </div>

              <button class="w-full bg-primary text-white font-bold py-2 rounded-full hover:bg-orange-600 transition-colors font-poppins">
                Bayar Sekarang
              </button>
            </div>

            <div>
              <h3 class="text-sm font-bold text-gray-900 mb-4">
                PILIH PEMBAYARAN ANDA:
              </h3>
              <div class="grid grid-cols-3 gap-4">
                <div class="h-12 bg-blue-800 p-1 rounded-md flex items-center justify-center text-gray-400">
                  <img src="/icon/bca.png" alt="">
                </div>
                <div class="h-12 bg-black p-3 rounded-md flex items-center justify-center text-gray-400">
                  <img src="/icon/qris.png" alt="">
                </div>
                <div class="h-12 bg-orange-400 p-2 rounded-md flex items-center justify-center text-gray-400">
                  <img src="/icon/seabank.png" alt="">
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>

    <footer class="bg-[#2a4a44] text-gray-300 py-16">
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div class="space-y-4">
            <div class="w-48 h-24 bg-gray-600 rounded-md flex items-center justify-center text-gray-400">
              <Icon name="heroicons:photo" class="w-12 h-12" />
            </div>
            <div class="flex space-x-4">
              <a href="#" class="hover:text-white"><Icon name="mdi:facebook" class="w-6 h-6" /></a>
              <a href="#" class="hover:text-white"><Icon name="mdi:instagram" class="w-6 h-6" /></a>
              <a href="#" class="hover:text-white"><Icon name="mdi:tiktok" class="w-6 h-6" /></a>
              <a href="#" class="hover:text-white"><Icon name="mdi:linkedin" class="w-6 h-6" /></a>
            </div>
          </div>

          <div class="space-y-4">
            <h4 class="text-xl font-bebas-neue font-bold text-white tracking-wider">NAVVR0</h4>
            <nav class="space-y-2">
              <div><a href="#" class="hover:text-white">Beranda</a></div>
              <div><a href="#" class="hover:text-white">Produk</a></div>
              <div><a href="#" class="hover:text-white">Kategori</a></div>
            </nav>
          </div>

          <div class="space-y-4">
            <h4 class="text-xl font-bebas-neue font-bold text-white tracking-wider">UMUM</h4>
            <nav class="space-y-2">
              <div><a href="#" class="hover:text-white">Lorem Ipsum</a></div>
              <div><a href="#" class="hover:text-white">Lorem Ipsum</a></div>
              <div><a href="#" class="hover:text-white">Lorem Ipsum</a></div>
            </nav>
          </div>

          <div class="space-y-4">
            <h4 class="text-xl font-bebas-neue font-bold text-white tracking-wider">LOREM</h4>
            <nav class="space-y-2">
              <div><a href="#" class="hover:text-white">Lorem Ipsum</a></div>
              <div><a href="#" class="hover:text-white">Lorem Ipsum</a></div>
              <div><a href="#" class="hover:text-white">Lorem Ipsum</a></div>
            </nav>
          </div>

        </div>

        <div class="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-500">
          ©2025 by <span class="text-orange-400 font-semibold">Navvro Team</span>. All Right Reserved
        </div>
      </div>
    </footer>


    <a 
      class="fixed bottom-8 right-8 z-50 
            bg-gray-800 rounded-full w-20 h-20 
            flex items-center justify-center 
            shadow-xl transition-all duration-300 
            hover:scale-105 hover:shadow-2xl focus:outline-none"
      aria-label="Pusat Bantuan"
    >
      <img src="/ai.png" alt="Pusat Bantuan" class="w-full h-full object-contain">
    </a>

  </div>
</template>

<script setup>
import { ref } from 'vue';

useHead({
  title: 'Keranjang Anda - NAVVR0'
})

// Data dummy untuk keranjang
const cartItems = ref([
  { id: 1, name: 'IKAN BAKAR MR RAFFI', description: 'Dalam Keranjang', price: 'Rp 100.000.000', discount: null, warranty: '30 Hari' },
  { id: 2, name: 'IKAN BAKAR MR RAFFI', description: 'Dalam Keranjang', price: 'Rp 100.000.000', discount: 'Diskon 10%', warranty: '30 Hari' },
  { id: 3, name: 'IKAN BAKAR MR RAFFI', description: 'Dalam Keranjang', price: 'Rp 100.000.000', discount: 'Diskon 10%', warranty: '30 Hari' },
]);
</script>