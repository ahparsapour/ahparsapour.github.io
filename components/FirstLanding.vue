<template>
  <div class="h-100vh items-center w-full">
    <div class="flex-row lg:flex">
      <div
        class="lg:w-1/3 align-middle items-center 2xl:w-1/5 xl:w-1/4 pt-8 pb-4 px-4 mb-2 lg:mb-0 w-full"
      >
        <div class="my-auto sticky top-2">
          <img
            :src="about.image"
            alt="My Image"
            class="rounded-full border-4 w-44 maxw-full mx-auto with-border"
          />
          <about-card :about="about" />
        </div>
      </div>
      <div class="lg:w-2/3 2xl:w-4/5 xl:w-3/4 pt-8 pb-4 px-4 w-full">
        <projects-card :projects="projects" />
      </div>
    </div>
  </div>
</template>

<script>
import AboutCard from './AboutCard.vue'
import ProjectsCard from './ProjectsCard.vue'
export default {
  components: { AboutCard, ProjectsCard },
  name: 'FirstLanding',
  props: ['about', 'projects'],
}
</script>

<style>
.h-100vh {
  height: 100vh !important;
}

.with-bg {
  background-color: #f8cd55c7;
}

.with-border {
  border: 3px solid #25a5be;
}
</style>
