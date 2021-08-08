<template>
  <div>
    <h2>HOME</h2>
    <el-button type="info" @click="logout">logout</el-button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
};
</script>

<style>
</style>