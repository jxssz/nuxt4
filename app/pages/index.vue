<template>
  <v-responsive class="border rounded">
    <v-app :theme="theme">
      <v-app-bar class="px-3">
        <v-spacer> log </v-spacer>

        <v-btn :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" text="" slim @click="onClick"></v-btn>
      </v-app-bar>

      <v-main>
        <v-container>
          <h1>1</h1>
          <div class="d-flex">
            <v-list lines="two" class="justify-center">
              <!-- <v-row justify="center"> -->
              <!-- <v-col> -->
              <NuxtLink :prefetch="false" :to="{ name: 'detail-id', params: { id: n } }" v-for="n in 30" :key="n">
                <v-list-item>
                  <v-list-item-title>Option {{ n }}</v-list-item-title>
                  <v-list-item-subtitle>{{ "Lorem ipsum dolor sit amet consectetur adipisicing elit哒哒哒大帅大帅大帅大帅大帅elit哒哒哒大帅大帅大帅大帅大帅" }}</v-list-item-subtitle>
                </v-list-item>
              </NuxtLink>
              <!-- </v-col> -->
              <!-- </v-row> -->
            </v-list>
          </div>
          <img src="https://cnucoss.yshgxs.com/unicombucket/dstation/product_image/1741057736636376304.jpg" referrerpolicy="origin" alt="" style="width: 100%; height: auto" />
          <img src="http://10.19.32.226:8082/gxsjdstationtest/c89ba9d48aaf56493b83999d5cebcf71.jpeg" referrerpolicy="origin" alt="" style="width: 100%; height: auto" />
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
  <!-- <div>
    <ul>
      <li>
        <NuxtLink to="/demo/screen-scale">页面等比例缩放</NuxtLink>
      </li>
      <v-btn> Button </v-btn>
    </ul>
  </div> -->
</template>
<script setup>
import { ref, onMounted } from "vue";
onMounted(() => {
  // fetch("https://sjdztest.yshgxs.com/gxsjdstationtest/c89ba9d48aaf56493b83999d5cebcf71.jpeg", {
  //   method: "GET",
  //   referrerPolicy: 'origin',
  //   referrer: 'https://*.yshgxs.com/*',
  //   headers: {
  //     Referer: "https://*.yshgxs.com/*",
  //   },
  // });
});
const theme = ref("light");

function onClick() {
  theme.value = theme.value === "light" ? "dark" : "light";
}
</script>
