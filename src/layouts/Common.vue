<template>
    <v-layout height="100%">
        <AppBar background="bg-secondary" />
        <v-main class="d-flex align-center justify-center h-100 w-100">
            <router-view></router-view>
        </v-main>
    </v-layout>
    <Snackbar />
</template>

<script lang="ts" setup>

//
</script>

<style>
.bg-shopping {
    background: url('../assets/shopping-cart-bg.jpg');
    background-size: cover;
    height: 100px;
}
</style>
