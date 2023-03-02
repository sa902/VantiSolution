<template>
  <v-container>
<<<<<<< HEAD
    <v-card>
      <occupancy-table />
    </v-card>
=======
    <v-card v-if="isValidRoute">
      <occupancy-table />
    </v-card>
    <v-card v-else>
      <v-card-title class="d-flex justify-center">
        Incorrect Floor
      </v-card-title>
      <v-img
        class="d-flex justify-center"
        contain
        max-height="300px"
        src="https://cdn.dribbble.com/users/596597/screenshots/1714959/microwave-sad-face.png"
      ></v-img>
      <v-card-text class="d-flex justify-center">
        You have come from an invalid link. <br />
        is the floor you selected a valid floor?
      </v-card-text>
    </v-card>
>>>>>>> 47fb73c8276bdcf7d407ba31e4a5414e782def28
  </v-container>
</template>

<script setup>
import OccupancyTable from "@/occupancy/OccupancyTable.vue";
<<<<<<< HEAD
import { onMounted } from "vue";
=======
import { computed, onMounted } from "vue";
>>>>>>> 47fb73c8276bdcf7d407ba31e4a5414e782def28
import { useRoute } from "vue-router/composables";
import { useRecords } from "@/occupancy/records";
const records = useRecords();
const route = useRoute();
<<<<<<< HEAD
onMounted(() => {
  records.selectedFloor = route.params.floor;
=======

const isValidRoute = computed(() => {
  let floors = [...records.floors, "all"];
  floors = floors.map((floor) => floor.replace(/\s/g, "").toLowerCase());
  return floors.includes(records.getSelectedFloor);
});

onMounted(() => {
  records.selectedFloor =
    route.params.floor === undefined ? "all" : route.params.floor;
>>>>>>> 47fb73c8276bdcf7d407ba31e4a5414e782def28
});
</script>

<style scoped></style>
