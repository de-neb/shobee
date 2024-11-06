<template>
    <v-app height="100%">
        <AppBar background="bg-secondary" />
        <v-main
            class="d-flex justify-center w-100 pt-0"
            :min-height="routeHasFooter ? 900 : ''"
        >
            <router-view></router-view>
        </v-main>
        <AppFooter v-if="routeHasFooter" />
    </v-app>
    <MenuSidePanel />
    <CartSidePanel ref="cartSidePanel" />
    <Snackbar />
</template>

<script lang="ts" setup>
import router from '@/router';

const routeHasFooter = router.currentRoute.value.meta.showFooter
</script>

<style>
.bg-shopping {
    background: url('../assets/shopping-cart-bg.jpg');
    background-size: cover;
    height: 100px;
}
</style>
