<template>
  <div>
    <div class="flex flex-col gap-4 p-8">
      <div>
        <input type="text" class="w-full" placeholder="Search for meals" />
      </div>
      <div class="flex gap-2 justify-center">
        <router-link
          :to="{ name: 'byLatter', params: { letter } }"
          v-for="(letter, index) of letters.split('')"
          :key="index"
        >
          {{ letter }}
        </router-link>
      </div>
    </div>
    <!-- <p v-for="meal in meals" :key="meal" class="p-4">
      {{ meal }}
    </p> -->
    <!-- <pre>{{ meals }}</pre> -->
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import service from "../request";

const mealsList = computed(() => store.state.meals);
const letters = "ABCDEFGHIJKLMNOPQRSTUVWYXZ";
const meals = ref([]);

onMounted(async () => {
  const response = await service.get("/list.php?i=list");
  meals.value = response.data.meals;
});
</script>

<style lang="scss" scoped></style>
