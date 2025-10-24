<template>
  <header :class="[ 'primary-collor sticky top-0 z-50', scrolled ? 'shadow' : '']">
    <div class="max-w-7xl mx-auto px-6 py-5 flex items-center">
      <div class="flex-1">
        <NuxtLink to="/" class="orange-primary text-2xl font-bold text-gray-800">NAVVRO</NuxtLink>
      </div>

      <div class="flex-1 flex justify-center">
        <nav class="flex space-x-6">
          <NuxtLink to="/" class="text-gray-600 hover:text-orange-500">BERANDA</NuxtLink>
          <NuxtLink to="/" class="text-gray-600 hover:text-orange-500">PRODUK</NuxtLink>
          <NuxtLink to="/" class="text-gray-600 hover:text-orange-500">KATEGORI</NuxtLink>
        </nav>
      </div>

      <div class="flex-1 flex justify-end items-center">
        <div class="flex items-center w-45 md:w-50">
          <slot name="search"> 
            <input
              type="text"
              placeholder="Cari UMKM..."
              class="w-full px-4 py-2 border rounded-full focus:ring-blue-500 primary-collor placeholder-white text-white" style="background-color: #FF8A00; border-radius: 100%; place-content: white;"
              @input="$emit('search', $event.target.value)"
            />
          </slot>
        </div>

      </div>
    </div>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

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
