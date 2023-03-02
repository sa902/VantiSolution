<template>
  <v-app class="app-root">
    <v-navigation-drawer v-model="drawer" app>
      <div class="d-flex text-h6 justify-center py-5">Available Floors</div>
      <v-divider />
      <v-list nav>
        <v-list-item
          v-for="floor in floors"
          :key="floor"
          link
          :to="{ name: 'Occupancy', params: { floor: floor } }"
          @click="handleFloorsSelection(floor)"
        >
          <v-list-item-content>
            <v-list-item-title class="d-flex justify-center">
              {{ floor }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title> Vanti Front End Dev Assessment </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { computed, ref } from "vue";
import OccupancyTable from "@/occupancy/OccupancyTable.vue";
import { useRecords } from "@/occupancy/records";

const records = useRecords();
const drawer = ref(true);
const handleFloorsSelection = (floor) => {
  records.selectedFloor = floor;
};
const floors = computed(() => {
  let calculatedFloors = [...records.floors];
  calculatedFloors.unshift("All");
  return calculatedFloors;
});
</script>
