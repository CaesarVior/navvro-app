<template>
  <Head>
    <Link rel="preconnect" href="https://fonts.googleapis.com" />
    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
    <Link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
  </Head>

  <header :class="[ 'primary-collor sticky top-0 z-50', scrolled ? 'shadow' : '']">
    <div class="container mx-auto py-5 flex items-center justify-between md:justify-normal">
      
      <div class="flex-1">
        <NuxtLink to="/" class="orange-primary text-3xl font-bebas-neue">NAVVRO</NuxtLink>
      </div>

      <div class="flex-1 justify-center hidden md:flex">
        <nav class="flex space-x-6">
          <NuxtLink to="/" class="text-gray-600 hover:text-orange-500">BERANDA</NuxtLink>
          <NuxtLink to="/product" class="text-gray-600 hover:text-orange-500">PRODUK</NuxtLink>
          <NuxtLink to="/umkm" class="text-gray-600 hover:text-orange-500">UMKM</NuxtLink>
          <NuxtLink to="/product/category" class="text-gray-600 hover:text-orange-500">KATEGORI</NuxtLink>
        </nav>
      </div>

      <div class="flex-1 justify-end items-center hidden md:flex">
        <div class="flex items-center w-45 md:w-50">
          <slot name="search"> 
            <input
              type="text"
              placeholder="Cari UMKM..."
              class="w-full px-4 py-2 border-none rounded-full bg-primary text-white placeholder-white placeholder-white::placeholder"
              @input="$emit('search', $event.target.value)"
            />
          </slot>
        </div>
      </div>

      <div class="md:hidden">
        <button 
          @click="$emit('toggle-mobile-menu')" 
          class="text-gray-600 p-2 rounded-md hover:bg-gray-100 focus:outline-none"
          aria-label="Buka menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

    </div>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const scrolled = ref(false);

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