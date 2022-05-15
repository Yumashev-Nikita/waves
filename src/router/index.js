import { createRouter, createWebHashHistory } from 'vue-router'
import OverviewWindow from '../components/library/OverviewWindow.vue'
import LikesWindow from '../components/library/LikesWindow.vue'


const routes = [
  { path: '/overview', component: OverviewWindow },
  { path: '/likes', component: LikesWindow },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
