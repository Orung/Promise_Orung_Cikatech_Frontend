<template>
  <div class="auth_page">
    <div class="side_img">
      <img src="~assets/images/bg-banner.png" alt="" />
      <div class="side_img_overlay"></div>
    </div>
    <div class="form_section">
      <div class="title">
        <p>Welcome back</p>
        <h1>Login to your account</h1>
      </div>
      <form @submit.prevent="login">
        <div class="form_control">
          <label for="useername">Username</label>
          <input
            type="text"
            id="username"
            placeholder="joshbar0712@gmail.com"
            name="username"
            v-model="username"
          />
        </div>
        <div class="form_control">
          <label for="password">Password</label>
          <input
            type="password"
            placeholder="******"
            name="password"
            v-model="password"
          />
        </div>
        <div class="flex mt-25">
          <div class="remember_pass">
            <label for="remember">Remember me</label>
            <input type="checkbox" id="remember" name="remember" />
          </div>
          <div>
            <a href="/">Forget password?</a>
          </div>
        </div>
        <div class="form_control submit_button relative">
          <input type="submit" value="Login" />
          <div class="spinner" v-if="registerLoading">
            <Loader />
          </div>
        </div>
        <div class="text_center">
          Don't have an account? <nuxt-link to="/register">Register</nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Login",
    };
  },
  data() {
    return {
      username: "",
      password: "",
      registerLoading: false,
    };
  },
  methods: {
    async login() {
      if(!username || !password){
        alert
      }
      const { username, password } = this;

      try {
        await this.$auth.loginWith("local", {
          data: { username, password },
        });
        alert('Loggin Successful')
        this.$router.push("/dashboard");
      } catch (err) {
        console.log(err);
        alert(err)
      }
      setTimeout(() => {
        this.registerLoading = true
      }, 100);
    },
  },
};
</script>
