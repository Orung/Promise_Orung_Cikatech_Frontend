<template>
  <div class="auth_page">
    <div class="side_img">
      <img src="~assets/images/bg-banner.png" alt="" />
      <div class="side_img_overlay"></div>
    </div>
    <div class="form_section">
      <div class="title">
        <p>Get Started</p>
        <h1>Create your account</h1>
      </div>
      <form @submit.prevent="userRegistration">
        <div class="form_control">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="joshbar0712@gmail.com"
            name="email"
            v-model="email"
          />
        </div>
        <div class="flex">
          <div class="form_control">
            <label for="fname">First name</label>
            <input
              type="text"
              id="fname"
              placeholder="Josua"
              name="fname"
              v-model="firstName"
            />
          </div>
          <div class="form_control">
            <label for="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              placeholder="Baringbing"
              name="lname"
              v-model="lastName"
            />
          </div>
        </div>
        <div class="form_control">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Josbar3001"
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
        <div class="form_control">
          <label for="password">Confirm Password</label>
          <input
            type="password"
            placeholder="******"
            name="password"
            v-model="confirmPassword"
          />
        </div>
        <div class="form_control submit_button relative">
          <input type="submit" value="Register Now" />
          <div class="spinner" v-if="registerLoading">
            <Loader />
          </div>
        </div>
        <div class="text_center">
          Already have an account? <a href="/login">Login</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  head() {
    return {
      title: "Register",
    };
  },
  data() {
    return {
      email: "",
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      confirmPassword: "",
      registerLoading: false,
    };
  },
  methods: {
    async userRegistration() {
      const {
        email,
        firstName,
        lastName,
        username,
        password,
        confirmPassword,
      } = this;
      if (
        !email ||
        !firstName ||
        !lastName ||
        !username ||
        !password ||
        !confirmPassword
      ) {
        alert("Field can not be empty");
        return;
      }
      if (!email.includes("@")) {
        alert("Invalid email address");
        return;
      }
      if (password !== confirmPassword) {
        alert("Passwords do not match")
      }

      try {
        const response = await this.$axios.post("/user/register", {
          email,
          firstName,
          lastName,
          username,
          password,
          confirmPassword,
        });
        this.$router.push('/login');
      } catch (e) {
        console.error(e);
      }
    
    },
  },
};
</script>

<style>
.spinner {
  position: absolute;
  right: -5rem;
  top: -3px;
}
</style>
