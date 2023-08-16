<template>
    <div class="main-wrapper">
      <div class="header">
        <a href="email:info@yoso.com" class="logo-link">
        <img src="../assets/logo.png" width="90" height="30" alt="YoSo logo">
        </a>
        <ul class="menu">
          <li class="menu-item" 
            v-for="item in formList" 
            :key="item"><router-link :to="{name: item.name }">{{ item.title }}</router-link>
            </li>
        </ul>
      </div>
      <div class="main">
        <router-view 
        @addNewApplication="addApplication"
        @deleteApplication="removeApplication"
        :appList="applicationList" />
      </div>
      <div class="footer">
        <p>all rights reserved</p>
      </div>
    </div>
</template>

<script>

export default {
  name: "MainPage",
  data(){
    return {
      formList: [
        { 
          name: 'user-list',
          title: 'Список пользователей'
        },
        { 
          name: 'application-list',
          title: 'Список заявок'
        },
        { 
          name: 'application-form',
          title: 'Форма заявки'
        },
      ],
      applicationList: [],
      appList: [],
      userList: []
    }
  },
  created(){
    const applicationsData = localStorage.getItem('application-list');
    if (applicationsData) {
      this.applicationList = JSON.parse(applicationsData);
    }
  },
  methods: {
    addApplication(newApplication){
      this.applicationList.push(newApplication);
      this.updateApplicationList(this.applicationList);
    },
    removeApplication(changedApplication){
      this.updateApplicationList(changedApplication);
    },
    updateApplicationList(items){
      localStorage.setItem('application-list', JSON.stringify(items));
    }
  }
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
  display: grid;
  grid-template-columns: min-content auto;
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

.menu-item {
  padding: 0 12px;
  cursor: pointer;
}

a {
  color: #000000;
}

.menu-item > a {
  text-decoration: none;
  font-size: 16px;
}

.router-link-active {
  color: #3e7ee3;
  font-weight: 600;
}

@media screen and (max-width: 500px ) {
    .header{
        padding:10px 20px;
    }
}
</style>