<template>
  <header :class="['bg-transparent sticky top-0 z-50', scrolled ? 'shadow bg-white' : '']">
    <div class="mx-auto container flex items-center">
      <div class="flex-1">
        <NuxtLink to="/" class="orange-primary text-3xl font-bebas-neue text-gray-800">NAVVRO</NuxtLink>
      </div>

<div class="flex-1 flex justify-center">
  <nav class="flex space-x-6">
    
    <NuxtLink 
      to="/" 
      class="font-poppins text-gray-600 hover:text-orange-500"
      exact-active-class="text-orange-500">
      BERANDA
    </NuxtLink>
    
    <NuxtLink 
      to="/product" 
      class="font-poppins text-gray-600 hover:text-orange-500"
      exact-active-class="text-orange-500">
      PRODUK
    </NuxtLink>
    
    <NuxtLink 
      to="/umkm" 
      class="font-poppins text-gray-600 hover:text-orange-500"
      exact-active-class="text-orange-500">
      UMKM
    </NuxtLink>
    
  </nav>
</div>

      <div class="flex-1 flex justify-end">
        <button type="button"
          class="text-white bg-primary rounded-lg px-12 box-border border border-transparent hover:bg-warning-strong focus:ring-4 focus:ring-warning-medium font-poppins leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Login</button>
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