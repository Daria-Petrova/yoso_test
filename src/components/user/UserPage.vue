<template>
  <div v-if="user">
    <div class="user-page">
      <div class="user-img"></div>
      <div class="user-info">
        <h3 class="user-name">{{user[0].userName}}</h3>
        <p class="user-data">{{user[0].userDescription}}</p>
      </div>
    </div>
    <ApplicationForm :userForApplication="user[0]" @addNewApplication="add" />
  </div>
</template>

<script>
import ApplicationForm from '../application/ApplicationForm.vue';
import users from '../../assets/users.json';

export default {
  props:['id', 'appList'],
  emits:{
    addNewApplication: null
  },
  data(){
    return{ 
      userId: '',
      user: null,
      userList: [],
      userForApplication: null
    }
  },
  components: {
    ApplicationForm
  },
  created(){
    this.userId = this.$route.params?.id;
    this.userList = JSON.parse(JSON.stringify(users));
  },
  watch:{
    userId(){
      this.user = this.userList.filter(item => item.userId === this.userId);
    }
  },
  methods:{
    add(newApplication){
      this.$emit('addNewApplication', newApplication);
    }
  }
}
</script>

<style>

.user-page {
  max-width: 600px;
  width: 100%;
  margin: 20px auto;
  display: grid;
  justify-items: center;
}

.user-page > .user-info {
  text-align: center;
  margin: 20px 0;
}

.user-page >.user-img {
  width: 200px; 
  height: 200px;
  background: url(../../assets/user_lg.png) no-repeat center;
}

@media screen and (max-width: 530px){
  .user-page {
    padding: 0 20px;
  }
  .user-page >.user-img {
    width: 100px; 
    height: 100px;
    background-size:contain ;
}
}

</style>