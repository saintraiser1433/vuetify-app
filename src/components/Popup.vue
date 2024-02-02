<template>
    <v-dialog persistent width="1024">
        <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props">
                <v-icon left class="mr-2">mdi-account-plus</v-icon>
                {{ btnTitle }}
            </v-btn>
        </template>
        <template v-slot:default="{ isActive }">
            <v-card>
                <v-toolbar color="primary">
                    <v-toolbar-title class="text-uppercase">{{ title }}</v-toolbar-title>
                </v-toolbar>
                <v-container>
                    <v-row>
                        <slot></slot>

                    </v-row>
                </v-container>
                <v-card-actions class="justify-end">
                    <v-btn variant="text" @click="isActive.value = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<script>

export default {
    name: 'PopupView',
    props: {
        title: {
            type:String,
            default:''
        },
        btnTitle: {
            type:String,
            default:''
        },
    },

}
</script>

<style scoped></style>