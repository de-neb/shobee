<template>
  <v-layout class="bg-shopping">
    <AppBar background="bg-primary" />
  </v-layout>
  <v-main class="d-flex h-100 w-100" v-scroll="app.onScroll">
    <router-view></router-view>
  </v-main>
  <Snackbar />
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app';

const app = useAppStore()
</script>

<style>
.bg-shopping {
  background: url('../assets/shopping-cart-bg.jpg');
  background-size: cover;
  height: 100vh;
}

.bg-transparent {
  background-color: transparent !important;
}
</style>
