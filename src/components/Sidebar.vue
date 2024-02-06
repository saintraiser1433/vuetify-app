<template>
    <v-navigation-drawer color="blue-grey-darken-3" app :width="300">
        <v-list-item prepend-avatar="/images/polomolok.png">
            <v-list-item-title class="text-grey-lighten-3">
                <span class="text-teal-darken-1 font-weight-bold">ePRO</span>
                <span>FILING</span>
            </v-list-item-title>
            <v-list-item-subtitle class="text-grey-lighten-5">
                Advanced Profiling System V1.0
            </v-list-item-subtitle>
        </v-list-item>
        <v-divider></v-divider>
        <v-list>
            <v-list-item class="compact font-weight-bold" link v-for="i in items" :key="i.title" :to="i.path">
                <template #prepend>
                    <v-icon color="text-grey">{{ i.icon }}</v-icon>
                </template>
                <v-list-item-title>{{ i.title }}</v-list-item-title>
            </v-list-item>
        </v-list>

    </v-navigation-drawer>
</template>

<script setup>
import { SideBarItem } from '@/constants/sidebar';
import { ref } from 'vue';

const items = ref(SideBarItem);

</script>

<style scoped></style>