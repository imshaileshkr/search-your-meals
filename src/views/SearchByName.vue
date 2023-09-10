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
                Consectetur deserunt atque quo iure ipsum dolorem unde incidunt
                ad autem fugit vitae voluptates repellendus harum perferendis
                nam, numquam aliquam cumque consequatur.
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
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import YouTubeButton from "../components/YouTubeButton.vue";
import loader from "./Loader.vue";

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
