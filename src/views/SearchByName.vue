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
      <div v-if="meals && !loading">
        <MealItem :meals="meals"></MealItem>
      </div>
      <div v-else class="flex justify-center mt-48">
        <div v-if="loading">
          <loader></loader>
        </div>
        <div v-else>
          <h3 class="text-xl font-semibold">Data not found.</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import loader from "./Loader.vue";
import MealItem from "./MealItem.vue";

const keyword = ref("");
const route = useRoute();
const loading = ref(false);

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) searchMeal();
});

const meals = computed(() => store.state.searchMealsData);
function searchMeal() {
  loading.value = true;

  store
    .dispatch("searchMeals", keyword.value)
    .then(() => {
      setTimeout(() => {
        loading.value = false;
      }, 400);
    })
    .catch(() => {
      loading.value = false;
    });
}
</script>

<style lang="scss" scoped></style>
