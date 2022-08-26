<template>
  <div>
    我是登录页
    <br />
    <button @click="login">Login</button>
    <button @click="logout">logout</button>

    <br />

    <button @click="goHome">goHome</button>
    <button @click="goUser">goUser</button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      localStorage.setItem('token', '123')
      this.goHome()
    },
    goHome() {
      this.$router.push({
        path: '/home'
      })
    },
    goUser() {
      this.$router.push({
        path: '/user'
      })
    },
    logout() {
      localStorage.removeItem('token')
    }
  }
}
</script>

<style scoped></style>
