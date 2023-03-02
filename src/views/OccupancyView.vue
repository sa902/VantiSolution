<template>
  <v-container>
    <v-card>
      <occupancy-table />
    </v-card>
  </v-container>
</template>

<script setup>
import OccupancyTable from "@/occupancy/OccupancyTable.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router/composables";
import { useRecords } from "@/occupancy/records";
const records = useRecords();
const route = useRoute();
onMounted(() => {
  records.selectedFloor = route.params.floor;
  console.log(`this is the router params ${route.params.floor}`);
});
</script>

<style scoped></style>
