import { ref } from 'vue'

export const tableHeaders = ref([
    { title: 'Resident ID', align: 'start', key: 'resident_id', sortable: true },
    { title: 'Full Name', align: 'start', key: 'fullname', sortable: true },
    { title: 'Sex', align: 'start', key: 'sex', sortable: true },
    { title: 'Occupation', align: 'start', key: 'occupation', sortable: true },
    { title: 'Phone', align: 'start', key: 'cont_no', sortable: true },
    { title: 'Actions', align: 'start', key: 'actions', sortable: false },
])