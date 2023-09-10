<template>
  <div>
    <a
      :href="href"
      class="px-3 py-2 rounded border-2 border-red-600 bg-red-600 hover:bg-red-700 hover:border-red-700 text-white transition-colors"
      target="_"
    >
      <slot></slot>
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>

<style lang="scss" scoped></style>
