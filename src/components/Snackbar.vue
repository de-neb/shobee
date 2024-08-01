<template>
    <v-snackbar-queue
        vertical
        location="top right"
        timer="white"
        transition="slide-x-transition"
        v-model="snackbar.messages"
        :timeout="snackbar.duration"
        :color="snackbar.color"
    >
    </v-snackbar-queue>
</template>

<script setup lang="ts">
import { useSnackbarStore } from '@/stores/snackbar';

const snackbar = useSnackbarStore()

</script>

<style scoped></style>