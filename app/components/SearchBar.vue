<template>
  <div class="flex-grow">
    <input
      type="text"
      placeholder="Cari UMKM..."
      class="w-full px-4 py-2 p-5 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white text-xs text-white bg-primary"
      @input="$emit('search', $event.target.value)"
    >
  </div>
</template>

<script setup>
defineEmits(['search'])
</script>
