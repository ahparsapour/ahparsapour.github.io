<template>
  <div
    class="project-card rounded-3xl w-full with-bg with-border mx-auto mt-4 mb-4 p-3 pb-0"
  >
    <div class="text-center font-semibold text-2xl text-fill mb-4">
      پروژه های انجام شده
    </div>
    <div class="w-full custom-h mt-3 flex" dir="ltr">
      <div
        class="h-full w-0 slide"
        :class="{ 'w-full': selectedSlide === e.id }"
        v-for="e in projects"
        :key="e.id"
        @mouseenter="stopAutoScroll()"
        @mouseleave="startAutoScroll()"
      >
        <div class="sm:table h-full w-full" dir="rtl">
          <div class="h-full sm:table-row">
            <projects-card-text :name="e.name" :desc="e.desc" :link="e.link"/>
            <projects-card-pics :pics="e.pics" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="text-center justify-center items-center flex indicators"
      dir="ltr"
    >
      <div
        v-for="e in projects"
        :key="e.id"
        class="rounded-full indicator"
        @click="selectedSlide = e.id"
        :class="{ 'indicator-active': selectedSlide === e.id }"
      ></div>
    </div>
  </div>
</template>

<script>
import ProjectsCardText from './ProjectsCard/ProjectsCardText.vue'
export default {
  components: { ProjectsCardText },
  name: 'ProjectsCard',
  props: ['projects'],
  data() {
    const slideCount = this.projects.length
    return {
      selectedSlide: this.projects[0].id,
      selectedSlideIndex: 0,
      slideCount,
      interval: 0,
      autoSlideTimeout: 5000,
    }
  },
  methods: {
    next() {
      if (this.selectedSlideIndex == this.slideCount - 1) {
        this.selectedSlideIndex = 0
      } else {
        this.selectedSlideIndex++
      }

      this.selectedSlide = this.projects[this.selectedSlideIndex].id
    },

    stopAutoScroll() {
      clearInterval(this.interval)
    },

    startAutoScroll() {
      this.interval = setInterval(() => {
        this.next()
      }, this.autoSlideTimeout)
    },
  },

  mounted() {
    this.startAutoScroll()
  },

  beforeDestroy() {
    clearInterval(this.interval)
  },
}
</script>

<style>
.text-fill {
  color: #284b63 !important;
}

.bg-custom {
  background-color: #3c6e71 !important;
}

.custom-h {
  height: calc(100% - 1.5rem - 32px - 32px);
}

.indicator {
  width: 20px;
  height: 20px;

  background: #35353573;
}

.indicators {
  height: calc(32px + 0.75rem);
}

.indicator:not(:last-child) {
  margin-right: 7px;
}

.indicator.indicator-active {
  background-color: #3c6e71 !important;
}

.project-card {
  height: 600px;
}

.slide {
  transition: 450ms linear;
  left: 0;
}

.slide:not(.w-full) {
  overflow: hidden;
}

html {
  overflow-x: hidden;
}
</style>
