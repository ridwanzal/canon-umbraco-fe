<template>
  <div
    v-if="showModal"
    class="fixed inset-0 z-50 flex items-center justify-left bg-white xl:pl-[120px] xl:pr-[120px]"
  >
    <div class="bg-white rounded-lg max-w-4xl w-full p-2">
      <div class="container">
        <div
          class="flex justify-end md:mb-[48px] relative left-0 xl:left-[90px]"
        >
          <button
            @click="closeModal"
            class="text-gray-600 hover:text-gray-900 text-[45px] leading-[0]"
          >
            <img src="/images/close.png" height="24" alt="close" />
          </button>
        </div>

        <!-- Header -->
        <div class="flex mt-4 mb-10">
          <div>
            <div class="text-base text-gray-500 mb-2">
              <span class="text-[#40464D] mr-2">2025</span>
              <span class="text-[#40464D]">SINGAPORE</span>
            </div>
            <h3
              class="text-lg font-bold text-[#0F4C96] text-gray-800 text-[16px] md:text-[24px]"
            >
              Think Big Leadership Summit 2025
            </h3>
          </div>

          <!-- Dropdown -->
          <div class="w-full sm:ml-auto sm:w-auto self-end">
            <div class="relative w-full sm:min-w-[200px]" ref="dropdownRef">
              <button
                @click="openMediaopt = !openMediaopt"
                class="min-w-[200px] float-right xl:w-auto border border-[#00aed8] rounded-full px-4 py-2 text-[#000] bg-white focus:outline-none focus:ring-2 focus:ring-[#00aed8] flex items-center"
              >
                <span>Media</span>
                <svg
                  :class="[
                    'w-4 h-4 text-[#000] transition-transform duration-200 transform ml-auto',
                    openMediaopt ? 'rotate-180' : 'rotate-0',
                  ]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <ul
                v-if="openMediaopt"
                class="absolute right-[24px] top-[46px] w-[148px] min-w-[148px] bg-white border-[#E7E8E9] z-10"
              >
                <li
                  v-for="option in countryOptions"
                  :key="option.value"
                  @click="selectCountry(option)"
                  class="px-[16px] py-[4px] border-b border-[#ddd] hover:bg-[#00aed8] hover:text-white cursor-pointer last:border-b-0"
                >
                  {{ option.label }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Grid -->
        <div class="custom-grid-viewer overflow-y-auto custom-scrollbar">
          <div
            class="relative cursor-pointer self-center"
            @click="openModalViewer"
          >
            <img src="/images/1.png" alt="Image 1" class="w-full h-auto" />
          </div>
          <div class="relative cursor-pointer self-center">
            <img src="/images/2.png" alt="Image 2" class="w-full h-auto" />
          </div>
          <div class="relative cursor-pointer self-center">
            <img src="/images/3.png" alt="Image 2" class="w-full h-auto" />
          </div>
          <div class="relative cursor-pointer self-center">
            <img src="/images/4.png" alt="Image 2" class="w-full h-auto" />
          </div>
          <div class="relative cursor-pointer self-center">
            <img src="/images/5.png" alt="Image 2" class="w-full h-auto" />
          </div>
          <div class="relative cursor-pointer self-center">
            <img src="/images/6.png" alt="Image 2" class="w-full h-auto" />
          </div>
          <div
            class="relative cursor-pointer self-center"
            @click="openModalViewer"
          >
            <img src="/images/1.png" alt="Image 1" class="w-full h-auto" />
          </div>
          <div class="relative cursor-pointer self-center">
            <img src="/images/2.png" alt="Image 2" class="w-full h-auto" />
          </div>
          <div class="relative cursor-pointer self-center">
            <img src="/images/3.png" alt="Image 2" class="w-full h-auto" />
          </div>
          <div class="relative cursor-pointer self-center">
            <img src="/images/4.png" alt="Image 2" class="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Child Modal -->
  <ModalViewer v-if="showModalViewer" @close="closeModalViewer" />
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import ModalViewer from "./ModalViewer.vue";

export default {
  name: "CustomModal",
  components: { ModalViewer },
  setup() {
    const showModal = ref(true);
    const showModalViewer = ref(false);
    const openMediaopt = ref(false); // <-- renamed
    const selectedCountry = ref(null);
    const dropdownRef = ref(null);

    const countryOptions = ref([
      { value: "All", label: "All" },
      { value: "Photo", label: "Photo" },
      { value: "Video", label: "Video" },
    ]);

    const closeModal = () => {
      showModal.value = false;
    };

    const openModalViewer = () => {
      showModalViewer.value = true;
    };

    const closeModalViewer = () => {
      showModalViewer.value = false;
    };

    const selectCountry = (option) => {
      selectedCountry.value = option.value;
      openMediaopt.value = false;
    };

    const handleClickOutside = (event) => {
      if (
        openMediaopt.value &&
        dropdownRef.value &&
        !dropdownRef.value.contains(event.target)
      ) {
        openMediaopt.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
    });

    onBeforeUnmount(() => {
      document.removeEventListener("click", handleClickOutside);
    });

    return {
      showModal,
      showModalViewer,
      openMediaopt, // <-- renamed
      countryOptions,
      selectedCountry,
      closeModal,
      openModalViewer,
      closeModalViewer,
      selectCountry,
      dropdownRef,
    };
  },
};
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 12px;
  height: 80%;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #e2e8f0;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #0f4c96;
  border-radius: 10px;
  border: 2px solid #ffffff;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: #1e73b3;
}

.custom-scrollbar::-webkit-scrollbar-track-piece {
  border-radius: 10px;
}

.custom-grid-viewer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  max-height: 540px;
  overflow-y: auto;
}

@media (min-width: 768px) {
  .custom-grid-viewer {
    grid-template-columns: repeat(4, 1fr);
  }
}

.custom-grid-viewer::-webkit-scrollbar {
  width: 8px;
}

.custom-grid-viewer::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}
</style>
