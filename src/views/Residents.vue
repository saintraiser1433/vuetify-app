<template>
  <SnackBar :text="messageSnack" :status="statustype" v-model="snackBackOpen" />
  <v-card flat>
    <v-row justify="space-between" align="center">
      <v-col cols="auto">
        <TextPanel />
      </v-col>
      <v-col cols="auto">
        <Popup :title="title" :btnTitle="title" v-model="isActive">
          <template v-slot:body>
            <v-form @submit.prevent="submitForm">
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">Resident ID</div>
                  <v-text-field density="compact" v-model="resident_id" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">First Name</div>
                  <v-text-field density="compact" v-model="fname" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">Middle Name</div>
                  <v-text-field density="compact" v-model="mname" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">Last Name</div>
                  <v-text-field density="compact" v-model="lname" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">Suffix</div>
                  <v-text-field density="compact" v-model="suffix" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">Birth Date</div>
                  <v-text-field type="date" density="compact" v-model="bdate" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">Age</div>
                  <v-text-field density="compact" v-model="age" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">Sex</div>
                  <v-text-field density="compact" v-model="sex" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">Religion</div>
                  <v-text-field density="compact" v-model="religion" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">Citizenship</div>
                  <v-text-field density="compact" v-model="citizenship" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">Occupation</div>
                  <v-text-field density="compact" v-model="occupation" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">Contact No.</div>
                  <v-text-field density="compact" v-model="cont_no" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">Marital Status</div>
                  <v-text-field density="compact" v-model="status" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">Purok</div>
                  <v-text-field density="compact" v-model="purok" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">Address</div>
                  <v-text-field density="compact" v-model="address" variant="outlined"></v-text-field>
                </v-col>
              </v-row>
              <v-card-actions class="justify-end">
                <v-btn class="bg-pink" @click="closePopup">Close</v-btn>
                <v-btn type="submit" class="bg-primary">Submit</v-btn>
              </v-card-actions>
            </v-form>
          </template>
        </Popup>
      </v-col>
    </v-row>
    <Suspense>
      <template #default>
        <ResidentTable :items="items" :headers="headers">
          <template v-slot:[`item.fullname`]="{ item }">
            <span>{{ item.lname }} {{ item.fname }} {{ item.mname[0] }}.</span>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon class="me-2 bg-yellow-darken-4 rounded-circle" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon class="bg-red-darken-2 rounded-circle" @click="deleteItem(item.resident_id)">
              mdi-delete
            </v-icon>
          </template>
        </ResidentTable>
      </template>
      <template #fallback>
        <p>Loading</p>
      </template>
    </Suspense>

  </v-card>
</template>

<script>
import Popup from '@/components/Popup.vue'
import TextPanel from '@/components/TextPanel.vue';
import Swal from 'sweetalert2'
import SnackBar from '@/components/Snackbar.vue'
import { ref, reactive, defineComponent, defineAsyncComponent, toRefs, onMounted, watchEffect } from 'vue';
import HttpService from '../services/http'
// Components
const ResidentTable = defineAsyncComponent({
  loader: () => import('../components/Table.vue')
})



export default defineComponent({
  name: 'ResidentVue',
  components: {
    Popup,
    ResidentTable,
    TextPanel,
    SnackBar
  },
  setup() {

    //Initialize variables
    const title = ref('Insert Residents')
    const isActive = ref(false)
    const search = ref('')
    const items = ref([])
    const error = ref(null)
    const isUpdate = ref(false);
    const messageSnack = ref('')
    const statustype = ref(null)
    const snackBackOpen = ref(false)

    const headers = ref([
      { title: 'Resident ID', align: 'start', key: 'resident_id', sortable: true },
      { title: 'Full Name', align: 'start', key: 'fullname', sortable: true },
      { title: 'Sex', align: 'start', key: 'sex', sortable: true },
      { title: 'Occupation', align: 'start', key: 'occupation', sortable: true },
      { title: 'Phone', align: 'start', key: 'cont_no', sortable: true },
      { title: 'Actions', align: 'start', key: 'actions', sortable: false },
    ])


    const residentForm = reactive({
      resident_id: '',
      fname: '',
      mname: '',
      lname: '',
      suffix: '',
      bdate: '',
      age: '',
      sex: '',
      religion: '',
      citizenship: '',
      occupation: '',
      cont_no: '',
      status: '',
      purok: '',
      address: ''
    })



    //http
    async function getResident() {
      await HttpService.fetchData('/getResident?action=GET').then((response) => {
        items.value = response.data
      }).catch((e) => {
        error.value = e.message
      });
    }

    async function addResident() {
      await HttpService.addData('/getResident?action=POST', residentForm).then((response) => {
        messageSnack.value = response.data.message
        statustype.value = "success";
        snackBackOpen.value = true
        items.value.push({ ...residentForm })
        isUpdate.value = false
        isActive.value = false;
      }).catch((e) => {
        statustype.value = "error";
        messageSnack.value = e.message
      });
    }

    async function editResident() {
      await HttpService.updateData('/getResident?action=PUT', residentForm).then((response) => {
        messageSnack.value = response.data.message
        statustype.value = "success";
        snackBackOpen.value = true
        const findIndex = items.value.findIndex((res) => res.resident_id === residentForm.resident_id)
        items.value[findIndex] = { ...residentForm }
        isUpdate.value = false
        isActive.value = false;
      }).catch((e) => {
        statustype.value = "error";
        messageSnack.value = e.message
      });
    }

    async function deleteResident(id) {
      await HttpService.deleteData('/getResident?action=DELETE', id).then((response) => {
        messageSnack.value = response.data.message
        statustype.value = 'dasdas';
        snackBackOpen.value = true
        items.value = items.value.filter(res => res.resident_id !== `${id}`);
      }).catch((e) => {
        statustype.value = "error";
        messageSnack.value = e.message
      });
    }


    //methods

    const closePopup = () => {
      isActive.value = false;
    };
    const submitForm = () => {
      if (isUpdate.value === true) {
        editResident()
      } else {
        addResident()
      }
    }

    function editItem(val) {
      Object.assign(residentForm, val)
      isUpdate.value = true
      isActive.value = true
    }

    function deleteItem(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to delete this data?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          deleteResident(id)
        }
      });
    }





    //computed


    //watchers
    watchEffect(() => {

    })

    //lifecyclehooks
    onMounted(() => {
      getResident()
    })

    return {
      title,
      isActive,
      submitForm,
      closePopup,
      search,
      items,
      messageSnack,
      statustype,
      snackBackOpen,
      editItem,
      deleteItem,
      headers,
      ...toRefs(residentForm)
    }
  },
});
</script>
