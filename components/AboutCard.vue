<template>
  <div
    class="min-h-2/3 h-fit rounded-3xl with-bg with-border mx-auto mt-4 mb-4 p-2 pt-8"
  >
    <div class="text-center">
      <h3 class="font-semibold text-xl text-fill text-center">
        {{ about.name }}
      </h3>
    </div>
    <div class="text-center mt-6">
      <div class="text-lg text-center text-fill opacity-90">
        <p v-for="item in about.titles" :key="item">{{ item }}<br /></p>
      </div>
    </div>
    <div class="text-center mt-6" dir="ltr">
      <div class="text-md text-center text-fill opacity-80">
        <font-awesome-icon :icon="['fas', 'envelope']" class="mr-2" />
        {{ about.email }}<br />
        <font-awesome-icon :icon="['fab', 'twitter']" class="mr-2" />
        {{ about.twitter }}
        <br />
        <font-awesome-icon :icon="['fab', 'github']" class="mr-2" />
        {{ about.github }}
        <br />
        <font-awesome-icon :icon="['fab', 'instagram']" class="mr-2" />
        {{ about.instagram }}
      </div>
    </div>
    <div class="mt-6 w-full px-4 mb-4" dir="ltr">
      <div
        class="flex mt-2 h-4 items-center"
        v-for="skill in about.skills"
        :key="about.skills.indexOf(skill)"
      >
        <div class="w-1/4 text-left text-fill uppercase">{{ skill.name }}</div>
        <div class="w-3/4 h-full text-right">
          <div class="w-full h-full bg-gray-400 rounded-xl">
            <div
              class="h-full rounded-xl bg-custom"
              :style="{ width: `${skill.percent}% !important` }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutCard',
  props: ['about'],
}
</script>

<style>
.text-fill {
  color: #284b63 !important;
}

.bg-custom {
  background-color: #3c6e71 !important;
}
</style>
