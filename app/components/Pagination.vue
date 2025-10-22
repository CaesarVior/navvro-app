<template>
  <div class="flex justify-center items-center my-8">
    <button
      :disabled="currentPage === 1"
      @click="$emit('page-change', currentPage - 1)"
      class="px-4 py-2 mx-1 border rounded-md"
      :class="{ 'bg-gray-200 cursor-not-allowed': currentPage === 1, 'hover:bg-gray-100': currentPage !== 1 }"
    >
      Sebelumnya
    </button>
    <span class="px-4 py-2">Halaman {{ currentPage }} dari {{ totalPages }}</span>
    <button
      :disabled="currentPage === totalPages"
      @click="$emit('page-change', currentPage + 1)"
      class="px-4 py-2 mx-1 border rounded-md"
      :class="{ 'bg-gray-200 cursor-not-allowed': currentPage === totalPages, 'hover:bg-gray-100': currentPage !== totalPages }"
    >
      Berikutnya
    </button>
  </div>
</template>

<script setup>
defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
})
defineEmits(['page-change'])
</script>
