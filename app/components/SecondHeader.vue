<template>
  <header :class="['primary-collor sticky top-0 z-50', scrolled ? 'shadow' : '']">
    <div class="max-w-7xl mx-auto px-6 py-5 flex items-center">
      <div class="flex-1">
        <NuxtLink to="/" class="orange-primary text-3xl font-bebas-neue text-gray-800">NAVVRO</NuxtLink>
      </div>

      <div class="flex-1 flex justify-center">
        <nav class="flex space-x-6">
          <NuxtLink to="/" class="font-poppins hover:text-orange-500">BERANDA</NuxtLink>
          <NuxtLink to="/" class="font-poppins hover:text-orange-500">PRODUK</NuxtLink>
          <NuxtLink to="/" class="font-poppins hover:text-orange-500">UMKM</NuxtLink>
          <NuxtLink to="" class="font-poppins hover:text-orange-500">KATEGORI</NuxtLink>
        </nav>
      </div>

      <div class="flex-1 flex justify-end">
        <button
          class="flex items-center space-x-2 bg-emerald-800 text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200">
          <icon class="w-5 h-5" icon="material-symbols-light:account-balance-wallet" />
          <span class="text-sm font-medium">Saldo Anda:</span>
        </button>
      </div>
    </div>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">

  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { Icon } from '@iconify/vue'

const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

defineEmits(['search', 'toggle-mobile-menu'])
</script>
