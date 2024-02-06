<template>
    <v-list class="w-auto">
      <v-list-item prepend-icon="mdi-human-child">
        <v-list-item-title>
          <h4>{{ $route.meta.title }}</h4>
        </v-list-item-title>
        <v-list-item-subtitle class="text-capitalize">
          {{ $route.meta.subtitle }}
        </v-list-item-subtitle>
        
      </v-list-item>
    </v-list>
</template>



<style scoped></style>