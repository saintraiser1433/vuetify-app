<template>
    <v-card-title class="d-flex align-center pe-2">
        <v-text-field v-model="search" prepend-inner-icon="mdi-magnify" density="compact" label="Search" single-line flat
            hide-details variant="solo-filled"></v-text-field>
    </v-card-title>

    <v-divider></v-divider>

    <v-data-table v-model:search="search" height="500" :items="items" :headers="headers">
        <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
            <slot :name="slot" v-bind="scope" />
        </template>
    </v-data-table>
</template>

   <!-- <template v-slot:item="{ item }">
            <slot :item="item"></slot>
        </template> -->
<!-- <template v-slot:[`item.actions`]="{ item }">
    <v-icon size="small" class="me-2" @click="edit(item)">
        mdi-pencil
    </v-icon>
    <v-icon size="small" @click="deleteItem(item)">
        mdi-delete
    </v-icon>
</template> -->

<script>
import { ref } from 'vue'
export default {
    name: 'TableView',
    props: {
        items: Object,
        headers: Object
    },
    setup(props, { emit }) {
        const search = ref('')
        function edit(val) {
            emit('emitEdit', val)
        }
        return {
            search,
            edit
        }


    }

}
</script>

<style scoped></style>