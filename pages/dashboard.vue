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
    <div class="horizontalCenter" v-if="isLoading"><Loader /></div>
    <div class="card_post" v-for="post in posts" :key="post.id">
      <div class="user_post">
        <h5>{{ post.author }}</h5>
        <div class="cursor-pointer">
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
      </div>
      <div class="post-content">
        <p>
          {{ post.content }}
        </p>
      </div>
      <div class="divider"></div>
      <div class="card_footer post_date">
        <p>{{ new Date(post.created_at).toLocaleString() }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
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
  computed: {
    ...mapState({
      posts: (state) => state.posts,
      isLoading: (state) => state.isLoading,
    }),
  },
  mounted() {
    this.$store.dispatch("getPosts");
  },
  methods: {
    async addPost() {
      const { content } = this;
      if (content) {
        this.$store.dispatch("createPost", content);
      }
    },
    async deletePost(id) {
      this.axios.delete(`/api/post/delete/${postId}`).then((result) => {
        this.addPost();
      });
    },
  },
};
</script>

<style scoped>
button {
  cursor: pointer;
}
</style>
