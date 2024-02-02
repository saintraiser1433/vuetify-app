<template>
  <v-card flat>
    <v-row justify="space-between" align="center">
      <v-col cols="auto">
        <TextPanel />
      </v-col>
      <v-col cols="auto">
        <Popup :title="title" :btnTitle="title">
          <ResidentModal />
        </Popup>
      </v-col>
    </v-row>
    <v-card-title class="d-flex align-center pe-2">
      <v-text-field v-model="search" prepend-inner-icon="mdi-magnify" density="compact" label="Search" single-line flat
        hide-details variant="solo-filled"></v-text-field>
    </v-card-title>

    <v-divider></v-divider>
    <v-data-table v-model:search="search" :items="items">

    </v-data-table>
  </v-card>
</template>

<script>
import Popup from '../components/Popup.vue'
import ResidentModal from '../components/Residents/ResidentModal'
import TextPanel from '@/components/TextPanel.vue';
import { ref, defineComponent } from 'vue';
// Components

export default defineComponent({
  name: 'ResidentVue',
  components: {
    Popup,
    ResidentModal,
    TextPanel
  },
  data() {
    return {
      search: '',
      items: [
        {
          residentID: 'Nebula GTX 3080',
          fullName: '1.png',
          price: 699.99,
          rating: 5,
          stock: true,
        },
        {
          name: 'Galaxy RTX 3080',
          image: '2.png',
          price: 799.99,
          rating: 4,
          stock: false,
        },
        {
          name: 'Orion RX 6800 XT',
          image: '3.png',
          price: 649.99,
          rating: 3,
          stock: true,
        },
        {
          name: 'Vortex RTX 3090',
          image: '4.png',
          price: 1499.99,
          rating: 4,
          stock: true,
        },
        {
          name: 'Cosmos GTX 1660 Super',
          image: '5.png',
          price: 299.99,
          rating: 4,
          stock: false,
        },
      ],
    }
  },
  setup() {
    const title = ref('Insert Residents');

    return {
      title
    }
  }
});
</script>
