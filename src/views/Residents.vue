<template>
  <SnackBar :text="messageSnack" :status="statustype" v-model="snackBackOpen" />
  <v-card flat>
    <v-row justify="space-between" align="center">
      <v-col cols="auto">
        <TextPanel />
      </v-col>
      <v-col cols="auto">
        <Popup :title="title" btnName="Insert Resident" @openModal="changeInsertTitle" v-model="isActive">
          <template v-slot:body>
            <v-form @submit.prevent="onSubmit">
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">Resident ID</div>
                  <v-text-field density="compact" v-model="resident_id.value.value" counter="10"
                    :error-messages="resident_id.errorMessage.value" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">First Name</div>
                  <v-text-field density="compact" v-model="fname.value.value" :error-messages="fname.errorMessage.value"
                    variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">Middle Name</div>
                  <v-text-field density="compact" v-model="mname.value.value" :error-messages="mname.errorMessage.value"
                    variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">Last Name</div>
                  <v-text-field density="compact" v-model="lname.value.value" :error-messages="lname.errorMessage.value"
                    variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">Suffix</div>
                  <v-text-field density="compact" v-model="suffix.value.value" :error-messages="suffix.errorMessage.value"
                    variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">Birth Date</div>
                  <v-text-field type="date" density="compact" v-model="bdate.value.value"
                    :error-messages="bdate.errorMessage.value" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">Age</div>
                  <v-text-field type="number" density="compact" v-model="age.value.value"
                    :error-messages="age.errorMessage.value" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">Sex</div>
                  <v-select :items="genderItem" density="compact" v-model="sex.value.value"
                    :error-messages="sex.errorMessage.value" variant="outlined">
                  </v-select>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">Religion</div>
                  <v-select :items="religionItem" density="compact" v-model="religion.value.value"
                    :error-messages="religion.errorMessage.value" variant="outlined"></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">Citizenship</div>
                  <v-select :items="citizenItem" density="compact" v-model="citizenship.value.value"
                    :error-messages="citizenship.errorMessage.value" variant="outlined"></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">Occupation</div>
                  <v-text-field density="compact" v-model="occupation.value.value"
                    :error-messages="occupation.errorMessage.value" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">Contact No.</div>
                  <v-text-field type="number" density="compact" v-model="cont_no.value.value"
                    :error-messages="cont_no.errorMessage.value" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">Marital Status</div>
                  <v-select :items="statusItem" density="compact" item-text="description" item-value="id"
                    v-model="status.value.value" :error-messages="status.errorMessage.value"
                    variant="outlined"></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">Purok</div>
                  <v-text-field density="compact" v-model="purok.value.value" :error-messages="purok.errorMessage.value"
                    variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <div class="text-subtitle-1 text-medium-emphasis">Address</div>
                  <v-text-field density="compact" v-model="address.value.value"
                    :error-messages="address.errorMessage.value" variant="outlined"></v-text-field>
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
            {{ item.lname }} {{ item.fname }} {{ item.mname[0] }}
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
import { ref, defineComponent, defineAsyncComponent, onMounted, watchEffect } from 'vue';
import HttpService from '@/services/http'
import { genderSelection, religionSelection, citizenSelection, statusSelection } from '@/constants/Residents/selection'
import { tableHeaders } from '@/constants/Residents/tableHeaders'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
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
    const genderItem = ref(genderSelection)
    const religionItem = ref(religionSelection)
    const citizenItem = ref(citizenSelection)
    const statusItem = ref(statusSelection)
    const headers = ref(tableHeaders)
    const yupSchema = yup.object({
      resident_id: yup.string().required().min(10),
      fname: yup.string().required(),
      mname: yup.string().required(),
      lname: yup.string().required(),
      suffix: yup.string().required(),
      bdate: yup.date().required(),
      age: yup.number().min(3).required(),
      sex: yup.string().required(),
      cont_no: yup.number().min(3).required(),
      religion: yup.string().required(),
      citizenship: yup.string().required(),
      occupation: yup.string().required(),
      status: yup.string().required(),
      purok: yup.string().required(),
      address: yup.string().required(),
    });

    const { handleSubmit, setFieldValue } = useForm({
      validationSchema: yupSchema
    });

    const resident_id = useField('resident_id');
    const fname = useField('fname');
    const mname = useField('mname');
    const lname = useField('lname');
    const suffix = useField('suffix');
    const bdate = useField('bdate');
    const age = useField('age');
    const sex = useField('sex');
    const religion = useField('religion');
    const citizenship = useField('citizenship');
    const occupation = useField('occupation');
    const status = useField('status');
    const purok = useField('purok');
    const address = useField('address');
    const cont_no = useField('cont_no');



    // const residentForm = reactive({
    //   resident_id: '',
    //   fname: '',
    //   mname: '',
    //   lname: '',
    //   suffix: '',
    //   bdate: '',
    //   age: '',
    //   sex: '',
    //   religion: '',
    //   citizenship: '',
    //   occupation: '',
    //   cont_no: '',
    //   status: '',
    //   purok: '',
    //   address: ''
    // })



    //http
    async function getResident() {
      await HttpService.fetchData('/getResident?action=GET').then((response) => {
        items.value = response.data
      }).catch((e) => {
        error.value = e.message
      });
    }

    async function addResident(val) {
      await HttpService.addData('/getResident?action=POST', val).then((response) => {
        messageSnack.value = response.data.message
        statustype.value = "success";

        items.value.push({ ...val })
        isUpdate.value = false
        isActive.value = false;
      }).catch((e) => {
        statustype.value = "error";
        messageSnack.value = e.message
      });
      snackBackOpen.value = true
    }

    async function editResident(val) {
      await HttpService.updateData('/getResident?action=PUT', val).then((response) => {
        messageSnack.value = response.data.message
        statustype.value = "success";
        const findIndex = items.value.findIndex((res) => res.resident_id === val.resident_id)
        items.value[findIndex] = { ...val }
        isUpdate.value = false
        isActive.value = false;
      }).catch((e) => {
        statustype.value = "error"
        messageSnack.value = e.message
      });
      snackBackOpen.value = true
    }

    async function deleteResident(id) {
      await HttpService.deleteData('/getResident?action=DELETE', id).then((response) => {
        messageSnack.value = response.data.message
        statustype.value = 'success';

        items.value = items.value.filter(res => res.resident_id !== `${id}`);
      }).catch((e) => {
        statustype.value = "error"
        messageSnack.value = e.message
      });
      snackBackOpen.value = true
    }


    //methods

    const closePopup = () => {
      isActive.value = false;
    };

    const onSubmit = handleSubmit(values => {
      if (isUpdate.value === true) {
        editResident(values)
      } else {
        addResident(values)
      }
    });
    // const submitForm = () => {
    //   if (isUpdate.value === true) {
    //     editResident()
    //   } else {
    //     addResident()
    //   }
    // }

    function changeInsertTitle() {
      const keys = Object.keys(yupSchema.fields);
      for (const key of keys) {
        setFieldValue(key, '')
      }
      title.value = "Insert Residents"
      isUpdate.value = false

    }

    function editItem(val) {
      const keys = Object.keys(yupSchema.fields);
      for (const key of keys) {
        setFieldValue(key, val[key])
      }
      // Object.assign(residentForm, val)
      title.value = "Update Residents"
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
      // submitForm,
      closePopup,
      search,
      items,
      messageSnack,
      statustype,
      snackBackOpen,
      editItem,
      deleteItem,
      headers,
      genderItem,
      religionItem,
      citizenItem,
      statusItem,
      changeInsertTitle,
      resident_id,
      fname,
      mname,
      lname,
      suffix,
      bdate,
      age,
      sex,
      religion,
      citizenship,
      occupation,
      status,
      purok,
      address,
      cont_no,
      onSubmit,

      // ...toRefs(residentForm)
    }
  },
});
</script>
