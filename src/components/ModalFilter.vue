<template>
  <div v-if="showModal" class="fixed inset-0 z-50 flex flex-col bg-white">
    <!-- Header -->
    <div class="flex items-center justify-between p-4 border-b border-gray-200">
      <h2 class="text-xl font-bold">Filters</h2>
      <button @click="closeModal" class="text-gray-600 hover:text-gray-900 text-[45px] leading-[0]">
        &times;
      </button>
    </div>

    <!-- Content -->
    <div class="flex-1 overflow-y-auto p-4">
      <!-- Accordion: Country -->
      <div class="border-b border-gray-200">
        <button class="w-full flex justify-between items-center py-3 text-lg font-medium"
          @click="toggleAccordion('country')">
          <span>Country</span>
          <svg class="w-5 h-5 text-gray-500 transition-transform duration-300"
            :class="{ 'rotate-90': openAccordion === 'country' }" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <div v-if="openAccordion === 'country'" class="pl-4 pb-4 space-y-2">
          <label class="flex items-center gap-2">
            <input type="checkbox" value="USA" v-model="selectedCountries" />
            USA
          </label>
          <label class="flex items-center gap-2">
            <input type="checkbox" value="Indonesia" v-model="selectedCountries" />
            Indonesia
          </label>
          <label class="flex items-center gap-2">
            <input type="checkbox" value="Japan" v-model="selectedCountries" />
            Japan
          </label>
        </div>
      </div>

      <!-- Accordion: Year -->
      <div class="border-b border-gray-200 mb-5">
        <button class="w-full flex justify-between items-center py-3 text-lg font-medium"
          @click="toggleAccordion('year')">
          <span>Year</span>
          <svg class="w-5 h-5 text-gray-500 transition-transform duration-300"
            :class="{ 'rotate-90': openAccordion === 'year' }" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <div v-if="openAccordion === 'year'" class="pl-4 pb-4 space-y-2">
          <label class="flex items-center gap-2">
            <input type="checkbox" value="2023" v-model="selectedYears" />
            2023
          </label>
          <label class="flex items-center gap-2">
            <input type="checkbox" value="2024" v-model="selectedYears" />
            2024
          </label>
          <label class="flex items-center gap-2">
            <input type="checkbox" value="2025" v-model="selectedYears" />
            2025
          </label>
        </div>
      </div>
      <button
        class="w-full py-3 bg-[#06AED8] text-white text-[14px] uppercase font-semibold rounded-full hover:bg-[#0599bf]"
        @click="applyFilter">
        Apply Filter
      </button>
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
