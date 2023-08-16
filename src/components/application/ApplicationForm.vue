<template>
  <div class="form-wrapper">
    <form  class="form" action="#" method="post">
      <div class="form-item" 
       v-if="!tempUser">
        <label class="form-label">
          <p class="label">Выберите пользователя<span class="error"> &#9733;</span></p>
          <select 
            class="form-select"
            v-model="selectedUser">
            <option class="form-select-option" 
              v-for="user in userList"
              :value="user" 
              :key="user.id" >{{ user.userName }}</option>
          </select>
          <span class="error" v-if="v$.selectedUser.$error">Выберите пользователя</span>
        </label>
      </div>
      <div class="form-item">
        <label class="form-label">
          <p class="label">Заполните номер телефона<span class="error"> &#9733;</span></p>
          <input class="form-input" 
          v-model="phone"
          type="tel">
        </label>
        <span class="error"  v-for="error of v$.phone.$errors" :key="error.$uid">
          <template v-if="error.$validator === 'numeric'">Используйте цифры</template>
          <template v-if="error.$validator === 'required'">Введите номер телефона</template>
          <template v-if="error.$validator === 'maxLength'">Длина номера превышает {{ error.$params.max}} символов</template>
        </span>
      </div>
      <div class="form-item">
        <label class="form-label">
          <p class="label">Заполните e-mail<span class="error"> &#9733;</span></p>
          <input class="form-input" 
          v-model="email"
          type="email">
        </label>
        <span class="error"  v-for="error of v$.email.$errors" :key="error.$uid">
          <template v-if="error.$validator === 'email'">Адрес введен не корректно</template>
          <template v-if="error.$validator === 'required'">Введите адрес электронной почты</template>
        </span>
      </div>
      <div class="form-item">
        <label class="form-label">
          <p class="label">Текст заявки<span class="error"> &#9733;</span></p>
          <textarea class="form-input textarea"
          v-model="applicationText"
          type="text"></textarea>
        </label>
        <span class="error"  v-for="error of v$.applicationText.$errors" :key="error.$uid">
          <template v-if="error.$validator === 'maxLength'">Длина заявки превышает {{ error.$params.max}} символов</template>
          <template v-if="error.$validator === 'required'">Введите текст заявки</template>
        </span>
      </div>
      <div class="form-item">
        <button class="btn" type="submit" @click.prevent="addApplication">Отправить</button>
      </div>
    </form>
  </div>
</template>

<script>
import users from '../../assets/users.json';
import { useVuelidate } from '@vuelidate/core'
import { required, email, maxLength, numeric } from '@vuelidate/validators'

export default {
  setup () {
    return { v$: useVuelidate() }
  },
  props:{
    userForApplication:{
      type: Object,
      required: false,
      default(){
        return null
      }
    },
    appList:{
      default: null
    } 
  },
  emits:{
    addNewApplication: null
  },
  data() {
    return {
      selectedUser: '',
      phone: null,
      email: '',
      applicationText: '',
      userList: [],
      tempUser: null
      }
  },
  validations(){
    return {
      selectedUser:{ required },
      phone: { required, numeric, maxLength: maxLength(11), $autoDirty: true},
      email: { required, email, $autoDirty: true},
      applicationText: { required, maxLength: maxLength(200), $autoDirty: true}
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
    async addApplication(){
      const result = await this.v$.$validate();
      if (!result) {
        console.log('не валидная форма')
      }
      else {
        const newApplication = {
        user: structuredClone(this.selectedUser),
        phone: this.phone,
        email: this.email,
        applicationText: this.applicationText
      };
        this.$emit('addNewApplication', newApplication);
        this.cleanForm();
        this.v$.$reset();
      }
      
    },
    cleanForm(){
      this.selectedUser = '';
      this.phone = '';
      this.email = '';
      this.applicationText = '';
    }
  }
}
</script>


<style>

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

.form-input.textarea {
  resize: none;
  height: 100px;
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
  appearance: none;
  cursor: pointer;
  background: url(../../assets/arrow_down.png) no-repeat right;
  background-size: 25px;
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

.error{
  font-size: 10px;
  color: red;
}

</style>