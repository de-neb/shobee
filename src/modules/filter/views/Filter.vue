<template>
    <v-sheet
        height="100%"
        width="100%"
        class="mx-10"
    >
        <FilterSidePanel />

        <FilterResults />
    </v-sheet>
</template>

<script setup lang="ts">
import FilterSidePanel from '../components/FilterSidePanel.vue';
import FilterResults from '../components/FilterResults.vue';


</script>

<style scoped></style>