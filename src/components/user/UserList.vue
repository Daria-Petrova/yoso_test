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
    </li>
  </ul>
  {{ selectedUser }}
</template>

<script>
  export default{
    data() {
      return {
        userList: [{
            userName: 'User1 Name1 Surname1',
            userDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sint ducimus quo magni tempore.'
          },
          {
            userName: 'User2 Name2 Surname2',
            userDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sint ducimus quo magni tempore.'
          }, 
          {
            userName: 'User3 Name3 Surname3',
            userDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sint ducimus quo magni tempore.'
          } 
        ],
        selectedUser: null
      }
    },
    methods: {
      choseUser() {

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
  grid-template-columns: 60px auto;
  width: 500px;
  box-sizing: border-box;
  max-width: 500px;
  cursor: pointer;
  border: 2px solid transparent;
}

/* .user-item:hover{
  background-color: #dedede;
} */

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
  font-size: 16px;
  margin: 0;
}

.selected {
  border: 2px #19a8ea solid;
  border-radius: 5px;
}
</style>