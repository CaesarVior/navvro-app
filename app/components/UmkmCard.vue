<template>
  <div>
    
    <div class="p-4 flex items-center space-x-3">
      <img 
        :src="product.product[0]?.seller?.logo || '/icon/no-img.png'" 
        alt="Seller" 
        class="w-10 h-10 rounded-full bg-gray-300 object-cover"
      >
      <div>
        <p class="font-semibold text-sm text-gray-800">{{ product.name }}</p>
        <p class="text-xs text-gray-500 capitalize">{{ product.category }}</p>
      </div>
    </div>
    
    <div class="relative">
      <div class="w-full rounded-2xl h-48 flex items-center justify-center images-cover p-4">
        <img 
          :src="product.fotoToko" 
          :alt="product.name" 
          class="w-full h-full rounded-lg text-gray-400 hover:scale-[1.03] object-cover" 
          fill="none"
        >
      </div>
    </div>
     
    
    <div class="p-4">
      <div class="space-y-2">
        <NuxtLink 
          :to="'/umkm/' + product.id" 
          class="w-full flex text-center justify-center py-2 rounded-lg text-sm font-medium transition-colors
                 bg-green-700 text-white hover:bg-green-800"
        >
          Lihat Toko
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>