<template>
  <div class="home_page">
    <Header />
    <h1 class="mt-5">Update your activity</h1>
    <div class="card_post">
      <div>
        <div class="post_review">
          <textarea rows="4" cols="50" v-model="content"></textarea>
        </div>
      </div>
      <div class="divider"></div>
      <div class="card_footer action-btn">
        <button class="btn btn_cancel">Cancel</button>
        <button class="btn btn_post" @click="addPost">Post</button>
      </div>
    </div>
    <div class="card_post">
      <div class="user_post">
        <h5>Josua30001</h5>
        <svg
          width="14"
          height="4"
          viewBox="0 0 14 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.75 0.5C0.925 0.5 0.25 1.175 0.25 2C0.25 2.825 0.925 3.5 1.75 3.5C2.575 3.5 3.25 2.825 3.25 2C3.25 1.175 2.575 0.5 1.75 0.5ZM12.25 0.5C11.425 0.5 10.75 1.175 10.75 2C10.75 2.825 11.425 3.5 12.25 3.5C13.075 3.5 13.75 2.825 13.75 2C13.75 1.175 13.075 0.5 12.25 0.5ZM7 0.5C6.175 0.5 5.5 1.175 5.5 2C5.5 2.825 6.175 3.5 7 3.5C7.825 3.5 8.5 2.825 8.5 2C8.5 1.175 7.825 0.5 7 0.5Z"
            fill="#1A202C"
          />
        </svg>
      </div>
      <div class="post-content">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div class="divider"></div>
      <div class="card_footer post_date">
        <p>17 Aug 2021, 10.00 PM</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  auth: false,
  head() {
    return {
      title: "Home",
    };
  },
  data() {
    return {
      content: "",
    };
  },
  methods: {
    async asyncData({ params, $axios }) {
      const posts = await $axios.get("/post/get");
      console.log(posts);
      return { posts };
    },
    async addPost() {
      const { content } = this;
      try {
        const response = await this.$axios.post("/post/create", {
          content,
        });
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style scoped>
button {
  cursor: pointer;
}
</style>
