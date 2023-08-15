<template>
  <ul class="user-list">
    <li class="user-item"
      :class="{
        'selected': selectedUser === user
      }"
      @click="selectedUser = user" 
      v-for="(user, index) in userList" 
      :key="index">
      <div class="user-img"></div>
      <div class="user-info">
        <h3 class="user-name">{{ user.userName }}</h3>
        <p class="user-data">{{ user.userDescription }}</p>
      </div>
      <div class="user-btn-wrapper">
        <button @click="addApllicationWithUser(user.userId)" class="user-btn">Подать заявку</button></div>
    </li>
    {{ selectedUser }}
  </ul>
</template>

<script>
import users from '../../assets/users.json';
  export default {
    data() {
      return {
        selectedUser: null
      }
    },
    computed:{
      userList(){
        return JSON.parse(JSON.stringify(users));
      }
    },
    methods:{
      addApllicationWithUser(id){
        this.$router.push({name:'user-page', props: true , params:{ id : id}});
      }
    }
  }
</script>



<style>
.user-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-item {
  display: grid;
  gap: 10px;
  padding: 20px;
  grid-template-columns: 60px auto auto;
  box-sizing: border-box;
  max-width: 600px;
  border: 2px solid transparent;
}

.user-item:hover{
  background-color: #dae4fa;
}

.user-img {
  align-self: center;
  width: 60px; 
  height: 60px;
  border-radius: 50%;
  background: url(../../assets/user.png) no-repeat center;
}

.user-info {
  align-items: center;
  
}
.user-name {
  font-size: 20px;
  line-height: 24px;
  margin: 0 0 5px 0;
}
.user-data{
  font-size: 14px;
  margin: 0;
}

.user-btn-wrapper{
  align-self: center;
}

</style>