<template>
  <div
    v-if="showModal"
    class="fixed inset-0 z-100 flex items-center justify-left bg-white pl-[120px] pr-[120px]"
  >
    <div class="bg-white rounded-lg max-w-4xl w-full p-2">
      <div class="container bg-[#F7F5F6]">
        <!-- Header -->
        <div class="flex justify-between items-center">
          <div class="flex-1 text-left p-[24px] flex items-center gap-4">
            <!-- Custom pagination -->
            <div
              ref="customPagination"
              class="text-[#40464D] font-medium"
            ></div>
          </div>

          <div class="flex-1 text-center">
            <div class="flex gap-[20px]">
              <div class="text-[#40464D]">2025</div>
              <div class="text-[#40464D]">SINGAPORE</div>
              <div class="font-bold text-[#0F4C96]">
                Think Big Leadership Business Series
              </div>
            </div>
          </div>

          <div class="flex-1 text-right flex-col-reverse">
            <button
              @click="closeModal"
              class="text-gray-600 hover:text-gray-900 text-[45px] leading-[0] float-right close-lh"
            >
              &times;
            </button>
          </div>
        </div>

        <!-- Swiper -->
        <div class="relative px-6 py-6">
          <Swiper
            :modules="[Navigation, Pagination]"
            :navigation="{ prevEl: prevEl, nextEl: nextEl }"
            :pagination="{
              el: customPagination,
              type: 'custom',
              renderCustom: (swiper, current, total) => {
                return `${current} | ${total}`;
              },
            }"
            class="h-[400px]"
          >
            <SwiperSlide
              v-for="(slide, i) in 10"
              :key="i"
              class="flex items-center justify-center bg-gray-200 rounded-lg overflow-hidden"
            >
              <div
                class="w-auto h-[287px] md:h-[555px] aspect-[16/10] flex items-center justify-center bg-white"
              >
                <img
                  :src="`https://picsum.photos/800/500?random=${i}`"
                  alt="Slide image"
                  class="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>

          <!-- Custom navigation (absolutely positioned, centered vertically) -->
          <button
            ref="prevEl"
            class="absolute left-0 top-1/2 -translate-y-1/2 text-[#0F4C96] text-3xl font-bold cursor-pointer z-10"
          >
            ←
          </button>
          <button
            ref="nextEl"
            class="absolute right-0 top-1/2 -translate-y-1/2 text-[#0F4C96] text-3xl font-bold cursor-pointer z-10"
          >
            →
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const showModal = ref(true);

// refs for custom elements
const customPagination = ref(null);
const prevEl = ref(null);
const nextEl = ref(null);

const closeModal = () => {
  showModal.value = false;
};
</script>

<style scoped>
.close-lh {
  line-height: 0.5;
}
</style>
