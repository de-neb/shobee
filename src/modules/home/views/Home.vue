<template>

    <v-container class="my-10 d-flex flex-column ga-10">
        <TopProducts id="topProducts" />

        <v-row id="dailyDiscover">
            <v-col cols="12">
                <h2>Daily Discover</h2>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import TopProducts from '../components/TopProducts.vue';

</script>

<style scoped></style>