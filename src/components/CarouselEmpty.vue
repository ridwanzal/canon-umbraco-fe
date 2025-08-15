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
          <!-- Filter icon -->
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.90234 19.5336V4.66644C6.90319 4.57869 6.88654 4.49165 6.85335 4.41041C6.82017 4.32917 6.77111 4.25537 6.70906 4.19332C6.64701 4.13127 6.5732 4.08221 6.49197 4.04902C6.41073 4.01584 6.32369 3.99918 6.23594 4.00004C6.14819 3.99918 6.06115 4.01584 5.97991 4.04902C5.89867 4.08221 5.82487 4.13127 5.76282 4.19332C5.70076 4.25537 5.65171 4.32917 5.61852 4.41041C5.58534 4.49165 5.56868 4.57869 5.56954 4.66644V19.5336C4.00954 19.84 2.83594 21.1864 2.83594 22.8C2.83594 24.4136 4.00954 25.76 5.56954 26.0664V28.1336C5.56954 28.5064 5.86234 28.8 6.23594 28.8C6.32369 28.8009 6.41073 28.7842 6.49197 28.7511C6.5732 28.7179 6.64701 28.6688 6.70906 28.6068C6.77111 28.5447 6.82017 28.4709 6.85335 28.3897C6.88654 28.3084 6.90319 28.2214 6.90234 28.1336V26.0664C8.44954 25.76 9.62234 24.4136 9.62234 22.8C9.62234 21.1864 8.44954 19.84 6.90234 19.5336ZM6.23594 24.8C5.10234 24.8 4.16954 23.9064 4.16954 22.8C4.16954 21.6936 5.08954 20.8 6.23594 20.8C7.38234 20.8 8.28954 21.6936 8.28954 22.8C8.28954 23.9064 7.36954 24.8 6.23594 24.8ZM16.7159 7.80004V4.66644C16.7168 4.57869 16.7001 4.49165 16.667 4.41041C16.6338 4.32917 16.5847 4.25537 16.5227 4.19332C16.4606 4.13127 16.3868 4.08221 16.3056 4.04902C16.2243 4.01584 16.1373 3.99918 16.0495 4.00004C15.9617 3.99908 15.8746 4.01565 15.7933 4.04879C15.7119 4.08193 15.638 4.13097 15.5759 4.19303C15.5138 4.25509 15.4646 4.32893 15.4314 4.41022C15.3982 4.49151 15.3815 4.57862 15.3823 4.66644V7.80004C13.8223 8.10644 12.6495 9.45364 12.6495 11.0664C12.6495 12.68 13.8223 14.0264 15.3823 14.3336V28.1336C15.3823 28.5064 15.6759 28.8 16.0495 28.8C16.1373 28.8009 16.2243 28.7842 16.3056 28.7511C16.3868 28.7179 16.4606 28.6688 16.5227 28.6068C16.5847 28.5447 16.6338 28.4709 16.667 28.3897C16.7001 28.3084 16.7168 28.2214 16.7159 28.1336V14.3336C18.2623 14.0264 19.4359 12.68 19.4359 11.0664C19.4359 9.45364 18.2623 8.10644 16.7159 7.80004ZM16.0495 13.0664C14.9159 13.0664 13.9823 12.1736 13.9823 11.0664C13.9823 9.96004 14.9023 9.06644 16.0495 9.06644C17.1959 9.06644 18.1023 9.96004 18.1023 11.0664C18.1023 12.1736 17.1823 13.0664 16.0495 13.0664ZM25.4359 4.66644V22.7336C26.9959 23.04 28.1695 24.3864 28.1695 26C28.1695 27.84 26.6359 29.3336 24.7695 29.3336C22.9023 29.3336 21.3823 27.84 21.3823 26C21.3823 24.3864 22.5559 23.04 24.1023 22.7336V4.66644C24.1023 4.29364 24.3959 4.00004 24.7695 4.00004C25.1423 4.00004 25.4359 4.29364 25.4359 4.66644ZM22.7159 26C22.7159 27.1064 23.6359 28 24.7695 28C25.9159 28 26.8359 27.1064 26.8359 26C26.8359 24.8936 25.9023 24 24.7695 24C23.6359 24 22.7159 24.8936 22.7159 26Z"
              fill="#163567"
            />
          </svg>
        </div>
      </div>
      <!-- End Filters mobile -->

      <!-- Filters desktop -->
      <div class="flex justify-center gap-4 mb-[48px] show-flex-desktop">
        <!-- Country dropdown -->
        <div class="relative min-w-[200px]">
          <button
            @click="openCountry = !openCountry"
            class="w-full border border-[#00aed8] rounded-full px-4 py-2 text-[#000] bg-white focus:outline-none focus:ring-2 focus:ring-[#00aed8] flex items-center justify-between"
          >
            <span>{{ selectedCountryLabel }}</span>
            <svg
              :class="[
                'w-4 h-4 text-[#000] transition-transform duration-200 transform',
                openCountry ? 'rotate-180' : 'rotate-0',
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
            v-if="openCountry"
            class="absolute w-[80%] left-[10%] bg-white border border-[#ddd] mt-1 shadow-sm z-10"
          >
            <li
              v-for="option in countryOptions"
              :key="option.value"
              @click="selectCountry(option)"
              class="px-4 py-2 border-b border-[#ddd] hover:bg-[#00aed8] hover:text-white cursor-pointer last:border-b-0"
            >
              {{ option.label }}
            </li>
          </ul>
        </div>

        <!-- Year dropdown -->
        <div class="relative min-w-[200px]">
          <button
            @click="openYear = !openYear"
            class="w-full border border-[#00aed8] rounded-full px-4 py-2 text-[#000] bg-white focus:outline-none focus:ring-2 focus:ring-[#00aed8] flex items-center justify-between"
          >
            <span>{{ selectedYearLabel }}</span>
            <svg
              :class="[
                'w-4 h-4 text-[#000] transition-transform duration-200 transform',
                openYear ? 'rotate-180' : 'rotate-0',
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
            v-if="openYear"
            class="absolute w-[80%] left-[10%] bg-white border border-[#ddd] mt-1 shadow-sm z-10"
          >
            <li
              v-for="option in yearOptions"
              :key="option.value"
              @click="selectYear(option)"
              class="px-4 py-2 border-b border-[#ddd] hover:bg-[#00aed8] hover:text-white cursor-pointer last:border-b-0"
            >
              {{ option.label }}
            </li>
          </ul>
        </div>
      </div>
      <!-- End Filters desktop -->

      <!-- Carousel Empty -->
      <p>No Result Found</p>
    </div>
  </section>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const openCountry = ref(false);
    const openYear = ref(false);
    const selectedCountry = ref("");
    const selectedYear = ref("");

    const countryOptions = ref([
      { value: "", label: "Country" },
      { value: "SINGAPORE", label: "Singapore" },
      { value: "MALAYSIA", label: "Malaysia" },
      { value: "INDONESIA", label: "Indonesia" },
    ]);

    const yearOptions = ref([
      { value: "", label: "Year" },
      { value: "2025", label: "2025" },
      { value: "2024", label: "2024" },
      { value: "2023", label: "2023" },
    ]);

    const selectedCountryLabel = computed(() =>
      countryOptions.value.find((o) => o.value === selectedCountry.value)?.label || "Country"
    );

    const selectedYearLabel = computed(() =>
      yearOptions.value.find((o) => o.value === selectedYear.value)?.label || "Year"
    );

    const selectCountry = (option) => {
      selectedCountry.value = option.value;
      openCountry.value = false;
    };

    const selectYear = (option) => {
      selectedYear.value = option.value;
      openYear.value = false;
    };

    return {
      openCountry,
      openYear,
      selectedCountryLabel,
      selectedYearLabel,
      countryOptions,
      yearOptions,
      selectCountry,
      selectYear,
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
