<template>
    <v-snackbar :timeout="timeout" location="top right" :color="status" transition="scale-transition">
        <div class="container ga-2">
            <v-icon v-if="status == 'success'" color="white">mdi-check-circle-outline</v-icon>
            <v-icon v-else-if="status == 'info'" color="white">mdi-information-outline</v-icon>
            <v-icon v-else-if="status == 'warning'" color="white">mdi-alert-outline</v-icon>
            <v-icon v-else-if="status == 'error'" color="white">mdi-alpha-x-circle-outline</v-icon>
            {{ text }}
        </div>
    </v-snackbar>
</template>

<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';

defineProps({
    text: String,
    status: String
})

const timeout = ref(5000);

</script>

<style scoped></style>