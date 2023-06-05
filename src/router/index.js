import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/posts/Index.vue'
import Id from '../views/posts/Id.vue'
import Add from '../views/posts/Add.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/post/:id',
            name: 'id',
            component: Id
        },
        {
            path: '/add_post',
            name: 'add_post',
            component: Add
        }
    ]
})

export default router