<template>
 <div>
  
  <div class="p-4 flex items-center space-x-3">
   <img src="https://via.placeholder.com/40" alt="Seller" class="w-10 h-10 rounded-full bg-gray-300">
   <div>
    <p class="font-semibold text-sm text-gray-800 overflow-x-hidden">{{ product.nama_toko }}</p>
        <p class="text-xs text-gray-500 overflow-x-hidden">{{ product.category }} - {{ product.name }}</p>
   </div>
  </div>
  
  <div class="relative">
      <div class="w-full rounded-2xl h-48 flex items-center justify-center images-cover p-4">
        <img src="/images/banner.png" class="w-full h-full rounded-lg text-gray-400 hover:scale-[1.03]" fill="none" alt="Product Image">
   </div>
  </div>
  
  <div class="p-4">
   <div class="flex justify-center items-center mb-3">
    <div class="flex items-center space-x-2">
          <button 
            @click="decrement"
            :disabled="quantity === 1"
            class="w-6 h-6 rounded-full border text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            -
          </button>
     
               <span class="text-sm font-medium w-8 text-center">{{ quantity }} pc</span>
     
               <button 
            @click="increment" 
            class="w-6 h-6 rounded-full border text-gray-500"
          >
            +
          </button>
    </div>
    
   </div>
   <div class="flex justify-center items-center mb-3">
        <p class="text-gray-500 font-poppins">Rp. {{ product.price }}</p>
   </div>
   
   <div class="space-y-2">
    <button class="w-full py-2 rounded-lg text-sm font-medium transition-colors
           text-green-600 border border-green-600 hover:bg-green-600 hover:text-white">
     Masukkan ke Keranjang
    </button>
    <NuxtLink :to="`/product/detail`" class="w-full flex text-center justify-center py-2 rounded-lg text-sm font-medium transition-colors
        bg-green-700 text-white hover:bg-green-800">Lihat Produk</NuxtLink>
   </div>
  </div>
 </div>
</template>

<script setup>
import { ref } from 'vue';

// Komponen ini menerima 'product' sebagai properti dari induknya
defineProps({
  product: { // <-- 'D' sudah dihapus
    type: Object,
    required: true
  }
});

// --- INI LOGIKA BARUNYA ---

// 1. Buat state untuk quantity, mulai dari 1
const quantity = ref(1);

// 2. Buat fungsi untuk menambah (increment)
const increment = () => {
  quantity.value++;
};

// 3. Buat fungsi untuk mengurangi (decrement)
const decrement = () => {
  // Hanya kurangi jika quantity lebih besar dari 1
  if (quantity.value > 1) {
    quantity.value--;
  }
};
</script>