<template>
  <section 
    class="relative bg-cover bg-center h-[440px] md:h-130"
    :style="{ backgroundImage: 'url(' + (store.fotoToko || '/icon/no-img.png') + ')' }"
  >
    <div class="absolute inset-0 bg-black/30"></div>

    <div class="relative z-10">
      <div class="flex items-center justify-center pt-12 md:pt-20">
        <img 
          :src="sellerLogo" 
          class="rounded-full border-4 border-white shadow-lg w-20 md:w-[100px]" 
          alt="Logo Toko"
        >
      </div>
      <div class="flex items-center justify-center pt-4 md:pt-8">
        <span class="font-bebas-neue text-gray-100 text-3xl md:text-4xl text-shadow-md">{{ store.name }}</span>
      </div>
      <div class="flex items-center justify-center pt-1 md:pt-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-200 me-1 w-5 h-5 md:w-[25px] md:h-[25px]" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M12 21.325q-.35 0-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762t-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 1.125-.437 2.363t-1.275 2.575T16.2 17.9t-2.875 2.925q-.275.25-.625.375t-.7.125M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12" />
        </svg>
        <span class="font-poppins text-gray-200 text-lg md:text-2xl text-shadow-md">{{ sellerLocation }}</span>
      </div>

      <div class="grid grid-cols-2 pt-4 md:pt-5 items-end">
        <div>
          <div class="flex justify-center items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="mt-3 md:mt-5 w-10 h-10 md:w-[60px] md:h-[60px]" viewBox="0 0 24 24">
              <path fill="#FCB53B" d="m5.825 21l2.325-7.6L2 9h7.6L12 1l2.4 8H22l-6.15 4.4l2.325 7.6L12 16.3z" />
            </svg>
            <div class="justify-center text-center">
              <span class="font-poppins text-gray-200 mb-1 md:mb-3 text-sm md:text-base">Rating & Ulasan</span>
              <div class="flex items-end justify-center">
                <span class="text-5xl md:text-7xl font-bebas-neue text-gray-200">{{ storeRating }}</span>
                <span class="text-xl md:text-2xl font-bebas-neue text-gray-200">/5</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex justify-center items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="mt-3 md:mt-5 w-10 h-10 md:w-[60px] md:h-[60px]"
              viewBox="0 0 24 24">
              <g fill="none" stroke="#FCB53B" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                <path d="M3.5 4v13.5a3 3 0 0 0 3 3H20" />
                <path d="m6.5 15l4.5-4.5l3.5 3.5L20 8.5" />
              </g>
            </svg>
            <div class="justify-center text-center">
              <span class="font-poppins text-gray-200 mb-1 md:mb-3 text-sm md:text-base">Total Ulasan</span>
              <div class="flex items-end justify-center">
                <span class="text-5xl md:text-6xl font-bebas-neue text-gray-200">{{ totalReviewsFormatted.value }}</span>
                <span class="text-lg md:text-xl font-bebas-neue text-gray-200">{{ totalReviewsFormatted.unit }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  store: {
    type: Object,
    required: true
  }
});

const sellerLogo = computed(() => {
  return props.store?.product?.[0]?.seller?.logo || 'https://via.placeholder.com/135';
});

const sellerLocation = computed(() => {
  return props.store?.product?.[0]?.seller?.location || 'Lokasi tidak diketahui';
});

const storeRating = computed(() => {
  if (!props.store || !props.store.product || props.store.product.length === 0) {
    return '0.0'; 
  }
  
  const productsWithRating = props.store.product.filter(p => p.rating && typeof p.rating.average === 'number');
  
  if (productsWithRating.length === 0) {
    return '0.0';
  }

  const totalRating = productsWithRating.reduce((acc, p) => acc + p.rating.average, 0);
  const average = totalRating / productsWithRating.length;
  
  return average.toFixed(1);
});

const totalReviewsFormatted = computed(() => {
  if (!props.store || !props.store.product) {
    return { value: 0, unit: 'Ulasan' };
  }
  
  const total = props.store.product.reduce((acc, p) => {
    return acc + (p.rating?.count || 0);
  }, 0);

  if (total >= 1000) {
    return { value: (total / 1000).toFixed(1), unit: 'Rb' };
  }
  
  return { value: total, unit: 'Ulasan' };
});
</script>

<style scoped>
.text-shadow-md {
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>