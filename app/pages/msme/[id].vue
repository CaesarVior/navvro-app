<template>
  <div class="container mx-auto p-4">
    <div v-if="msme" class="max-w-2xl mx-auto">
      <NuxtLink to="/" class="text-blue-500 hover:underline mb-4 inline-block">&larr; Kembali ke Daftar</NuxtLink>
      <h1 class="text-4xl font-bold mb-4">{{ msme.name }}</h1>
      <img :src="msme.image" :alt="msme.name" class="w-full h-64 object-cover rounded-lg mb-4">
      <p class="text-lg text-gray-700 mb-2"><span class="font-semibold">Kategori:</span> {{ msme.category }}</p>
      <p class="text-gray-600">{{ msme.description }}</p>
    </div>
    <div v-else class="text-center text-gray-500 font-bebas-neue">
      <p>UMKM tidak ditemukan.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import msmes from '~/data/msme.json'

const route = useRoute()
const msme = ref(null)

onMounted(() => {
  const msmeId = parseInt(route.params.id)
  msme.value = msmes.find(m => m.id === msmeId)
})
</script>
