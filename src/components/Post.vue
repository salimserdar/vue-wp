<template>
    <article>
        <h2>{{post.title}}</h2>
        <div v-html="post.content"></div>
    </article>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Post',
  props: ['id'],
  data() {
    return {
      post: {
        id: this.$route.params.id,
        title: '',
        content: '',
      },
    };
  },
  created() {
    axios.get(`http://localhost:8888/react-wp/wp-json/wp/v2/posts/${this.post.id}`)
      .then((res) => {
        this.post.title = res.data.title.rendered;
        this.post.content = res.data.content.rendered;
      });
  },
};
</script>
