<template>
  <div class="sidebar">
    <div class="sidebar__search">
      <h4>Поиск сотрудников</h4>
      <input v-on:input="$event.target.value ? search($event) : clearSearch()" placeholder="Введите id или username"/>
    </div>
    <div class="sidebar__result">
      <h4 class="mt-30">Результаты</h4>
      <p v-if="users === '' && !loader && !error">Начните поиск</p>
      <p v-else-if="users.length == 0 && !loader && !error">Ничего не найдено</p>
      <p v-else-if="error && !loader">{{ error }}</p>
      <p v-else-if="loader">Загрузка...</p>
      <div v-if="users.length != 0 && !error">
        <div  class="resultUser" v-for="(user, index) in users" :key="index" @click="getUser(index)">
          <div class="resultUser__avatar">
            <img src="../assets/avatar.png">
          </div>
          <div class="resultUser__info" :class="{active: index === countActive}">
            <h5>{{ user.username }}</h5>
            <p>{{ user.email }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script lang="ts">

import Vue from 'vue'
import store from '../store'
import debounce from 'debounce'

export default Vue.extend({
  name: 'SearchUsers',
  data () {
    return {
      countActive: -1
    }
  },
  created () {
    this.search = debounce(this.search, 2000)
  },
  computed: {
    loader: {
      get () {
        return this.$store.getters.getLoader
      }
    },
    users: {
      get () {
        return this.$store.getters.getUsers
      }
    },
    error: {
      get () {
        return this.$store.getters.getError
      }
    }
  },
  methods: {
    getUser (index: number) {
      this.countActive = index
      store.dispatch('setUser', this.users[index])
    },
    search (e: any) {
      this.clearSearch()
      store.dispatch('setLoader', true)
      const param = e.target.value
      if (param) {
        const newStr = param.split(',').map((item: string) => !Number(item) ? `username=${item.trim()}` : `id=${item.trim()}`).join('&')
        store.dispatch('takeUsers', newStr)
      } else {
        this.clearSearch()
      }
    },
    clearSearch () {
      this.countActive = -1
      store.dispatch('setError', '')
      store.dispatch('setUser', '')
      store.dispatch('setUsers', '')
      store.dispatch('setLoader', false)
    }
  }
})

</script>

<style lang="scss">
.sidebar {
  width: 290px;
  text-align: left;
  border-right: 1px solid #E0E0E0;

  .sidebar__search {
    margin: 25px;

    input {
      font-size: 16px;
      width: 215px;
      height: 50px;
      margin-top: 14px;
      padding-left: 20px;
      border: 1.5px solid #E9ECEF;
      border-radius: 8px;
    }
  }

  .sidebar__result {
    margin: 25px;
    p {
      margin-top: 10px;
      font-weight: 400;
      font-size: 14px;
      color: #76787D
    }
    .resultUser {
      display: grid;
      grid-template-columns: 70px 1fr;
      margin-top: 18px;
      width: 240px;
      height: 70px;
      box-shadow: 0px 0px 10px 0px #0000001A;
      border-radius: 10px;

      .resultUser__avatar {
        width: 70px;
        height: 70px;
        align-content: center;
        border-right: 1px solid #E0E0E0;

        img {
          width: 100%;
        }
      }
      .resultUser__info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 15px;
        border-radius: 0 10px 10px 0 ;
        overflow: hidden;

        h5 {
          font-size: 14px;
          font-weight: 600;
        }
      }
      .resultUser__info:hover {
        background-color: #E0E0E0;
      }
    }
  }
}
.mt-30 {
  margin-top: 30px;
}
.active {
  background-color: #E0E0E0;
}
</style>
