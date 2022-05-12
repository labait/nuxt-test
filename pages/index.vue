<template>
  <div>
    <Headline/>
    <div class="container">
      <div class="row">
        <div class="col">
          <NuxtLink to="/about">about me</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .home-enter-active, .home-leave-active { transition: opacity .5s; }
  .home-enter, .home-leave-active { opacity: 0; }
</style>

<script>
export default {
  name: 'IndexPage'
}
</script>
