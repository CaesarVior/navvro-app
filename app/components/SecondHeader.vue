<template>
  <header :class="['bg-white sticky top-0 z-50 relative', scrolled ? 'shadow bg-white' : '']">
    <div class="mx-auto container flex items-center h-16"> <div class="flex-1">
        <NuxtLink to="/" class="orange-primary text-3xl font-bebas-neue text-gray-800">NAVVRO</NuxtLink>
      </div>

      <div class="flex-1 flex justify-center">
        <nav class="hidden md:flex space-x-6">
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

      <div class="flex-1 flex justify-end items-center space-x-3">
        
        <a v-if="!isLoggedIn" href="/login"
          class="text-white bg-[#FF8A00] rounded-lg text-center block px-12 py-2 font-poppins text-sm hover:bg-orange-400">
          Login
        </a>
        <div v-else class="flex items-center space-x-3">
          <a href="/profile" aria-label="Lihat Profil"
            class="bg-[#FF8A00] hover:bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path fill="#ffffff"
                d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z" />
            </svg>
          </a>
        </div>

        <button @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden p-2 text-gray-800 hover:text-orange-500"
          aria-label="Toggle menu">
          <svg v-if="isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/>
          </svg>
        </button>
      </div>
    </div>

    <div v-if="isMobileMenuOpen" class="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
      <nav class="flex flex-col p-4 space-y-1">
        <NuxtLink to="/" class="font-poppins text-gray-600 hover:text-orange-500 block px-3 py-2 rounded-md"
          exact-active-class="text-orange-500 bg-orange-50"
          @click="isMobileMenuOpen = false"> BERANDA
        </NuxtLink>
        <NuxtLink to="/product" class="font-poppins text-gray-600 hover:text-orange-500 block px-3 py-2 rounded-md"
          exact-active-class="text-orange-500 bg-orange-50"
          @click="isMobileMenuOpen = false">
          PRODUK
        </NuxtLink>
        <NuxtLink to="/umkm" class="font-poppins text-gray-600 hover:text-orange-500 block px-3 py-2 rounded-md"
          exact-active-class="text-orange-500 bg-orange-50"
          @click="isMobileMenuOpen = false">
          UMKM
        </NuxtLink>
      </nav>
    </div>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const scrolled = ref(false)
const isMobileMenuOpen = ref(false)

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

const isLoggedIn = useState('isLoggedIn', () => false)
const router = useRouter()

</script>