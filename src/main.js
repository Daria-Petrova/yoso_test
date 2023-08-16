import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import UserPage from './components/user/UserPage.vue'
import UserList from './components/user/UserList.vue'
import ApplicationForm from './components/application/ApplicationForm.vue'
import ApplicationList from './components//application//ApplicationList.vue'

const router = createRouter({
  history: createWebHashHistory(),
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
  ]
  })

createApp(App).use(router).mount('#app')
