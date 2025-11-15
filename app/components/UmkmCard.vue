<template>
  <div>
    
    <div class="p-4 flex items-center space-x-3">
      <img src="https://via.placeholder.com/40" alt="Seller" class="w-10 h-10 rounded-full bg-gray-300">
      <div>
        <p class="font-semibold text-sm text-gray-800">Ragna Tent</p>
        <p class="text-xs text-gray-500">Pakaian</p>
      </div>
    </div>
    
    <div class="relative">
      <div class="w-full rounded-2xl h-48 flex items-center justify-center images-cover p-4">
        <img src="/images/RagnaTent_Banner.png" class="w-full h-full rounded-lg text-gray-400 hover:scale-[1.03]" fill="none"></img>
      </div>
    </div>
    
    <div class="p-4">
      
      <div class="space-y-2">
        <NuxtLink to="/umkm/detail" class="w-full flex text-center justify-center py-2 rounded-lg text-sm font-medium transition-colors
                bg-green-700 text-white hover:bg-green-800">Lihat Toko</NuxtLink>
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