<template>
  <v-navigation-drawer
      v-model="drawer"
      temporary
      location="right"
      theme="dark"
    >
      <v-list density="compact">
        <v-list-group v-model="item.active" v-for="item in menuItems" :key="item.title">
          <template v-slot:activator="{ props }">
            <v-list-item
              :key="item.title"
              v-bind="props"
              :title="item.title"
            ></v-list-item>
          </template>

          <v-list-item
            v-for="subMenu in item.subMenuItems"
            :key="subMenu"
            :title="subMenu"
          ></v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
</template>



<script setup>
  import { ref } from 'vue'
  const menuItems = ref([
    {
      title: 'Menu Item 1',
      active: false,
      subMenuItems: ['Sub Menu Item 1', 'Sub Menu Item 2', 'Sub Menu Item 3'],
    },
    {
      title: 'Menu Item 2',
      active: false,
      subMenuItems: ['Sub Menu Item 1', 'Sub Menu Item 2', 'Sub Menu Item 3'],
    },
    {
      title: 'Menu Item 3',
      active: false,
      subMenuItems: ['Sub Menu Item 1', 'Sub Menu Item 2', 'Sub Menu Item 3'],
    },
  ])
  const drawer = ref(true)
</script>