<template>
  <div>
    <h1>Home page</h1>
    <h3 class="text-blue-900">{{ mealsList }}</h3>
  </div>
</template>

<script setup>
import { computed } from "vue";
import store from "../store";

const mealsList = computed(() => store.state.meals);
</script>

<style lang="scss" scoped></style>
