<template>
  <div class="p-8">
    <div class="flex gap-4 justify-center my-6 text-xl">
      <router-link
        :to="{ name: 'byLatter', params: { letter } }"
        v-for="(letter, index) of letters.split('')"
        :key="index"
      >
        <span
          class="hover:underline hover:font-bold hover:text-red-600"
          @click="getMealsByLetter($event.target.innerHTML)"
          :class="route.params.letter == letter ? 'selectedLetter' : ''"
        >
          {{ letter }}
        </span>
      </router-link>
    </div>
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
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import loader from "./Loader.vue";
import MealItem from "./MealItem.vue";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWYXZ";
const alphabet = ref("");
const loading = ref(false);
const route = useRoute();
onMounted(() => {
  alphabet.value = route.params.letter;
  if (alphabet.value) getMealsByLetter(alphabet.value);
});
const meals = computed(() => store.state.mealsByLetter);
function getMealsByLetter(key) {
  loading.value = true;

  store
    .dispatch("fetchMealsByLetter", key)
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

<style lang="scss" scoped>
.selectedLetter {
  color: rgb(225, 7, 7);
  font-weight: 700;
  text-decoration: underline;
  font-size: 26px;
}
</style>
