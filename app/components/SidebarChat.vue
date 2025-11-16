<template>
    <div class="w-72 flex-shrink-0 bg-[#0C0C0C] p-5 text-white font-poppins">

        <div class="flex h-full flex-col justify-between p-4">

            <div class="mt-5 mb-10">
                <h1 class="font-bebas-neue text-4xl text-orange-500 mb-6">
                    NAVVRO
                </h1>
                <ul class="space-y-4 text-gray-300">


                    <li class="flex items-center space-x-1">

                        <Icon name="mingcute:ai-line" />
                        <span class="text-gray-300">
                            Alat AI
                        </span>
                    </li>


                    <li class="flex items-center space-x-1">
                        <Icon name="ri:settings-line" />
                        <span classs="text-gray-300">
                            Pengaturan
                        </span>
                    </li>
                    <li class="flex items-center space-x-1">
                        <Icon name="weui:pencil-filled" />
                        <span classs="text-gray-300">
                            Chat baru
                        </span>
                    </li>
                </ul>

            </div>

            <div class="flex-1 overflow-y-auto py-4">
                <h2 class="text-sm font-semibold text-gray-400 mb-2">Chats</h2>
                <p class="text-gray-500 text-sm">Cara Menjual Produk</p>
                <p class="text-gray-500 text-sm">Tren Penjualan Saat Ini</p>
            </div>

            <div class="border-t border-grey-200 p-5">
                <div class="flex justify-start items-center gap-2">

                    <img src="/images/RagnaTent_Logo.png"
                        class="w-10 h-10 rounded-full text-gray-400 hover:scale-[1.03]" fill="none"></img>

                    <div>
                        <p class="text-gray-300 text-semibold text-sm">RagnaTent</p>
                        <p class="text-xs">ragna@gmail.com</p>
                    </div>
                </div>
                <div class="flex justify-start items-center gap-2 px-3 mt-3">
                    <Icon name="material-symbols:logout"/>
                    <p class="text-gray-300 text-sm">Keluar</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

// Kosong untuk saat ini
</script>