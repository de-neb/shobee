<template>
    <v-snackbar-queue
        vertical
        closable
        timer="white"
        transition="slide-x-transition"
        theme="primary"
        content-class="d-flex flex-nowrap"
        v-model="snackbar.messages"
        :timeout="snackbar.duration"
        :color="snackbar.color"
        :location="xs ? 'bottom' : 'top right'"
    >


    </v-snackbar-queue>
</template>

<script setup lang="ts">
import { useSnackbarStore } from '@/stores/snackbar';
import { useDisplay } from 'vuetify';

const snackbar = useSnackbarStore()

const { xs } = useDisplay()

</script>

<style scoped></style>