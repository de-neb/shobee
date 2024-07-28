<template>
    <v-navigation-drawer permanent>
        <v-list
            nav
            v-model:opened="opened"
        >
            <v-list-group value="Category">
                <template v-slot:activator="{ props }">
                    <v-list-item
                        v-bind="props"
                        title="Category"
                    ></v-list-item>
                </template>

                <!-- insert categories here -->
            </v-list-group>

            <v-divider></v-divider>

            <v-list-group value="Price">
                <template v-slot:activator="{ props }">
                    <v-list-item
                        v-bind="props"
                        title="Price"
                    ></v-list-item>
                </template>
                <h6>Price : insert price here</h6>

                <v-range-slider
                    :min="0"
                    max="1000"
                ></v-range-slider>

            </v-list-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup lang="ts">

const opened = ref(['Category', 'Price'])


</script>

<style scoped></style>