<template>
    <v-navigation-drawer temporary color="blue-grey-darken-3" :width="300">
        <v-list-item prepend-avatar="/images/polomolok.png">
            <v-list-item-title class="text-grey-lighten-3">
                <span class="text-teal-darken-1 font-weight-bold fontSmall">TEST</span>
                <span class="fontSmall"> High School</span>
            </v-list-item-title>
            <v-list-item-subtitle class="text-grey-lighten-5 fontSmallSubtitle">
                Advance Borrowing System V1.0
            </v-list-item-subtitle>
        </v-list-item>
        <v-divider></v-divider>
        <v-list density="compact">
            <div v-for="data in item" :key="data.title">
                <v-list-group v-if="data.items" no-action class="compact font-weight-bold"
                    :value="data.title">
                    <template v-slot:activator="{ props }">
                        <v-list-item :key="data.title" v-bind="props" :title="data.title">
                            <template #prepend>
                                <v-icon color="text-grey">{{ data.icon }}</v-icon>
                            </template>
                        </v-list-item>

                    </template>
                    <v-list-item v-for="sub in data.items" :key="sub.title" :title="sub.title" >
                    </v-list-item>
                </v-list-group>

            </div>
        </v-list>
    </v-navigation-drawer>
</template>



<script setup>
import { ref } from 'vue';
const item = ref([
    {
        icon: 'mdi-monitor-dashboard',
        title: 'Dashboard',
        path: '/'
    },
    {
        icon: 'mdi-account-multiple',
        title: 'Student',
        path: '/student',
        items: [
            {
                title: 'Course',
                path: '/course',
            },
            {
                title: 'Department',
                path: '/department',
            }
        ]
    },
    {
        icon: 'mdi-package-variant',
        title: 'Inventory',
        path: '/inventory',
        items: [
            {
                title: 'Category',
                path: '/category',
            }
        ]
    },
    {
        icon: 'mdi-keyboard-return',
        title: 'Returned',
        path: '/returned'
    },
    {
        icon: 'mdi-source-branch',
        title: 'Transactions',
        path: '/transaction'
    },
    {
        icon: 'mdi-file-chart',
        title: 'Reports',
        path: '/report'
    },

])

// const openSub = (val) => {
//     open.value.push(val);
// }


</script>

<style scoped>
.fontSmall {
    font-size: 14px;
}

.fontSmallSubtitle {
    font-size: 12px;
}

/* :deep(.v-list-group__items){
    height: unset !important;
} */
</style>