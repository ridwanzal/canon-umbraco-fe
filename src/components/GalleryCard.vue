<template>
  <div>
    <a
    class="cursor-pointer"
    href="https://google.com"
    target="_blank"
  >
    <div class="relative w-full" style="padding-top: 66.6667%">
      <img
        :src="car.image"
        :alt="car.title"
        class="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
    <div class="bg-white py-4">
      <div class="text-base text-gray-500 mb-2">
        <span class="mr-2">{{ car.date }}</span>
        <span class="text-[#00AED8]">{{ car.country }}</span>
      </div>
      <h3 class="text-lg font-semibold text-[#4d4d4d] text-gray-800 text-[24px]">
        {{ car.title }}
      </h3>
    </div>
  </a>
  </div>
</template>

<script>
export default {
  name: "GalleryCard",
  props: {
    car: {
      type: Object,
      required: true,
    },
  },
};
</script>
