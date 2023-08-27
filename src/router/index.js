import { createRouter, createWebHistory } from 'vue-router'
import EditorView from '../views/EditorView.vue'
import NoteExplorerView from '../views/NoteExplorerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: EditorView,
        explorer: NoteExplorerView
      }
    }
  ]
})

export default router
