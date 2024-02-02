<template>
  <v-app class="bg-grey-lighten-4">
    <Navbar />
    <v-main class="my-4 mx-4">
      <v-card class="mx-auto w-100 h-100" elevation="3">
        <v-card-text>
          <router-view />
        </v-card-text>



      </v-card>

    </v-main>
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
  setup() {


  }

}
</script>
