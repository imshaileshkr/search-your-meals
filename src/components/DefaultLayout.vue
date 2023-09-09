<template>
  <div class="bg-gray-100 h-full">
    <navbar></navbar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import navbar from "./Navbar.vue";
</script>

<style lang="scss" scoped></style>
