<template>
  <div class="relative w-full h-82 md:h-82 overflow-hidden rounded-lg aspect-video">
    <div
      v-for="(image, index) in images"
      :key="index"
      class="absolute inset-0 transition-opacity duration-700 ease-in-out"
      :class="{
        'opacity-100 z-10': index === currentIndex,
        'opacity-0 z-0': index !== currentIndex
      }"
    >
      <img
        :src="image"
        alt="Slide image"
        class="w-full h-full object-cover select-none pointer-events-none"
      />
    </div>

    <button
      @click="prevSlide"
      class="absolute top-1/2 left-3 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <button
      @click="nextSlide"
      class="absolute top-1/2 right-3 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
      <button
        v-for="(image, index) in images"
        :key="index"
        @click="goToSlide(index)"
        class="w-3 h-3 rounded-full"
        :class="index === currentIndex ? 'bg-white' : 'bg-gray-400/70'"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const images = [
  '/images/foto-1.jpg',
  '/images/foto-2.jpg',
  '/icon/no-img.png'
]

const currentIndex = ref(0)
let interval = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.length) % images.length
}

const goToSlide = (index) => {
  currentIndex.value = index
}

onMounted(() => {
  interval = setInterval(nextSlide, 4000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

