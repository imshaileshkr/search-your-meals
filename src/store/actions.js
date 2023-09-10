import axiosClient from "../request";

export function searchMeals({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit("setSearchedMeals", data.meals);
  });
}

export function getMealsDetails({ commit }, mealId) {
  axiosClient.get(`lookup.php?i=${mealId}`).then(({ data }) => {
    commit("setMealDetails", data.meals[0] ? data.meals[0] : {});
  });
}

export function fetchMealsByLetter({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
    commit("setMealsByLetter", data.meals);
  });
}
