<script setup lang="ts">
const props = withDefaults(defineProps(), { as: "div" });
</script>

<template>
  <div
    :class="`bg-gray-100 p-6 rounded-lg shadow-md ${props.class}`"
    v-bind="props"
  >
    <slot />
  </div>
</template>
