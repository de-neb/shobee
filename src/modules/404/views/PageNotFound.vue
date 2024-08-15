<template>
    <v-empty-state
        title="This page doesn't exist."
        image="/src/assets/404.png"
        action-text="Go back to Home"
        @click:action="navigationHelper.to('home')"
    ></v-empty-state>
</template>

<script setup lang="ts">
import navigationHelper from '@/helpers/navigationHelper'
</script>