<style>
  .color-primary {
    background-color: #FF8747;
  }
</style>

<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Bagian Kiri: Logo -->
      <div class="flex-1">
        <NuxtLink to="/" class="text-2xl font-bold text-gray-800">UMKM Direktori</NuxtLink>
      </div>

      <!-- Bagian Tengah: Menu -->
      <nav class="hidden md:flex space-x-8">
        <NuxtLink to="/" class="text-gray-600 font-semibold hover:text-orange-500 transition-colors">Beranda</NuxtLink>
        <NuxtLink to="/produk" class="text-gray-600 font-semibold hover:text-orange-500 transition-colors">Produk</NuxtLink>
        <NuxtLink to="/kategori" class="text-gray-600 font-semibold hover:text-orange-500 transition-colors">Kategori</NuxtLink>
      </nav>

      <!-- Bagian Kanan: Search Bar -->
      <div class="flex-1 flex justify-end">
        <div class="flex items-center">
          <input type="text" placeholder="Cari..." class=" color-primary px-4 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500 rounded-full text-white placeholder-white">
          <!-- <button class="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600">
            Cari
          </button> -->
        </div>
      </div>
    </div>
  </header>
</template>
