<template>
    <v-container>
        <v-sheet id="topProducts">
            <TopProducts />
        </v-sheet>

        <v-sheet id="dailyDiscover">
            <DailyDiscover />
        </v-sheet>
    </v-container>
</template>

<script setup lang="ts">
import TopProducts from '../components/TopProducts.vue';
import DailyDiscover from '../components/DailyDiscover.vue'
</script>

<style scoped></style>