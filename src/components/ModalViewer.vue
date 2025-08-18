<template>
  <div v-if="showModal" class="fixed inset-0 z-100 flex items-center justify-left bg-white pl-[120px] pr-[120px]">
    <div class="bg-white rounded-lg max-w-4xl w-full p-2">
      <div class="container bg-[#F7F5F6]">
        <div class="flex justify-between items-center">
          <div class="flex-1 text-left p-[24px]">
            <div class="flex gap-2">
              <div>1</div>
              <div>|</div>
              <div>37</div>
            </div>
          </div>
          <div class="flex-1 text-center">
            <div class="flex gap-[20px]">
              <div class="text-[#00AED8]">
                2025
              </div>
              <div>
                SINGAPORE
              </div>
              <div>
                Think Big Leadearship Business Series
              </div>
            </div>
          </div>
          <div class="flex-1 text-right">
            <button @click="$emit('close')" class="text-gray-600 hover:text-gray-900 text-[45px] leading-[0]">
              &times;
            </button>
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
