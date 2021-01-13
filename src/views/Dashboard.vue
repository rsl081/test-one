<template>
   <v-container fluid>
      <card-resident-record />
      <barangay-official-table />
    </v-container>
</template>

<script>
import BarangayOfficialTable from '../components/BarangayOfficialTable.vue'
import CardResidentRecord from '../components/CardResidentRecord.vue'

export default {
  name: 'Dashboard',
  components: { CardResidentRecord, BarangayOfficialTable },
}
</script>
