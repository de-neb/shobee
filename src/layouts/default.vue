<template>
  <v-layout class="bg-shopping">
    <AppBar />
  </v-layout>
  <v-main class="d-flex h-100 w-100">
    <router-view></router-view>
  </v-main>
  <Snackbar />
</template>

<script lang="ts" setup>

//
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
