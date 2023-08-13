<template>
  <div>Список заявок
    <table>
      <thead>
        <tr>
          <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in applications" :key="index">
          <td>1</td>
          <td>{{ item?.user }}</td>
          <td>{{ item?.phone }}</td>
          <td>{{ item?.email }}</td>
          <td>{{ item?.applicationText }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return{
      headers: ['Номер заявки', 'Пользователь', 'Номер телефона', 'Электронная почта', 'Тест заявки'],
      applications: []
    }
  },
  created(){
    const applicationsData = localStorage.getItem('application-list');
    if (applicationsData) {
      this.applications = JSON.parse(applicationsData);
    }
  }
}

</script>