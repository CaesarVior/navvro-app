<template>
  <header :class="['primary-collor sticky top-0 z-50', scrolled ? 'shadow' : '']">
    <div class="mx-auto container flex items-center">
      <div class="flex-1">
        <NuxtLink to="/" class="orange-primary text-3xl font-bebas-neue text-gray-800">NAVVRO</NuxtLink>
      </div>

      <div class="flex-1 flex justify-center">
        <nav class="flex space-x-6">

          <NuxtLink to="/" class="font-poppins text-gray-600 hover:text-orange-500"
            exact-active-class="text-orange-500">
            BERANDA
          </NuxtLink>

          <NuxtLink to="/product" class="font-poppins text-gray-600 hover:text-orange-500"
            exact-active-class="text-orange-500">
            PRODUK
          </NuxtLink>

          <NuxtLink to="/umkm" class="font-poppins text-gray-600 hover:text-orange-500"
            exact-active-class="text-orange-500">
            UMKM
          </NuxtLink>

        </nav>
      </div>

      <div class=" flex-1 justify-end items-center hidden md:flex">
        <button
          class="bg-primary hover:bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="#ffffff"
              d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z" />
          </svg>
        </button>

        <button class="lg:hidden p-2">
          <Icon name="heroicons:bars-3" class="w-6 h-6 text-white" />
        </button>
      </div>

      <div class="md:hidden">
        <button @click="$emit('toggle-mobile-menu')"
          class="text-gray-600 p-2 rounded-md hover:bg-gray-100 focus:outline-none" aria-label="Buka menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
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
