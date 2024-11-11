<template>
    <v-container class="h-100 w-100">
        <v-empty-state
            title="Thank you for your order!"
            text="We will email you, your order details and tracking information."
            action-text="Continue Shopping"
            @click:action="navigationHelper.to('home')"
        ><template #media>
                <v-img src="@/assets/empty-bag.png"></v-img>
            </template></v-empty-state>
    </v-container>
</template>

<script setup lang="ts">
import navigationHelper from '@/helpers/navigationHelper'
</script>

<style scoped></style>