<template>
  <div v-if="user" class="userCard">
    <div class="userCard__avatar">
      <img src="../assets/avatar.png">
    </div>
    <div class="userCard__info">
      <h4 class="mb-10">{{ user.name }}</h4>
      <p class="mb-10">email: <span>{{ user.email }}</span></p>
      <p>phone: <span>{{ user.phone }}</span></p>
      <h4 class="aboutMe">О себе</h4>
      <p><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>
    </div>
  </div>
  <div v-else class="userCardNone">
    <p>Выберите сотрудника, чтобы посмотреть его профиль</p>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import store from '../store'

export default Vue.extend({
  name: 'UserCard',
  computed: {
    user: {
      get () {
        return this.$store.getters.getUser
      }
    }
  }
})
</script>

<style lang="scss">
.userCard {
  padding: 30px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .userCard__avatar {
    background-color: #FFFFFF;
    border: 1px solid #E0E0E0;
    margin: 0 20px;
    height: 286px;
    img {
      height: 100%;
    }
  }
  .userCard__info {
    margin: 0 20px;
    text-align: left;

    .aboutMe {
      color: #333333;
      margin: 20px 0;
    }

    p {
      font-size: 14px;
      font-weight: 600;

      .witeSpace {
        font-size: 16px;
        font-weight: 600;
      }
      span {
        font-weight: 400;
        color: #76787D;
      }
    }
  }
}

.userCardNone {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: #76787D;
}
.mb-10 {
  margin-bottom: 10px;
}

</style>
