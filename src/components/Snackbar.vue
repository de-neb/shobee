<template>
    <v-snackbar-queue
        vertical
        closable
        location="top right"
        timer="white"
        transition="slide-x-transition"
        theme="primary"
        content-class="d-flex flex-nowrap"
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