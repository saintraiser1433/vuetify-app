<template>
    <v-col cols="12" sm="6" md="4">
        <div class="text-subtitle-1 text-medium-emphasis">Resident ID</div>
        <v-text-field density="compact" variant="outlined"></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="4">
        <div class="text-subtitle-1 text-medium-emphasis">First Name</div>
        <v-text-field density="compact" variant="outlined"></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="4">
        <div class="text-subtitle-1 text-medium-emphasis">Middle Name</div>
        <v-text-field density="compact" variant="outlined"></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="4">
        <div class="text-subtitle-1 text-medium-emphasis">Last Name</div>
        <v-text-field density="compact" variant="outlined"></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="4">
        <div class="text-subtitle-1 text-medium-emphasis">Birth Date</div>
        <v-text-field density="compact" variant="outlined" type="date"></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="4">
        <div class="text-subtitle-1 text-medium-emphasis">Age</div>
        <v-text-field type="number" density="compact" variant="outlined"></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="4">
        <div class="text-subtitle-1 text-medium-emphasis">Sex</div>
        <v-select density="compact" :items="sex" variant="outlined"></v-select>
    </v-col>
    <v-col cols="12" sm="6" md="4">
        <div class="text-subtitle-1 text-medium-emphasis">Religion</div>
        <v-select density="compact" :items="religion" variant="outlined"></v-select>
    </v-col>
    <v-col cols="12" sm="6" md="4">
        <div class="text-subtitle-1 text-medium-emphasis">Citizenship</div>
        <v-select density="compact" :items="citizen" variant="outlined"></v-select>
    </v-col>
    <v-col cols="12" sm="6" md="4">
        <div class="text-subtitle-1 text-medium-emphasis">Occupation</div>
        <v-text-field density="compact" variant="outlined"></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="4">
        <div class="text-subtitle-1 text-medium-emphasis">Contact No.</div>
        <v-text-field type="number" density="compact" variant="outlined"></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="4">
        <div class="text-subtitle-1 text-medium-emphasis">Marital Status</div>
        <v-select density="compact" :items="maritalStatus" variant="outlined"></v-select>
    </v-col>
    <v-col cols="12" sm="6" md="4">
        <div class="text-subtitle-1 text-medium-emphasis">Purok</div>
        <v-text-field density="compact" variant="outlined"></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="8">
        <div class="text-subtitle-1 text-medium-emphasis">Address</div>
        <v-text-field density="compact" variant="outlined"></v-text-field>
    </v-col>
</template>
<script>
export default {
    name: 'ResidentModal',
    data() {
        return {
            sex: ['Male','Female'],
            religion: ['Roman Catholic','Islam','Inc'],
            citizen:['Filipino','American'],
            maritalStatus:['Single','Married','Complicated']
        }
    }
}
</script>

<style scoped></style>