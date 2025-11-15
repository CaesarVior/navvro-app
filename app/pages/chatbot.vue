<template>
  <div class="flex h-screen w-full bg-[#181818] text-white">
    
    <SidebarChat />

    <div class="flex flex-1 flex-col overflow-hidden">
      
      <header class="flex justify-between items-center border-b border-gray-700 p-4">
        <h2 class="text-lg font-semibold">Asisten Virtual Navro</h2>
        <div class="flex space-x-2">
          <p>(Cari...)</p>
          <p>(Bagikan...)</p>
        </div>
      </header>

      <main class="flex-1 overflow-y-auto p-4 space-y-4">
        <p class="bg-gray-700 p-3 rounded-lg w-fit max-w-lg">
          Hai! 👋 Saya Navro...
        </p>
        </main>

      <footer class="border-t border-gray-700 p-4">
        <input 
          type="text" 
          placeholder="Tanyakan saya sesuatu..." 
          class="w-full rounded-lg bg-gray-700 p-3 text-white placeholder-gray-400"
        />
        </footer>
    </div>

  </div>
</template>

<script setup lang="ts">
// 1. Import komponen Sidebar
import SidebarChat from '~/components/SidebarChat.vue';

// 2. Kita TIDAK PERLU 'definePageMeta' lagi!
// Karena kita tidak menggunakan layout.
</script>