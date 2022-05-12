<template>
  <div>
    <h1>Data fetched using asyncData</h1>
    <ul>
      <li v-for="mountain in mountains" :key="mountain.title">
        <NuxtLink
          :to="{ name: 'mountains-slug', params: { slug: mountain.slug } }"
        >
          {{ mountain.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    const mountains = await $axios.$get('https://api.nuxtjs.dev/mountains')
    return { mountains }
  }
}
</script>
