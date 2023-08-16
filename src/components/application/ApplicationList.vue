<template>
  <div v-if="applications.length > 0" class="list-wrapper">
    <div class="navigation-block">
      <p class="navigation">
        <button 
        class="navigation-btn"
        v-if="page > 1" 
        @click="page = page-1"> &#706;</button>
        Текущая страница: {{ page }}
        <button 
          class="navigation-btn"
          v-if="hasNextPage" 
          @click="page = page+1">&#707;</button>
      </p>
    </div>
    <table class="list-table">
      <thead>
        <tr>
          <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in paginatedList" :key="index">
          <td data-label="Пользователь">{{ item?.user?.userName }}</td>
          <td data-label="Телефон">{{ item?.phone }}</td>
          <td data-label="Электронная почта">{{ item?.email }}</td>
          <td data-label="Текст заявки" class="app-text">{{ item?.applicationText }}</td>
          <td data-label="Действие"><button class="btn btn-small" @click.stop="deleteApplication(item)">Удалить</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <p>Заявки отсутствуют</p>
  </div>
</template>

<script>
const PAGE_SIZE = 3;

export default {
  props:['appList'],
  emits: {
    deleteApplication: null
  },
  data(){
    return {
      headers: ['Пользователь', 'Номер телефона', 'Электронная почта', 'Текст заявки', 'Действие'],
      page: 1,
      filter: '',
      applications: []
    }
  },
  created(){
    this.applications = structuredClone(this.appList);
  },
  methods: {
    deleteApplication(itemToRemove){
      this.applications =  this.applications.filter( item => item !== itemToRemove);
      this.$emit('deleteApplication', this.applications);
    }
  },
  computed: {
    startIndex(){
      return (this.page-1)*PAGE_SIZE; 
    },
    endIndex(){
      return this.page*PAGE_SIZE;
    },
    filteredList(){
      return this.applications?.filter(item => item.user?.userName.includes(this.filter));
    },
    paginatedList(){
      return this.filteredList?.slice(this.startIndex, this.endIndex);
    }, 
    hasNextPage(){
      return this.filteredList?.length > this.endIndex;
    }
  },
  watch:{
    paginatedList(){
      if (this.paginatedList?.length === 0 && this.page > 1) {
        this.page = this.page-1;
      }
    }
  }
}
</script>

<style>

.list-wrapper{
  margin: 0 auto;
  max-width: 900px;
  width: 100%;
  /* background-color: aquamarine; */
}

.navigation-block{
  display: flex;
  justify-content: center;
  padding: 20px 0;
}

.navigation{
  padding: 5px 10px 2px;
  background-color: #ffffff;
  border: none;
  border-bottom: 2px #3e7ee3 solid;
}

.navigation-btn {
  padding: 5px 10px;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  color: #3e7ee3;
  font-size: 16px;
  cursor: pointer;
}

.navigation-btn:hover{
  background-color: #b1cbf4;
  color: #ffffff;
}

.app-text {
  max-width: 500px;
}
.list-table {
  margin: 0 auto;
  word-wrap: break-word;
}
th , td {
  padding: 2px;
}



@media screen and (max-width: 820px) {
  .list-wrapper table thead {
    display: none;
  }

  .list-wrapper table tr {
    display: block;
    padding: 10px 0;
  }

  .list-wrapper table td  {
    display: flex;
    justify-content: space-between;
  }

  .list-wrapper table td::before {
    content: attr(data-label);
    font-weight: bold;
    margin-right: 20px;
  }
}

</style>