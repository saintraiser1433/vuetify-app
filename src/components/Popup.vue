<template>
    <v-dialog persistent transition="dialog-bottom-transition" width="1024">
        <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props" @click="openModal">
                <v-icon left class="mr-2">mdi-account-plus</v-icon>
                {{ btnName }}
            </v-btn>
        </template>
        <v-card>
            <v-toolbar color="primary">
                <v-toolbar-title class="text-uppercase">{{ title }}</v-toolbar-title>
            </v-toolbar>
            <v-container>
                <slot name="body"></slot>
            </v-container>
            <slot name="footer"></slot>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
defineProps({
    title: {
        type: String,
        default: ''
    },
    btnName: {
        type: String,
        default: ''
    },
})
const emit = defineEmits(['openModal'])

function openModal() {
    emit('openModal');
}




</script>

<style scoped></style>