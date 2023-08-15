<template>
  <div class="form-wrapper">
    <form  class="form" action="#" method="post">
      <div class="form-item" v-if="!tempUser">
        <label class="form-label">
          <p class="label">Выберите пользователя</p>
          <select class="form-select" v-model="selectedUser">
            <option class="form-select-option" 
            v-for="user in userList"
            :value="user" 
            :key="user.id" >{{ user.userName }}</option>
          </select>
        </label>
      </div>
      <div class="form-item">
        <label class="form-label">
          <p class="label">Заполните номер телефона</p>
          <input class="form-input" v-model="phone" type="tel">
        </label>
      </div>
      <div class="form-item">
        <label class="form-label">
          <p class="label">Заполните e-mail</p>
          <input class="form-input" v-model="email" type="email">
        </label>
      </div>
      <div class="form-item">
        <label class="form-label">
          <p class="label">Текст заявки</p>
          <textarea class="form-input" v-model="applicationText" type="text"></textarea>
        </label>
      </div>
      <div class="form-item">
        <button type="submit" @click.prevent="addApplication">Отправить</button>
      </div>
    </form>
  </div>
</template>

<script>
import users from '../../assets/users.json';

export default {
  props:{
    userForApplication:{
      type: Object,
      required: false,
      default(){
        return null
      }
    } 
  },
  emits:{
    addNewApplication: null
  },
  data() {
    return {
      selectedUser: '',
      phone: '',
      email: '',
      applicationText: '',
      userList: [],
      tempUser: null
      }
  },
  created() {
    this.userList = JSON.parse(JSON.stringify(users));
    this.tempUser = JSON.parse(JSON.stringify(this.userForApplication));
    if (this.tempUser) {
      this.selectedUser = this.tempUser;
    }
    
  },
  methods: {
    addApplication(){
      const newApplication = {
        user: structuredClone(this.selectedUser),
        phone: this.phone,
        email: this.email,
        applicationText: this.applicationText
      };
      console.log(newApplication);
      this.$emit('addNewApplication', newApplication);
      this.cleanForm();
    },
    cleanForm(){
      this.selectedUser = '';
      this.phone = '';
      this.email = '';
      this.applicationText = '';
    }
  },
  // watch:{
  //   userForApplication(){
  //     if (this.tempUser !== null){
  //       this.selectedUser = this.tempUser;
  //     }
  //   }
  // }
}
</script>


<style>
.hidden {
  display: none;
}
.form-wrapper{
  max-width: 540px;
  width: 100%;
  margin: 20px auto;
  font: Arial, sans-serif;
}

.form {
  display: flex;
  flex-direction: column;
}

.form-item {
  margin: 0 0 15px;
}

.form-select,
.form-input {
  width: 100%;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  border: 1px #dedede solid;
  border-radius: 5px;
  padding: 10px 10px;
  font-size: 16px;
  color: #3c3c3c;
}

.form-select:focus,
.form-input:focus {
  border: 2px #3e7ee3 solid;
}

.form-select {
  max-width: 500px;
  appearance: none;
  cursor: pointer;
  background: url(../../assets/arrow_down.png) no-repeat right;
  background-size: 25px;
}
.form-input {
  max-width: 480px;
}

.form-select-option {
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
}

.label{
  margin: 0;
  padding-bottom: 5px;
  font-size: 14px;
}
</style>