<template>
  <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-left bg-white pl-[120px] pr-[120px]">
    <div class="bg-white rounded-lg max-w-4xl w-full p-2">
      <div class="container">
        <div class="flex justify-end mb-[48px] relative left-[90px]">
          <button @click="$emit('close')" class="text-gray-600 hover:text-gray-900 text-[45px] leading-[0]">
            &times;
          </button>
        </div>
        <div class="flex mt-4 mb-10">
          <div>
            <div class="text-base text-gray-500 mb-2">
              <span class="text-[#40464D] mr-2">2025</span>
              <span class="text-[#40464D]">SINGAPORE</span>
            </div>
            <h3 class="text-lg font-bold text-[#0F4C96] text-gray-800 text-[24px]">
              Think Big Leadership Summit 2025
            </h3>
          </div>
          <div class="ml-auto">
            <div class="relative min-w-[200px]">
              <button @click="openCountry = !openCountry"
                class="w-full border border-[#00aed8] rounded-full px-4 py-2 text-[#000] bg-white focus:outline-none focus:ring-2 focus:ring-[#00aed8] flex items-center justify-between">
                <span>Media</span>
                <svg :class="[
                  'w-4 h-4 text-[#000] transition-transform duration-200 transform',
                  openCountry ? 'rotate-180' : 'rotate-0',
                ]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ul v-if="openCountry" class="absolute w-[80%] left-[10%] bg-white border-[#E7E8E9] mt-1 z-10">
                <li v-for="option in countryOptions" :key="option.value" @click="selectCountry(option)"
                  class="px-[16px] py-[4px] border-b border-[#ddd] hover:bg-[#00aed8] hover:text-white cursor-pointer last:border-b-0">
                  Media
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-4 gap-6 max-h-[600px] overflow-y-auto custom-scrollbar">
          <div class="relative">
            <img src="/images/1.png" alt="Image 1" class="w-full h-auto">
          </div>
          <div class="relative">
            <img src="/images/2.png" alt="Image 2" class="w-full h-auto">
          </div>
          <div class="relative">
            <img src="/images/3.png" alt="Image 3" class="w-full h-auto">
          </div>
          <div class="relative">
            <img src="/images/4.png" alt="Image 1" class="w-full h-auto">
          </div>
          <div class="relative">
            <img src="/images/5.png" alt="Image 1" class="w-full h-auto">
          </div>
          <div class="relative">
            <img src="/images/6.png" alt="Image 1" class="w-full h-auto">
          </div>
          <div class="relative">
            <img src="/images/7.png" alt="Image 1" class="w-full h-auto">
          </div>
          <div class="relative">
            <img src="/images/8.png" alt="Image 1" class="w-full h-auto">
          </div>
          <div class="relative">
            <img src="/images/1.png" alt="Image 1" class="w-full h-auto">
          </div>
          <div class="relative">
            <img src="/images/2.png" alt="Image 2" class="w-full h-auto">
          </div>
          <div class="relative">
            <img src="/images/3.png" alt="Image 3" class="w-full h-auto">
          </div>
          <div class="relative">
            <img src="/images/4.png" alt="Image 1" class="w-full h-auto">
          </div>
          <div class="relative">
            <img src="/images/5.png" alt="Image 1" class="w-full h-auto">
          </div>
          <div class="relative">
            <img src="/images/6.png" alt="Image 1" class="w-full h-auto">
          </div>
          <div class="relative">
            <img src="/images/7.png" alt="Image 1" class="w-full h-auto">
          </div>
          <div class="relative">
            <img src="/images/8.png" alt="Image 1" class="w-full h-auto">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'

const showModal = ref(true)
const openAccordion = ref(null)
const selectedCountries = ref([])
const selectedYears = ref([])

const toggleAccordion = (section) => {
  openAccordion.value = openAccordion.value === section ? null : section
}

const closeModal = () => {
  showModal.value = false
}

const applyFilter = () => {
  console.log('Countries:', selectedCountries.value)
  console.log('Years:', selectedYears.value)
  closeModal()
}
</script>
<style scoped>
/* Scrollbar Styles */
.custom-scrollbar::-webkit-scrollbar {
  width: 12px; /* Set width for scrollbar */
  height: 80%;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #e2e8f0; /* Lighter color for the track */
  border-radius: 10px;
  /* No need for width, but ensure the track is thinner */
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #0f4c96; /* Dark blue for thumb */
  border-radius: 10px; /* Rounded thumb */
  border: 2px solid #ffffff; /* Optional: Thumb border */
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: #1e73b3; /* Change thumb color on hover */
}

.custom-scrollbar::-webkit-scrollbar-track-piece {
  border-radius: 10px; /* To ensure the track itself is rounded */
}
</style>
