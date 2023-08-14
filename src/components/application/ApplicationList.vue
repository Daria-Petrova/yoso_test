<template>
  <div v-if="applications.length">Список заявок
    <p>
      <button v-if="page > 1" @click="page = page-1">Назад</button>
      <button v-if="hasNextPage" @click="page = page+1">Вперёд</button>
    </p>
    <p>Текущая страница: {{ page }}</p>
    <table>
      <thead>
        <tr>
          <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in paginatedList" :key="index">
          <td>{{ item?.user?.userName }}</td>
          <td>{{ item?.phone }}</td>
          <td>{{ item?.email }}</td>
          <td>{{ item?.applicationText }}</td>
          <td><button @click.stop="deleteApplication(item)">Удалить</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <p>Заявки отсутствуют</p>
  </div>
</template>

<script>

export default {
  props:['appList','userArray'],
  emits: {
    deleteApplication: null
  },
  data(){
    return {
      headers: ['Пользователь', 'Номер телефона', 'Электронная почта', 'Тест заявки'],
      page: 1,
      filter: '',
      applications: []
    }
  },
  created(){
    this.applications = this.appList;
  },
  methods: {
    deleteApplication(itemToRemove){
      this.applications =  this.applications.filter( item => item !== itemToRemove);
      this.$emit('deleteApplication', this.applications);
    },
  },
  computed: {
    startIndex(){
      return (this.page-1)*3;
    },
    endIndex(){
      return this.page*3;
    },
    filteredList(){
      return this.applications.filter(item => item.user?.userName.includes(this.filter));
    },
    paginatedList(){
      return this.filteredList.slice(this.startIndex, this.endIndex);
    }, 
    hasNextPage(){
      return this.filteredList.length > this.endIndex;
    }
  },
  watch:{
    paginatedList(){
      if (this.paginatedList.length === 0 && this.page > 1) {
        this.page = this.page-1;
      }
    }
  }
}

</script>