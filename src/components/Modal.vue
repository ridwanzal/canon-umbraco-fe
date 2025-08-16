<template>
  <teleport to="body">
    <div
      v-show="modelValue"
      class="fixed inset-0 z-[9999] flex"
      role="dialog"
      aria-modal="true"
      @keydown.esc.prevent="handleCloseOnEsc"
    >
      <!-- Backdrop -->
      <div
        class="absolute inset-0 bg-black/70"
        @click="handleBackdrop"
      ></div>

      <!-- Panel / Fullscreen Content -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 translate-y-4 scale-95"
        enter-to-class="opacity-100 translate-y-0 scale-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0 scale-100"
        leave-to-class="opacity-0 translate-y-4 scale-95"
      >
        <div
          v-show="modelValue"
          :class="panelClass"
          ref="panel"
          tabindex="-1"
        >
          <!-- Close button -->
          <button
            v-if="showClose"
            class="absolute top-4 right-4 inline-flex items-center justify-center rounded-full w-9 h-9 bg-white/10 hover:bg-white/20 text-white focus:outline-none focus:ring focus:ring-white/40"
            @click="close"
            aria-label="Close"
          >
            ✕
          </button>

          <!-- Optional header -->
          <div v-if="title" class="px-6 pt-6 pb-3">
            <h2 class="text-xl font-semibold text-white">{{ title }}</h2>
          </div>

          <!-- Content slot -->
          <div :class="contentClass">
            <slot />
          </div>
        </div>
      </transition>
    </div>
  </teleport>
</template>

<script>
export default {
  name: "Modal",
  props: {
    modelValue: { type: Boolean, required: true },     // v-model
    title: { type: String, default: "" },
    fullscreen: { type: Boolean, default: false },     // full overlay content
    maxWidth: { type: String, default: "max-w-3xl" },  // for panel mode
    showClose: { type: Boolean, default: true },
    closeOnBackdrop: { type: Boolean, default: true },
    closeOnEsc: { type: Boolean, default: true },
    padded: { type: Boolean, default: true },
  },
  emits: ["update:modelValue"],
  computed: {
    panelClass() {
      if (this.fullscreen) {
        return [
          "relative m-0 w-full h-full",
          "bg-black flex flex-col items-center justify-center",
        ].join(" ");
      }
      return [
        "relative mx-auto my-10 w-full", this.maxWidth,
        "bg-white rounded-2xl shadow-xl",
        "border border-black/5",
      ].join(" ");
    },
    contentClass() {
      if (this.fullscreen) {
        return "w-full h-full p-0";
      }
      return this.padded ? "px-6 pb-6" : "";
    },
  },
  watch: {
    modelValue(val) {
      // lock page scroll when open
      document.documentElement.classList.toggle("overflow-hidden", val);
      document.body.classList.toggle("overflow-hidden", val);
      if (val) this.$nextTick(() => this.$refs.panel?.focus());
    },
  },
  mounted() {
    if (this.modelValue) {
      document.documentElement.classList.add("overflow-hidden");
      document.body.classList.add("overflow-hidden");
    }
    window.addEventListener("keydown", this.onKeydown);
  },
  beforeUnmount() {
    document.documentElement.classList.remove("overflow-hidden");
    document.body.classList.remove("overflow-hidden");
    window.removeEventListener("keydown", this.onKeydown);
  },
  methods: {
    close() {
      this.$emit("update:modelValue", false);
    },
    handleBackdrop() {
      if (this.closeOnBackdrop) this.close();
    },
    handleCloseOnEsc() {
      if (this.closeOnEsc) this.close();
    },
    onKeydown(e) {
      if (e.key === "Escape" && this.modelValue && this.closeOnEsc) {
        e.preventDefault();
        this.close();
      }
    },
  },
};
</script>
