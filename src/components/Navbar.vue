<template>
    <nav>
        <Sidebar v-model="drawer" />
        <v-app-bar app flat density="compact" @click="drawer = !drawer">
            <template v-slot:prepend>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </template>
            <v-spacer></v-spacer>
            <!--  -->
            <v-menu transition="scale-transition">

                <template v-slot:activator="{ props }">
                    <div class="text-center">
                        <v-btn color="dark" v-bind="props">
                            <template v-slot:prepend>
                                <v-avatar image="https://cdn-icons-png.flaticon.com/512/2552/2552801.png"
                                    size="x-small"></v-avatar>
                            </template>
                            Administrator
                            <template v-slot:append>
                                <v-icon color="dark font-weight-bold" size="large">mdi-chevron-down</v-icon>
                            </template>
                        </v-btn>
                    </div>
                </template>

                <v-list>

                    <v-list-item class="compact font-weight-bold" v-for="i in menu" :key="i.title" link>
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
            </v-menu>
        </v-app-bar>
    </nav>
</template>

<script>
import Sidebar from './Sidebar.vue';
import { ref } from 'vue';
export default {
    name: 'NavbarView',
    components: {
        Sidebar
    },
    setup() {
        const drawer = ref(true);
        const menu = ref([
            {
                icon: 'mdi-cogs',
                title: 'Settings'
            },
            {
                icon: 'mdi-arrow-right',
                title: 'Logout'
            }
        ]);
        return {
            drawer,
            menu
        }
    }

}
</script>

<style scoped></style>