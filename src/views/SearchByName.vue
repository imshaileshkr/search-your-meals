<template>
  <div class="p-8">
    <input
      v-model="keyword"
      type="text"
      class="w-full"
      placeholder="Search for meals"
      @change="searchMeal"
    />
    <div>
      <pre>{{ meals }}</pre>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import store from "../store";

const keyword = ref("");
const meals = computed(() => store.state.searchMealsData);
function searchMeal() {
  store.dispatch("searchMeals", keyword.value);
}
</script>

<style lang="scss" scoped></style>
