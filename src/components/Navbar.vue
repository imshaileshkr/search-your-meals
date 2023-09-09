<template>
  <header class="bg-white h-16 shadow flex justify-between items-stretch">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-5"
      >HOME</router-link
    >

    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="px-4 transition-colors hover:bg-purple-100 inline-flex items-center h-full"
        >Search Meals</router-link
      >
      <router-link
        :to="{ name: 'byLatter', params: {} }"
        class="px-4 transition-colors hover:bg-purple-100 inline-flex items-center h-full"
        >Meals By Latter</router-link
      >
      <router-link
        :to="{ name: 'byIngredients', params: {} }"
        class="px-4 transition-colors hover:bg-purple-100 inline-flex items-center h-full"
        >Meals By Ingredients</router-link
      >
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
