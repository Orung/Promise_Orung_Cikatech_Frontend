<template>
  <nav>
    <div>
      <h1><nuxt-link to="/">Logo</nuxt-link></h1>
    </div>
    <div class="relative">
      <div class="togglebar" @click="toggleNav">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>
      <ul class="nav_item" :class="isMobile ? 'show_mobile' : 'hide_mobile'">
        <li class="user_name">
          <template v-if="$auth.loggedIn">{{ $auth.user.username }}</template>
          <template v-else>Josbar3001 </template>
          <br />
          <span>Product designer</span>
        </li>
        <li>
          <button class="btn btn_logout cursor-pointer" @click="logOut()">Logout</button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMobile: true,
    };
  },
  mounted() {
    if (window.innerWidth < 900) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  },
  methods: {
    toggleNav() {
      console.log((this.isMobile = !this.isMobile));
    },

    async logOut() {
      await this.$auth.logout();
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped></style>
