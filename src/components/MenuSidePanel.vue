<template>
    <v-navigation-drawer
        temporary
        persistent
        location="left"
        height="100%"
        order="1"
        width="450"
        v-model="appStore.isMenuSidePanelOpen"
    >

        <v-container
            fluid
            class="d-flex flex-column ga-3 h-100"
        >
            <v-row
                no-gutters
                class="v-col-auto justify-space-between pa-0"
            >
                <v-col>
                    <v-img
                        max-width="130"
                        class="cursor-pointer"
                        contain
                        src="../assets/logo.png"
                        @click="navigationHelper.to('home')"
                    >
                    </v-img>
                </v-col>

                <v-col cols="auto">
                    <v-btn
                        icon="mdi-close"
                        variant="text"
                        @click="appStore.isMenuSidePanelOpen = false"
                    ></v-btn>
                </v-col>
            </v-row>

            <v-form
                class="v-col-auto justify-center pa-0"
                @submit.prevent="onSearch"
            >

                <v-text-field
                    hide-details
                    class="v-col-12 rounded-lg pa-0"
                    density="comfortable"
                    variant="outlined"
                    prepend-inner-icon="mdi-magnify"
                    placeholder="Search a product"
                    v-model="searchItem"
                    @click:prependInner="onSearch"
                >
                </v-text-field>
            </v-form>

            <v-row
                no-gutters
                class="v-col-auto flex-column my-5 pa-0"
            >
                <v-col cols="auto">
                    <v-menu open-on-hover>
                        <template #activator="{ props }">
                            <v-btn
                                block
                                height="100%"
                                value="one"
                                variant="tonal"
                                class="pa-3"
                                v-bind="props"
                            >Categories <v-icon icon="mdi-chevron-down"></v-icon></v-btn>
                        </template>

                        <v-list>
                            <v-list-item
                                class="px-3"
                                v-for="category in homeStore.categories"
                                :key="category.id"
                                :value="category.id"
                                :to="`/category/${category.id}`"
                            >
                                <v-list-item-title class="text-capitalize">
                                    {{ category.name }}
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-col>

                <v-col cols="auto">
                    <v-btn
                        block
                        height="100%"
                        value="two"
                        tag="a"
                        variant="tonal"
                        class="pa-3"
                        @click="navigationHelper.to('Home', { hash: '#topProducts' })"
                    >
                        Top Products </v-btn>
                </v-col>

                <v-col cols="auto">
                    <v-btn
                        block
                        height="100%"
                        value="two"
                        tag="a"
                        variant="tonal"
                        class="pa-3"
                        @click="navigationHelper.to('Home', { hash: '#dailyDiscover' })"
                    >
                        Daily Discover
                    </v-btn>
                </v-col>
            </v-row>

            <v-spacer></v-spacer>

            <v-row
                no-gutters
                class="v-col-auto"
            >
                <v-col>
                    <v-btn
                        block
                        variant="text"
                        prepend-icon="mdi-filter"
                        @click="appStore.toggleFilterSidePanel(); appStore.toggleMenuSidePanel()"
                    >Filter</v-btn>
                </v-col>

            </v-row>
        </v-container>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useHomeStore } from '@/modules/home/config/store';
import { useAppStore } from '@/stores/app';
import navigationHelper from '@/helpers/navigationHelper';

defineProps({
    background: {
        type: String,
        default: 'bg-transparent'
    }
})

const homeStore = useHomeStore()
const appStore = useAppStore()

const searchItem = ref("")
const onSearch = async () => {
    if (searchItem.value && searchItem.value.length < 4) {
        return
    }

    navigationHelper.to('search', { query: { title: searchItem.value } })
}

</script>
