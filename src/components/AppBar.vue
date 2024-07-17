<template>
    <v-app-bar height="100" :class="background">
        <v-toolbar height="100" class="bg-transparent">
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-menu open-on-hover>
                <template #activator="{ props }">
                    <v-btn height="100%" value="one" v-bind="props">Categories <v-icon
                            icon="mdi-chevron-down"></v-icon></v-btn>
                </template>

                <v-list>
                    <v-list-item class="px-3" v-for="category in home.categories" :key="category.id"
                        :value="category.id">
                        <v-list-item-title>
                            {{ category.name }}
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-btn height="100%" value="two" tag="a" href="#topProducts">
                Top Products
            </v-btn>

            <v-btn height="100%" value="two" tag="a" href="#dailyDiscover">
                Daily Discover
            </v-btn>

            <v-spacer></v-spacer>

            <v-toolbar-title class="text-center ml-auto">Shobee</v-toolbar-title>

            <v-spacer></v-spacer>

            <span>P1000<v-btn icon="mdi-cart"></v-btn></span>
        </v-toolbar>
    </v-app-bar>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useHomeStore } from '@/modules/home/config/store';

defineProps({
    background: {
        type: String,
        default: 'bg-transparent'
    }
})

const home = useHomeStore()

onMounted(() => {
    home.loadAllCategories()
})

</script>

<style scoped>
.bg-transparent {
    background-color: rgba(184, 229, 250, 0.0) !important;
}
</style>