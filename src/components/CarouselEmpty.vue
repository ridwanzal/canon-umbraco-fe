<template>
  <section class="w-full py-8 bg-white mb-[40px]">
    <div class="container">
      <h1 class="text-center pb-8 text-[#0F4C96] text-[36px]">GALLERY</h1>

      <!-- Filters mobile -->
      <div
        class="flex justify-center gap-4 mb-[48px] show-flex-mobile border-b border-black py-3"
      >
        <div>
          <h6
            class="font-bold text-[#40464D] flex items-center self-center h-full"
          >
            Filter
          </h6>
        </div>
        <div class="ml-auto">
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- icon path remains unchanged -->
          </svg>
        </div>
      </div>

      <!-- Filters desktop -->
      <div class="flex justify-center gap-4 mb-[48px] show-flex-desktop">
        <!-- Country dropdown -->
        <div class="relative min-w-[200px]" ref="countryDropdownRef">
          <button
            @click="openCountryDropdown = !openCountryDropdown"
            class="w-full border border-[#00aed8] rounded-full px-4 py-2 text-[#000] bg-white focus:outline-none focus:ring-2 focus:ring-[#00aed8] flex items-center justify-between"
          >
            <span>{{ selectedCountryLabel }}</span>
            <svg
              :class="[
                'w-4 h-4 text-[#000] transition-transform duration-200 transform',
                openCountryDropdown ? 'rotate-180' : 'rotate-0',
              ]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
            v-if="openCountryDropdown"
            class="absolute w-[80%] left-[10%] bg-white border-[#E7E8E9] mt-1 shadow-sm z-10"
          >
            <li
              v-for="option in countryOptions"
              :key="option.value"
              @click="selectCountry(option)"
              class="px-[16px] py-[4px] border-b border-[#E7E8E9] hover:bg-[#00aed8] hover:text-white cursor-pointer last:border-b-0"
            >
              {{ option.label }}
            </li>
          </ul>
        </div>

        <!-- Year dropdown -->
        <div class="relative min-w-[200px]" ref="yearDropdownRef">
          <button
            @click="openYearDropdown = !openYearDropdown"
            class="w-full border border-[#00aed8] rounded-full px-4 py-2 text-[#000] bg-white focus:outline-none focus:ring-2 focus:ring-[#00aed8] flex items-center justify-between"
          >
            <span>{{ selectedYearLabel }}</span>
            <svg
              :class="[
                'w-4 h-4 text-[#000] transition-transform duration-200 transform',
                openYearDropdown ? 'rotate-180' : 'rotate-0',
              ]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
            v-if="openYearDropdown"
            class="absolute w-[80%] left-[10%] bg-white border-[#E7E8E9] mt-1 shadow-sm z-10"
          >
            <li
              v-for="option in yearOptions"
              :key="option.value"
              @click="selectYear(option)"
              class="px-[16px] py-[4px] border-b border-[#E7E8E9] hover:bg-[#00aed8] hover:text-white cursor-pointer last:border-b-0"
            >
              {{ option.label }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Carousel Placeholder -->
      <p>No Result Found</p>
    </div>
  </section>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

export default {
  setup() {
    const openCountryDropdown = ref(false);
    const openYearDropdown = ref(false);

    const selectedCountry = ref("");
    const selectedYear = ref("");

    const countryOptions = ref([
      { value: "All", label: "All" },
      { value: "SINGAPORE", label: "Singapore" },
      { value: "MALAYSIA", label: "Malaysia" },
      { value: "INDONESIA", label: "Indonesia" },
    ]);

    const yearOptions = ref([
      { value: "All", label: "All" },
      { value: "2025", label: "2025" },
      { value: "2024", label: "2024" },
      { value: "2023", label: "2023" },
    ]);

    const selectedCountryLabel = computed(
      () =>
        countryOptions.value.find((o) => o.value === selectedCountry.value)
          ?.label || "Country"
    );

    const selectedYearLabel = computed(
      () =>
        yearOptions.value.find((o) => o.value === selectedYear.value)?.label ||
        "Year"
    );

    const selectCountry = (option) => {
      selectedCountry.value = option.value;
      openCountryDropdown.value = false;
    };

    const selectYear = (option) => {
      selectedYear.value = option.value;
      openYearDropdown.value = false;
    };

    // Refs for dropdown containers
    const countryDropdownRef = ref(null);
    const yearDropdownRef = ref(null);

    const handleClickOutside = (event) => {
      if (
        openCountryDropdown.value &&
        countryDropdownRef.value &&
        !countryDropdownRef.value.contains(event.target)
      ) {
        openCountryDropdown.value = false;
      }

      if (
        openYearDropdown.value &&
        yearDropdownRef.value &&
        !yearDropdownRef.value.contains(event.target)
      ) {
        openYearDropdown.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
    });

    onBeforeUnmount(() => {
      document.removeEventListener("click", handleClickOutside);
    });

    return {
      openCountryDropdown,
      openYearDropdown,
      selectedCountryLabel,
      selectedYearLabel,
      countryOptions,
      yearOptions,
      selectCountry,
      selectYear,
      countryDropdownRef,
      yearDropdownRef,
    };
  },
};
</script>

<style>
@media (max-width: 767px) {
  .show-flex-desktop {
    display: none !important;
  }
  .show-flex-mobile {
    display: flex !important;
  }
}
@media (min-width: 768px) {
  .show-flex-desktop {
    display: flex !important;
  }
  .show-flex-mobile {
    display: none !important;
  }
}
</style>
