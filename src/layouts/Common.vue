<template>
    <v-app height="100%">
        <AppBar background="bg-secondary" />
        <v-main class="d-flex justify-center w-100 pt-0">
            <router-view></router-view>
        </v-main>
        <AppFooter />
    </v-app>
    <CartSidePanel ref="cartSidePanel" />
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
