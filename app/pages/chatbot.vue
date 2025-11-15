<template>
  <div class="flex h-screen w-full bg-[#181818] text-white relative overflow-hidden">
    
    <div class="hidden sm:block w-72 flex-shrink-0">
      <SidebarChat />
    </div>

    <transition name="slide">
      <div 
        v-if="isMobileSidebarOpen" 
        class="fixed inset-y-0 left-0 z-50 w-72 sm:hidden"
      >
        <SidebarChat />
      </div>
    </transition>
    
    <div 
      v-if="isMobileSidebarOpen" 
      @click="toggleMobileSidebar" 
      class="fixed inset-0 z-40 bg-black/50 sm:hidden"
    ></div>

    <div class="flex flex-1 flex-col overflow-hidden">
      
      <header class="flex justify-between items-center border-b border-gray-700 p-4">
        
        <div class="flex items-center">
          <button @click="toggleMobileSidebar" class="mr-3 sm:hidden">
            <Icon name="mingcute:menu-line" class="h-6 w-6" />
          </button>
          
          <h2 class="text-lg font-semibold">Asisten Virtual Navro</h2>
        </div>
        
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
import SidebarChat from '~/components/SidebarChat.vue';
import { ref } from 'vue'; // Kita butuh 'ref'

// --- INI LOGIKA BARUNYA ---

// 1. Buat 'state' untuk melacak status sidebar mobile
const isMobileSidebarOpen = ref(false);

// 2. Buat fungsi untuk Buka/Tutup
const toggleMobileSidebar = () => {
  isMobileSidebarOpen.value = !isMobileSidebarOpen.value;
};
</script>

<style>
/* CSS untuk transisi slide-in/out sidebar mobile */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-out;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
</style>