import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "../views/Dashboard.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/residentrecords",
    name: "ResidentRecords",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ResidentRecords.vue"),
  },
  {
    path: "/blotterecords",
    name: "BlotterRecords",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BlotterRecords.vue"),
  },
  {
    path: "/certificates",
    name: "Certificates",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Certificates.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes
})

export default router
