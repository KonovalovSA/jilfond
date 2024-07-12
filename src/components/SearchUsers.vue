<template>
  <main>
    <TheSidebar />
    <UserCard />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import TheSidebar from './TheSidebar.vue'
import UserCard from './UserCard.vue'

export default Vue.extend({
  name: 'SearchUsers',
  components: {
    TheSidebar,
    UserCard
  }
})
</script>

<style scoped lang="scss">
main {
  display: flex;
  width: 100%;
  min-height: 575px;
  box-shadow: 0px 0px 10px 0px #0000001a;
  position: relative;
  top: 26px;
  border-radius: 10px;
  background-color: #FDFDFD;
}
</style>
