<template>
   <v-container>
     <!-- bread crumbs -->
     <v-row justify="center">
            <v-breadcrumbs :items="breadCrumbItems">
                <template v-slot:divider>
                    <v-icon icon="mdi-chevron-right"></v-icon>
                </template>
            </v-breadcrumbs>
        </v-row>
   </v-container>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>