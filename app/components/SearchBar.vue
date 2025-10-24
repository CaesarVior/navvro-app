<template>
  <div class="flex-grow">
    <input
      type="text"
      placeholder="Cari UMKM..."
      class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      @input="$emit('search', $event.target.value)"
    >
  </div>
</template>

<script setup>
defineEmits(['search'])
</script>
