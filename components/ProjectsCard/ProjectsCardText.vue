<template>
  <div class="table-cell relative w-1/2 h-full">
    <div class="absolute inset-0 p-3 overflow-hidden">
      <div class="text-center w-full text-xl text-fill font-medium">{{name}}</div>
      <div class="table mt-4 project-text overflow-hidden mx-4 xl:mx-12">
        <div class="table-row h-full">
          <div
            class="text-justify text-base text-fill truncate whitespace-normal table-cell align-middle"
          >
            {{desc}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsCardText',
  props: ['name', 'desc']
}
</script>

<style>
.project-text {
  height: calc(100% - 1rem - 28px);
}
</style>
