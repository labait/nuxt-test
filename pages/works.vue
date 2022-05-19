<template>
  <div id="works" class="container">
    <h1>works</h1>
    <div class="row">
      <div v-for="work in works" :key="work.rendered" class="col-12 col-md-4">
        <div class="h2">{{ work.title.rendered }}</div>
        <img :src="`${work._embedded['wp:featuredmedia']['0'].source_url}`" class="img-fluid" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData({ $axios }) {
      const works = await $axios.$get('http://localhost:8888/projects/laba/wordpress_headless/wp-json/wp/v2/works?_embed')
      return { works }
    }
  }
</script>
