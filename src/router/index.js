import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SearchByName from "../views/SearchByName.vue";
import SearchByLetter from "../views/SearchByLetter.vue";
import SearchByIngredients from "../views/SearchByIngredients.vue";
import defaultLayout from "../components/DefaultLayout.vue";
import MealsDetails from "../views/MealsDetails.vue";
const routes = [
  {
    path: "/",
    component: defaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLatter",
        component: SearchByLetter,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: SearchByName,
      },
      {
        path: "/by-ingredients/:ingredients?",
        name: "byIngredients",
        component: SearchByIngredients,
      },
      {
        path: "/meal/:id?",
        name: "mealsDetails",
        component: MealsDetails,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
