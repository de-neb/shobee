<template>
    <v-snackbar vertical timer v-model="snack.show" :timeout="snack.duration">
        <div class="text-subtitle-1 pb-2">{{ snack.message }}</div>
        <template v-slot:actions>
            <v-btn color="indigo" variant="text" @click="snack.show = false">
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script setup lang="ts">
import { useSnackbar } from '@/stores/snackbar';

const snack = useSnackbar()

</script>

<style scoped></style>