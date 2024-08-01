<template>
    <v-container class="h-100">
        <v-row>
            <BreadCrumb />
        </v-row>

        <v-row>
            <v-list>
                <v-list-subheader>REPORTS</v-list-subheader>

                <template>
                    <v-list-item
                        v-for="(item, i) in 10"
                        :key="i"
                        :value="item"
                        color="primary"
                    >
                        <template v-slot:prepend>
                            <v-icon :icon="item.icon"></v-icon>
                        </template>

                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item>

                    <v-divider></v-divider>
                </template>
            </v-list>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">

</script>

<style scoped></style>