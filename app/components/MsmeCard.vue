<template>
  <div class="border rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
    <NuxtLink :to="`/msme/${msme.id}`">
      <img :src="msme.image" :alt="msme.name" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">{{ msme.name }}</h3>
        <p class="text-gray-600">{{ msme.category }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  msme: {
    type: Object,
    required: true
  }
})
</script>
