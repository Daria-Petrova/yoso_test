<template>
  <div>
    <div class="user-page">
      <div class="user-img"></div>
      <div class="user-info">
        <h3 class="user-name">Name1 Surname1</h3>
        <p class="user-data">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sint ducimus quo magni tempore.</p>
      </div>
    </div>
    <ApplicationForm />
  </div>
</template>

<script>
import ApplicationForm from '../application/ApplicationForm.vue';

export default {
  components: {
    ApplicationForm
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
</style>