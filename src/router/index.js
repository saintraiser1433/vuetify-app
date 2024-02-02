import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Resident',
    component: () => import(/* webpackChunkName: "resident" */ '../views/Residents.vue'),
    meta: { title: 'Resident Panel', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
  },
  {
    path: '/purok',
    name: 'Purok',
    component: () => import(/* webpackChunkName: "purok" */ '../views/Purok.vue'),
    meta: { title: 'Purok Panel', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
  },
  {
    path: '/official',
    name: 'Official',
    component: () => import(/* webpackChunkName: "official" */ '../views/Officials.vue'),
    meta: { title: 'Official Panel', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
  },
  {
    path: '/blotter',
    name: 'Blotter',
    component: () => import(/* webpackChunkName: "blotter" */ '../views/Blotter.vue'),
    meta: { title: 'Blotter Panel', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
  },
  {
    path: '/clearance',
    name: 'Clearance',
    component: () => import(/* webpackChunkName: "clearance" */ '../views/Clearance.vue'),
    meta: { title: 'Clearance Panel',subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
  },
  {
    path: '/archive',
    name: 'Archive',
    component: () => import(/* webpackChunkName: "archive" */ '../views/Archive.vue'),
    meta: { title: 'Archive Panel', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue'),
    meta: { title: 'Settings Panel',subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
  },
  {
    path: '/accsettings',
    name: 'AccSettings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/AccountSetting.vue'),
    meta: { title: 'Account Settings Panel', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
  },
  {
    path: '/backupdb',
    name: 'BackupDB',
    component: () => import(/* webpackChunkName: "backup" */ '../views/Backup.vue'),
    meta: { title: 'Backup and Restore Panel', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
