<template>
  <div class="form-wrapper">Форма отправки заявки
    <form  class="form" action="#" method="post">
      <div class="form-item">
        <label class="form-label">
          <p class="label">Выберите пользователя</p>
          <select class="form-select" v-model="user">
            <option class="form-select-option hidden" disabled value=""></option>
            <option class="form-select-option" value="1">Пользователь 1</option>
            <option class="form-select-option" value="2">Пользователь 2</option>
            <option class="form-select-option" value="3">Пользователь 3</option>
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
    <div>
      <p v-for="(item,index) in applications" :key="index">
        Пользователь: {{ item.user }}
        <span>Телефон: {{ item.phone }} </span>
        <span>Почта: {{ item.email }}</span>
        <span>Тест заявки:{{ item.applicationText }} </span>
        <button @click.stop="deleteApplication(item)">Удалить заявку</button>
      </p>
    </div>
    {{user }} {{ phone }} {{ email }} {{applicationText  }}
  </div>
</template>

<script>

export default {
  data() {
    return {
      user: '',
      phone: '',
      email: '',
      applicationText: '',
      applications: []
      }
    },
  created(){
    const applicationsData = localStorage.getItem('application-list');
    if (applicationsData) {
      this.applications = JSON.parse(applicationsData);
    }
  },
  methods: {
    addApplication(){
      const newApplication = {
        user: this.user,
        phone: this.phone,
        email: this.email,
        applicationText: this.applicationText
      };
      this.applications.push(newApplication);
      localStorage.setItem('application-list', JSON.stringify(this.applications));
      this.cleanForm();
      
    },
    deleteApplication(itemToRemove){
      this.applications =  this.applications.filter( item => item !== itemToRemove);
    },
    cleanForm(){
      this.user = '';
      this.phone = '';
      this.email = '';
      this.applicationText = '';
    }
  }
}

</script>


<style>
.hidden {
  display: none;
}
.form-wrapper{
  max-width: 540px;
  width: 100%;
  margin: 0 auto;
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