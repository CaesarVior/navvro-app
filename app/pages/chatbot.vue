<template>
  <div class="flex h-screen w-full bg-[#181818] text-white relative overflow-hidden">

    <div class="hidden md:block w-72 flex-shrink-0">
      <SidebarChat />
    </div>
    <transition name="slide">
      <div v-if="isMobileSidebarOpen" class="fixed inset-y-0 left-0 z-50 w-72 md:hidden">
        <SidebarChat />
      </div>
    </transition>
    <div v-if="isMobileSidebarOpen" @click="toggleMobileSidebar" class="fixed inset-0 z-40 bg-black/50 md:hidden"></div>
    <div class="flex flex-1 flex-col overflow-hidden p-5">
      <header class="flex justify-between items-center border-b border-gray-700 p-4">
        <div class="flex items-center">
          <button @click="toggleMobileSidebar" class="mr-3 md:hidden">
            <Icon name="mingcute:menu-line" class="h-6 w-6" />
          </button>
          <h2 class="text-lg font-semibold">Asisten Virtual Navro</h2>
        </div>
        <!-- <div class="flex space-x-2">
          <p>(Cari...)</p>
          <p>(Bagikan...)</p>
        </div> -->
      </header>

      <main ref="chatWindow" @click="handleChatClick" class="flex-1 overflow-y-auto p-4 space-y-4">
        <div v-for="(message, index) in messages" :key="index" class="flex"
          :class="message.author === 'user' ? 'justify-end' : 'justify-start'">
          <div class="max-w-lg">

            <p v-if="message.author === 'user'" class="p-3 rounded-lg w-fit bg-orange-500">
              {{ message.content }}
            </p>

            <p v-else class="p-3 rounded-lg w-fit bg-gray-700" v-html="message.content">
            </p>

          </div>
        </div>
      </main>

      <footer class="border-t border-gray-700 p-4">
        <input v-model="newMessage" @keydown.enter="sendMessage" type="text" placeholder="Tanyakan saya sesuatu..."
          class="w-full rounded-lg bg-gray-700 p-3 text-white placeholder-gray-400" />
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import SidebarChat from '~/components/SidebarChat.vue';
import { ref, nextTick } from 'vue';
import { useRouter } from 'vue-router';

// --- Tipe data (Tidak Berubah) ---
interface ChatMessage {
  author: 'user' | 'ai';
  content: string;
}

// --- Logika Sidebar (Tidak Berubah) ---
const isMobileSidebarOpen = ref(false);
const toggleMobileSidebar = () => {
  isMobileSidebarOpen.value = !isMobileSidebarOpen.value;
};

// --- LOGIKA CHAT BARU ---

// 4. Inisialisasi router
const router = useRouter();

const newMessage = ref('');
const messages = ref<ChatMessage[]>([
  {
    author: 'ai',
    content: 'Hai! 👋 Saya Navvro. Silakan tanyakan sesuatu.',
  }
]);

const chatWindow = ref<HTMLElement | null>(null);

const scrollToBottom = () => {
  // ... (Tidak berubah)
  if (chatWindow.value) {
    chatWindow.value.scrollTop = chatWindow.value.scrollHeight;
  }
};

const sendMessage = async () => {
  const content = newMessage.value.trim();
  if (!content) return;

  messages.value.push({ author: 'user', content: content });
  newMessage.value = '';
  await nextTick();
  scrollToBottom();

  setTimeout(async () => {
    // 5. MODIFIKASI JAWABAN:
    // 'content' sekarang berisi string HTML dengan link
    messages.value.push({
      author: 'ai',
      content: 'Anda ingin ke pantai? Berikut ini barang-barang yang saya sarankan: <u class="list-disc list-inside pl-10"l><li>Sunscreen</li> <li>Bola pantai</li> <li>Baju pantai</li></ul>, silakan <a href="/product" data-link="/product" class="text-orange-400 underline font-semibold">klik disini</a> untuk melihat product.',
    });

    await nextTick();
    scrollToBottom();
  }, 1000);
};


// 6. FUNGSI BARU untuk menangani klik di dalam <main>
const handleChatClick = (event: MouseEvent) => {
  // Ambil elemen yang di-klik
  const target = event.target as HTMLElement;

  // Periksa apakah itu tag <a> DAN punya atribut 'data-link'
  if (target.tagName === 'A' && target.dataset.link) {
    // 1. Cegah <a> melakukan reload halaman
    event.preventDefault();

    // 2. Gunakan router Nuxt untuk pindah halaman
    router.push(target.dataset.link);
  }
};

</script>

<style>
/* CSS transisi (Tidak Berubah) */
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