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
    <div
      v-if="meals && !loading"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-16"
    >
      <div
        v-for="(meal, index) of meals"
        :key="index"
        class="bg-white shadow rounded-b-md"
      >
        <div>
          <router-link
            :to="{ name: 'mealsDetails', params: { id: meal.idMeal } }"
          >
            <img
              :src="meal.strMealThumb"
              :alt="meal.strMeal"
              class="w-full h-64 object-cover"
            />
          </router-link>
          <div class="p-3">
            <h3 class="font-bold">
              {{ meal.strMeal }}
            </h3>
            <p class="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur deserunt atque quo iure ipsum dolorem unde incidunt ad
              autem fugit vitae voluptates repellendus harum perferendis nam,
              numquam aliquam cumque consequatur.
            </p>
            <div class="mb-4 flex justify-between items-center">
              <YouTubeButton :href="meal.strYoutube">Youtube</YouTubeButton>
            </div>
          </div>
        </div>
      </div>
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
import YouTubeButton from "../components/YouTubeButton.vue";
import loader from "./Loader.vue";

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
