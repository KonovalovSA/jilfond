<template>
  <div id="app">
    <header>
      <h1>Жилфонд</h1>
      <p>Пользователь</p>
    </header>
    <SearchUsers />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchUsers from './components/SearchUsers.vue'

export default Vue.extend({
  name: 'App',
  components: {
    SearchUsers
  }
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

#app {
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 50px;
}
h1, h2, h3, h4, h5, p {
  margin: 0;
}
h4 {
  font-weight: 600;
}
header {
  display: flex;
  justify-content: space-between;
  place-items: center;
  min-width: 1266px;
  h1 {
    color: #E31F24;
  }
}

</style>
