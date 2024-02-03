<template >
  <v-app>
    <Navbar />
    <div class="bg-grey-lighten-4 h-100">
      <v-divider></v-divider>
      <v-main class="my-4 mx-4">
        <v-card class="mx-auto w-100 h-100" elevation="3" scrollable>
          <v-card-text>
            <router-view />
          </v-card-text>
        </v-card>

      </v-main>
    </div>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
// import SideBar from './components/Sidebar.vue'
export default {
  name: 'App',
  components: {
    Navbar,
  },

}
</script>

