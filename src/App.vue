<template>
  <v-app class="app-root">
    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <div class="d-flex text-h6 justify-center pt-4 pb-4">
        Available Floors
      </div>
      <v-divider>

      </v-divider>

      <v-list
          dense
          nav
      >
        <v-list-item
            v-for="floor in floors"
            :key="floor"
            link
        >
          <v-list-item-content @click="takeContent(floor)">
            <v-list-item-title>{{ floor }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        Vanti Front End Dev Assessment
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-card>
          <occupancy-table/>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import {computed, ref} from "vue";
import {useRecords} from '@/occupancy/records';
import OccupancyTable from '@/occupancy/OccupancyTable.vue';
const records = useRecords();
const drawer = ref(true);
const takeContent = (content) => {
  console.log(`this si the ${content}`)
}
const floors = computed(() => {
  console.log(`this is records ${records}`)
  return records.floors
})
</script>
