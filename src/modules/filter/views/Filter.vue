<template>
    <v-sheet
        height="100%"
        width="100%"
        class="mx-10"
    >
        <v-container>
            <p
                v-if="searchResult"
                class="text-h5 font-weight-bold"
            >Search results for: {{ searchResult }}</p>
        </v-container>

        <FilterSidePanel />

        <FilterResults />
    </v-sheet>
</template>

<script setup lang="ts">
import FilterSidePanel from '../components/FilterSidePanel.vue';
import FilterResults from '../components/FilterResults.vue';
import router from '@/router'

const searchResult = computed(() => router.currentRoute.value.query?.title)

</script>

<style scoped></style>