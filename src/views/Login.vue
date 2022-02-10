<template>
  <form @submit.prevent>
    <div>Login</div>
    <input
      v-model="userName"
      type="text"
      v-model.trim="userName"
      placeholder="User name"
    />
    <input
      v-model="userPassword"
      type="text"
      v-model.trim="userPassword"
      placeholder="User password"
    />
    <button @click="loginUser">Login</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      userPassword: "",
    };
  },
  methods: {
    loginUser() {
      const user = {
        userName: this.userName,
        userPassword: this.userPassword,
      };
      this.userName = "";
      this.userPassword = "";
      this.$store.commit("login/loginUser", user);
    },
  },
};
</script>

<style scoped></style>
