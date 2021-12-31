<template>
  <div class="table-cell w-1/2 h-full relative">
    <div class="absolute inset-0 h-full w-full 2xl:px-8 xl:px-6 px-0">
      <div class="h-full w-full relative project-pics">
        <div
          class="w-full absolute h-2/5 rounded-xl top-0 hover:-top-1/5 right-0"
        >
          <img
            :src="pics[3].pic"
            :alt="pics[3].alt"
            class="absolute inset-0 h-full w-full"
          />
        </div>
        <div
          class="w-full absolute h-2/5 rounded-xl top-1/5 hover:top-0 right-0"
        >
          <img
            :src="pics[2].pic"
            :alt="pics[2].alt"
            class="absolute inset-0 h-full w-full"
          />
        </div>
        <div
          class="w-full absolute h-2/5 rounded-xl top-2/5 hover:top-1/5 right-0"
        >
          <img
            :src="pics[1].pic"
            :alt="pics[1].alt"
            class="absolute inset-0 h-full w-full"
          />
        </div>
        <div class="w-full absolute h-2/5 rounded-xl top-3/5 right-0">
          <img
            :src="pics[0].pic"
            :alt="pics[0].alt"
            class="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsCardPics',
  props: ['pics'],
}
</script>

<style>
.project-pics > div {
  transition: 300ms ease-out;
  overflow: hidden;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.5);
}
</style>
