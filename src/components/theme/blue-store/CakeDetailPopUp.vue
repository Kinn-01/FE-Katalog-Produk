<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="relative bg-white rounded-lg shadow-lg p-4 max-w-sm w-full mx-4">
      <button class="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-800" @click="closePopup">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <h2 class="text-lg font-bold mb-2">{{ cakeItem.name }}</h2>
      <img :src="cakeItem.image" :alt="cakeItem.name" class="w-full h-48 object-cover mb-2">
      <p class="text-gray-700">{{ cakeItem.description }}</p>
      <p class="text-gray-800 mt-2">{{ cakeItem.price }}</p>
      <div class="mt-4 grid gap-2">
        <button class="bg-sky-400 text-white py-2 px-4 rounded-lg font-semibold ">Shopee</button>
        <button class="bg-sky-400 text-white py-2 px-4 rounded-lg font-semibold ">Lazada</button>
        <button class="bg-sky-400 text-white py-2 px-4 rounded-lg font-semibold ">Tokopedia</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cakeItem: {
      type: Object,
      required: true
    }
  },
  methods: {
    closePopup() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
</style>
