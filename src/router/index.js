import Vue from "vue";
import VueRouter from "vue-router";
import OccupancyView from "../views/OccupancyView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/:floor?",
    name: "Home",
    component: OccupancyView,
  },
];
const router = new VueRouter({
  routes,
});
export default router;
