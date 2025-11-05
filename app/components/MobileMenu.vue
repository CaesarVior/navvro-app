<template>
  <div class="fixed inset-0 z-50 flex h-screen w-screen bg-black/50 backdrop-blur-sm" @click="$emit('close')">
    
    <div 
      class="ml-auto flex h-full w-full max-w-xs flex-col bg-white p-6 shadow-xl" 
      @click.stop
    >
      
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="orange-primary text-3xl font-bebas-neue" @click="$emit('close')">NAVVRO</NuxtLink>
        <button 
          @click="$emit('close')"
          class="rounded-md p-2 text-gray-500 hover:bg-gray-100"
          aria-label="Tutup menu"
        >
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <div class="mt-8 w-full">
        <input
          type="text"
          placeholder="Cari UMKM..."
          class="w-full rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
          @input="$emit('search', $event.target.value)"
        />
      </div>

      <nav class="mt-8 flex flex-col space-y-4">
        <NuxtLink 
          to="/" 
          class="text-lg font-medium text-gray-700 hover:text-orange-500" 
          @click="$emit('close')"
        >
          BERANDA
        </NuxtLink>
        <NuxtLink 
          to="" 
          class="text-lg font-medium text-gray-700 hover:text-orange-500" 
          @click="$emit('close')"
        >
          PRODUK
        </NuxtLink>
        <NuxtLink 
          to="" 
          class="text-lg font-medium text-gray-700 hover:text-orange-500" 
          @click="$emit('close')"
        >
          KATEGORI
        </NuxtLink>
      </nav>

    </div>
  </div>
</template>

<script setup>
// Memberi tahu Vue bahwa komponen ini akan mengirim sinyal 'close'
defineEmits(['close'])
</script>