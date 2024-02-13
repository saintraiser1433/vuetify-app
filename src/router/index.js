import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "@/views/Purok.vue"),
    meta: {
      title: "Dashboard",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
  },
  {
    path: "/student",
    name: "Student",
    component: () =>
      import(/* webpackChunkName: "students" */ "@/views/Purok.vue"),
    meta: {
      title: "Manage Student",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
  },
  {
    path: "/category",
    name: "Category",
    component: () =>
      import(/* webpackChunkName: "students" */ "@/views/Purok.vue"),
    meta: {
      title: "Manage Categories",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
  },
  {
    path: "/department",
    name: "Department",
    component: () =>
      import(/* webpackChunkName: "students" */ "@/views/Purok.vue"),
    meta: {
      title: "Manage Department",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
  },
  {
    path: "/inventory",
    name: "Inventory",
    component: () =>
      import(/* webpackChunkName: "inventory" */ "@/views/Purok.vue"),
    meta: {
      title: "Manage Inventory",
      subtitle:
        "This panel represents list of assets available in science laboratory ",
    },
  },
  {
    path: "/returned",
    name: "Returned",
    component: () =>
      import(/* webpackChunkName: "returned" */ "@/views/Purok.vue"),
    meta: {
      title: "Manage Returned Item",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
  },
  {
    path: "/transaction",
    name: "Transaction",
    component: () =>
      import(/* webpackChunkName: "transaction" */ "@/views/Purok.vue"),
    meta: {
      title: "Manage Transaction",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
  },
  {
    path: "/report",
    name: "Report",
    component: () =>
      import(/* webpackChunkName: "reports" */ "@/views/Purok.vue"),
    meta: {
      title: "Manage Report",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
  },
  { path: '/:pathMatch(.*)*', component: () => import(/* webpackChunkName: "transaction" */ "@/views/Officials.vue"), },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
