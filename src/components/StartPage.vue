<template>
    <div class="main-wrapper">
      <div class="header">
        <a href="email:info@yoso.com" class="logo-link">
        <img src="../assets/logo.png" width="90" height="30"  alt="YoSo logo">
        </a>
        <ul class="menu">
          <li class="menu-item" 
            v-for="item in formList" 
            :key="item"
            @click="current = item.name">{{ item.title }}</li>
        </ul>
      </div>
      <div class="main">
        <KeepAlive>
          <component :is="current"></component>
        </KeepAlive>
      </div>
      <div class="footer">
        <p>all rights reserved</p>
      </div>
    </div>
</template>

<script>
import UserPage from './user/UserPage.vue';
import UserList from './user/UserList.vue';
import ApplicationList from './application/ApplicationList.vue';
import ApplicationForm from './application/ApplicationForm.vue';

export default {
  name: "MainPage",
  components: {
        UserPage, 
        UserList,
        ApplicationList,
        ApplicationForm
  },
  data(){
    return {
      current: 'UserList',
      formList: [
        { 
          name: 'UserPage',
          title: 'Страница пользователя'
        },
        { 
          name: 'UserList',
          title: 'Список пользователей'
        },
        { 
          name: 'ApplicationList',
          title: 'Список заявок'
        },
        { 
          name: 'ApplicationForm',
          title: 'Форма заявки'
        },],
      parentInformation: null
    }
  },
  methods: {}
}

</script>

<style>
.main-wrapper {
  display: grid;
  grid-template-areas:
    "header"
    "content"
    "footer";
  grid-template-columns: 1fr;
  grid-template-rows:
    auto
    1fr
    auto;
  min-height: 100vh;
  max-width: 1920px;
  margin: 0 auto;
  box-sizing: border-box;
  margin: 0 auto;
}

.header {
  margin: 0 auto;
  padding: 24px 60px;
  max-width: 1366px;
  width: 80%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d5d5d5;
}

.main {
  margin: 0 10%;
}

.footer {
  padding: 10px 30px;
  background-color: #fafafa;
  text-align: center;
}

.menu {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  list-style: none;
}

.menu-item{
  padding: 0 12px;
  cursor: pointer;
}

.active{
  background-color: aqua;
}

@media screen and (max-width: 500px ) {
    .header{
        padding:10px 20px;
    }
}
</style>