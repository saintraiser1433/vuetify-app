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
            <v-list-item class="compact font-weight-bold" link v-for="i in item" :key="i.title" :to="i.path">

                <template #prepend>
                    <v-list-item-icon>
                        <v-icon color="text-grey">{{ i.icon }}</v-icon>
                    </v-list-item-icon>
                </template>
                <v-list-item-content>
                    <v-list-item-title class="ml-5">{{ i.title }}</v-list-item-title>
                </v-list-item-content>



            </v-list-item>
        </v-list>

    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'SidebarView',
    data() {
        return {
            item: [
                {
                    icon: 'mdi-human-child',
                    title: 'Residents',
                    subtitle:'Sample 1',
                    path: '/',
                },
                {
                    icon: 'mdi-home-city',
                    title: 'Purok',
                    subtitle:'Sample 2',
                    path: '/purok'
                },
                {
                    icon: 'mdi-police-badge',
                    title: 'Officials',
                    subtitle:'Sample 3',
                    path: '/official'
                },
                {
                    icon: 'mdi-target-account',
                    title: 'Blotter',
                    subtitle:'Sample 4',
                    path: '/blotter'
                    
                },
                {
                    icon: 'mdi-note',
                    title: 'Clearance',
                    subtitle:'Sample 5',
                    path: '/clearance'
                },
                {
                    icon: 'mdi-archive-arrow-down',
                    title: 'Archive',
                    subtitle:'Sample 6',
                    path: '/archive'
                },
                {
                    icon: 'mdi-cogs',
                    title: 'Settings',
                    subtitle:'Sample 7',
                    path: '/settings'
                },
                {
                    icon: 'mdi-account-details-outline',
                    title: 'Account Settings',
                    subtitle:'Sample 8',
                    path: '/accsettings'
                },
                {
                    icon: 'mdi-database-arrow-down',
                    title: 'Back-up Database',
                    subtitle:'Sample 9',
                    path: '/backupdb'
                }
            ]
        }
    }
}
</script>

<style scoped></style>