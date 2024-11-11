<template>
    <v-empty-state
        title="This page doesn't exist."
        action-text="Go back to Home"
        @click:action="navigationHelper.to('home')"
    >
        <template #media>
            <v-img src="@/assets/404.png"></v-img>
        </template>
    </v-empty-state>
</template>

<script setup lang="ts">
import navigationHelper from '@/helpers/navigationHelper'
</script>