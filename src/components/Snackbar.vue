<template>
    <v-snackbar vertical timer v-if="snackbar.show" :timeout="snackbar.duration">
        <div class="text-subtitle-1 pb-2">{{ snackbar.message }}</div>
        <template v-slot:actions>
            <v-btn color="indigo" variant="text" @click="snackbar.show = false">
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script setup lang="ts">
import { useSnackbar } from '@/stores/snackbar';

const snackbar = useSnackbar()

</script>

<style scoped></style>