<script setup>
import TheNavBar from "./components/TheNavBar.vue"
import {RouterView} from "vue-router"
</script>

<template>
  <main>
    <TheNavBar />
    <RouterView />
  </main>
</template>