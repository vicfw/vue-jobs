<script setup lang="ts">
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";

const { id, title, type, description, salary, location } = defineProps<{
  id: number;
  title: string;
  type: string;
  description: string;
  salary: string;
  location: string;
}>();

const showFullDescription = ref(false);

const toggleDescription = () => {
  showFullDescription.value = !showFullDescription.value;
};
const descriptionToDisplay = computed(() => {
  return showFullDescription.value
    ? description
    : description.slice(0, 90) + "...";
});
</script>

<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 my-2">{{ type }}</div>
        <h3 class="text-xl font-bold">{{ title }}</h3>
      </div>

      <div class="mb-5">
        <div>{{ descriptionToDisplay }}</div>
        <button
          @click="toggleDescription"
          class="text-green-500 hover:text-green-600 mb-5"
        >
          {{ showFullDescription ? "Less" : "More" }}
        </button>
      </div>

      <h3 class="text-green-500 mb-2">{{ salary }} / Year</h3>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-orange-700 mb-3">
          <i class="pi pi-map-marker text-orange-700"></i>
          {{ location }}
        </div>
        <RouterLink
          :to="'/jobs/' + id"
          class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </RouterLink>
      </div>
    </div>
  </div>
</template>
