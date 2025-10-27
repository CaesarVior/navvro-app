<template>
  <header
    :class="['primary-collor sticky top-0 z-50', scrolled ? 'shadow' : '']"
  >
    <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <NuxtLink to="/" class="text-2xl font-bold text-gray-800"
        >UMKM Direktori</NuxtLink
      >

      <nav class="hidden md:flex space-x-6">
        <NuxtLink to="/" class="text-gray-600 hover:text-orange-500"
          >Beranda</NuxtLink
        >
        //
        <NuxtLink to="/produk" class="text-gray-600 hover:text-orange-500"
          >Produk</NuxtLink
        >
        //
        <NuxtLink to="/kategori" class="text-gray-600 hover:text-orange-500"
          >Kategori</NuxtLink
        >
      </nav>

      <div class="flex-1 flex justify-end">
        <div class="hidden sm:flex items-center w-80">
          <slot name="search">
            <input
              type="text"
              placeholder="Cari UMKM..."
              class="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
              @input="$emit('search', $event.target.value)"
            />
          </slot>
        </div>
        <button
          class="ml-4 inline-flex items-center px-3 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 md:hidden"
          @click="$emit('toggle-mobile-menu')"
        >
          Menu
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const scrolled = ref(false);

function onScroll() {
  scrolled.value = window.scrollY > 10;
}

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});

defineEmits(["search", "toggle-mobile-menu"]);
</script>
