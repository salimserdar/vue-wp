<template>

  <div class="row">
    <div v-for="(post, index) in posts" :key="index" class="col-lg-4">
      <router-link v-bind:to="'/post/' + post.id">{{post.title.rendered}}</router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Posts',
  computed: {
    ...mapState([
      'username',
      'posts',
    ]),
  },
  data() {
    return {

    };
  },
  methods: {
    ...mapActions([
      'updateusername',
      'loadPosts',
    ]),
    updateName() {
      this.updateusername(this.name);
    },
  },
  created() {
    this.loadPosts();
  },
};
</script>

<style>

</style>
