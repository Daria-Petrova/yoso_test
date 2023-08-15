import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import UserPage from './components/user/UserPage.vue'
import UserList from './components/user/UserList.vue'
import ApplicationForm from './components/application/ApplicationForm.vue'
import ApplicationList from './components//application//ApplicationList.vue'

const router = createRouter({
    routes: [{
      path: '/',
      name: 'user-list',
      component: UserList
      },
      {
        path: '/request', 
        name: 'application-form',
        component: ApplicationForm
      },
      {
        path: '/request-list',
        name: 'application-list',
        props: true,
        component: ApplicationList
      },
      {
        path: '/user/:id',
        name: 'user-page',
        component: UserPage
      }
    ],
    history: createWebHistory()
  })

createApp(App).use(router).mount('#app')
