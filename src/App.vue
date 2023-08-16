<template>
  <StartPage />
</template>

<script>
 import StartPage from './components/StartPage.vue';

export default {
  name: 'App',
  components: {
    StartPage
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:  Roboto, Arial, sans-serif;
}

.btn {
  outline: none;
  background-color: #ffffff;
  color:#3e7ee3;
  border: 2px solid #3e7ee3;
  border-radius: 20px;
  padding: 10px 25px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s,
              color 0.3s;
}
.btn.btn-small {
  font-size: 12px;
  padding: 5px 15px;
}

.btn:hover {
  background-color: #3e7ee3;
  color: #ffffff;
  transition: background-color 0.3s,
              color 0.3s;
}

.btn:focus {
  background-color: #3e7ee3;
  color: #ffffff; 
}
</style>
