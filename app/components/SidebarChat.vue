<template>
    <div class="h-full bg-[#0C0C0C] text-white font-poppins">

        <div class="flex h-full flex-col p-5">

            <div class="mt-5 mb-10">
                <h1 class="font-bebas-neue text-4xl text-orange-500 mb-6">
                    NAVRO
                </h1>
                <ul class="space-y-4 text-gray-300">

                    <li class="flex items-center space-x-3 cursor-pointer hover:text-white">
                        <Icon name="mingcute:ai-line" class="w-5 h-5 text-gray-400" />
                        <span class="text-gray-300">
                            Alat AI
                        </span>
                    </li>

                    <li class="flex items-center space-x-3 cursor-pointer hover:text-white">
                        <Icon name="ri:settings-line" class="w-5 h-5 text-gray-400" />
                        <span class="text-gray-300">
                            Pengaturan
                        </span>
                    </li>

                    <li class="flex items-center space-x-3 cursor-pointer hover:text-white">
                        <Icon name="weui:pencil-filled" class="w-5 h-5 text-gray-400" />
                        <span class="text-gray-300">
                            Chat baru
                        </span>
                    </li>
                </ul>
            </div>

            <div class="flex-1 overflow-y-auto py-4 border-t border-gray-700">
                <h2 class="text-sm font-semibold text-gray-400 mb-2">Chats</h2>
                <p class="text-gray-500 text-sm truncate cursor-pointer hover:text-gray-300">Cara Menjual Produk</p>
                <p class="text-gray-500 text-sm truncate cursor-pointer hover:text-gray-300">Tren Penjualan Saat Ini</p>
            </div>

            <div class="border-t border-gray-700 pt-5 mt-5">
                <div class="flex justify-start items-center gap-2">

                    <img src="/images/RagnaTent_Logo.png"
                        class="w-10 h-10 rounded-full text-gray-400 hover:scale-[1.03]" alt="Profil RagnaTent" />

                    <div>
                        <p class="text-gray-300 font-semibold text-sm">RagnaTent</p>
                        <p class="text-xs text-gray-400">ragna@gmail.com</p>
                    </div>
                </div>

                <div class="flex justify-start items-center gap-3 mt-4 cursor-pointer hover:text-white">
                    <Icon name="material-symbols:logout" class="w-5 h-5" />
                    <p class="text-gray-300 text-sm">Keluar</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
// Tidak perlu import Icon, Nuxt-icon sudah auto-import
// Kosong itu bagus!
</script>