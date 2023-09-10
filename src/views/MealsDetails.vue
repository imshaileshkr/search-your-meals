<template>
  <div class="max-w-[800px] mx-auto mt-12 px-4">
    <h1 class="text-3xl font-bold mb-4">{{ mealDetails.strMeal }}</h1>
    <img :src="mealDetails.strMealThumb" alt="" class="w[100%] mb-2" />

    <div class="grid grid-cols-1 md:grid-cols-3">
      <div><strong> Category: </strong> {{ mealDetails.strCategory }}</div>
      <div><strong> Area: </strong> {{ mealDetails.strArea }}</div>
      <div><strong> Tags: </strong> {{ mealDetails.strTags }}</div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 mt-6">
      <div>
        <h2 class="text-xl font-bold mb-3">Ingredients</h2>

        <ul>
          <template v-for="(ele, index) of new Array(20)" :key="index">
            <li v-if="mealDetails[`strIngredient${index + 1}`]">
              {{ index + 1 }}. {{ mealDetails[`strIngredient${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-xl font-bold mb-3">Measurements</h2>
        <ul>
          <template v-for="(ele, index) of new Array(20)" :key="index">
            <li v-if="mealDetails[`strMeasure${index + 1}`]">
              {{ mealDetails[`strMeasure${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="mt-6">
      <p>
        {{ mealDetails.strInstructions }}
      </p>
    </div>

    <div class="mt-8 mb-6">
      <YouTubeButton :href="mealDetails.strYoutube"
        >Go to YouTube</YouTubeButton
      >
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import YouTubeButton from "../components/YouTubeButton.vue";

const route = useRoute();
onMounted(() => {
  fetchMealDetails(route.params.id);
});
const mealDetails = computed(() => store.state.mealDetails);
function fetchMealDetails(id) {
  store.dispatch("getMealsDetails", id);
}
</script>

<style lang="scss" scoped></style>
