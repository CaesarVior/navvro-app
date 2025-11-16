<style scoped>
.primary-collor {
    background-color: #ffffff;
}
</style>

<template>
    <ListProductHeader />
    <section class="relative h-96 bg-cover bg-center bg-[url('/images/banner.png')] rounded-xl">
        <div class="absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl">
            <h2 class="text-white text-2xl sm:text-4xl font-bebas-neue tracking-widest text-center shadow-lg px-4">
                TEMUKAN UMKM DISINI
            </h2>
        </div>
    </section>
    <div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div class="max-w-7xl flex flex-col items-center">
                <div class="w-3xl">
                    <div class="flex-grow">
                        <input type="text" placeholder="Cari UMKM..."
                            class="w-full px-4 py-2 p-5 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white text-xs text-white bg-primary"
                            @input="$emit('search', $event.target.value)">
                    </div>
                    <h2 class="text-lg font-medium text-gray-700 mb-4 text-center my-3">
                        Hasil Pencarian untuk "...."
                    </h2>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div class="md:col-span-1">
                    <FilterSidebar />
                </div>

                <div class="md:col-span-3">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <UmkmCard v-for="store in stores" :key="store.id" :product="store" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <TheFooter />
</template>

<script setup>
import ListProductHeader from '~/components/SecondHeader.vue';
import TheFooter from '~/components/TheFooter.vue';
import UmkmCard from '~/components/UmkmCard.vue';
import FilterSidebar from '~/components/FilterSidebar.vue';

import stores from '~/data/products.json';

</script>