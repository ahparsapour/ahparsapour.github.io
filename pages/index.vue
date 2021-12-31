<template>
  <first-landing :about="about" :projects="projects" />
</template>

<script>
import FirstLanding from '~/components/FirstLanding.vue'
export default {
  components: { FirstLanding },
  name: 'IndexPage',
  async asyncData({ $content }) {
    const about = await $content('about').fetch()
    const projects = await $content('projects').fetch()
    return { about, projects }
  },
}
</script>

<style>
html {
  background-color: #92cbdf;
  direction: rtl !important;
  font-family: 'Sahel', 'Roboto', sans-serif !important;
}
</style>
