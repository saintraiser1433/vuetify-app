<template>
  <v-app>
    <Navbar/>
    <!-- <SideBar/> -->
    <v-main class="bg-grey-lighten-4">
      <router-view/>
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
    // SideBar
  },
  data: () => ({
    //
  }),
}
</script>
