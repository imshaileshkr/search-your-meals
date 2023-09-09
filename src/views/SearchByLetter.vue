<template>
  <div class="flex gap-2 justify-center">
    <router-link
      :to="{ name: 'byLatter', params: { letter } }"
      v-for="(letter, index) of letters.split('')"
      :key="index"
    >
      {{ letter }}
    </router-link>
  </div>
</template>

<script setup>
const letters = "ABCDEFGHIJKLMNOPQRSTUVWYXZ";
</script>

<style lang="scss" scoped></style>
