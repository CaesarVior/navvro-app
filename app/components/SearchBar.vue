<template>
  <div class="flex-grow">
    <input
      type="text"
      placeholder="Cari UMKM..."
      class="w-full px-4 py-2 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 plaholder-white text-white bg-primary"
      @input="$emit('search', $event.target.value)"
    >
  </div>
</template>

<script setup>
defineEmits(['search'])
</script>
