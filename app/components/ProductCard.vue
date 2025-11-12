<template>
  <div>
    
    <div class="p-4 flex items-center space-x-3">
      <img src="https://via.placeholder.com/40" alt="Seller" class="w-10 h-10 rounded-full bg-gray-300">
      <div>
        <p class="font-semibold text-sm text-gray-800">{{ product.nama_toko }}</p>
        <p class="text-xs text-gray-500">{{ product.kategori }} - {{ product.nama }}</p>
      </div>
    </div>
    
    <div class="relative">
      <span v-if="product.isTopSeller" class="absolute top-2 left-2 bg-yellow-300 text-yellow-800 text-xs font-bold px-2 py-1 rounded">
        Penjualan Teratas
      </span>
      <div class="w-full rounded-2xl h-48 flex items-center justify-center images-cover p-4">
        <img src="/images/banner.png" class="w-full h-full rounded-lg text-gray-400 hover:scale-[1.03]" fill="none"></img>
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
       
        <p class="font-semibold text-gray-800">Rp. {{ product.harga }}</p>
      </div>
      
      <div class="space-y-2">
        <button class="w-full py-2 rounded-lg text-sm font-medium transition-colors
                       text-green-600 border border-green-600 hover:bg-green-600 hover:text-white">
          Masukkan ke Keranjang
        </button>
        <button class="w-full py-2 rounded-lg text-sm font-medium transition-colors
                       text-green-900 border border-green-900 hover:bg-green-900 hover:text-white">
          Lihat Produk
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Komponen ini menerima 'product' sebagai properti dari induknya
defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>