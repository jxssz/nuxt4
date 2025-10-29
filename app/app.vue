<template>
  <div id="app">
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
onMounted(() => {
  useHead({
    script: [
      {
        // src: "http://59.218.237.193:8002/backend/watermark/web-config/js/1002",
        // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
      },
    ],
  });
});
</script>
<style>
html,
body {
  padding: 0;
  margin: 0;
}
* {
  box-sizing: border-box;
}
#app {
}
</style>
