<template>
  <div style="background-color: #000d12;width: 100%;height: 100vh;">
    <div id="screen-scale">
      <div style="position: fixed">
        页面等比例缩放
        <p>1920*1080</p>
      </div>
      <img src="https://file.tob.design/4e90/gif/4e90c056-cfeb-4077-81f1-105d1548d10f.gif" alt="" style="width: 100%; height: auto; top: 0%" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";

function resize(params) {
  const winW = window.innerWidth;
  const winH = window.innerHeight;
  const scale = Math.min(winW / params.designWidth, winH / params.designHeight);

  params.app.style.transform = `scale(${scale})`;
  // 保持水平居中
  params.app.style.left = (winW - params.designWidth * scale) / 2 + "px";
  params.app.style.top = (winH - params.designHeight * scale) / 2 + "px";
  params.app.style.position = "absolute";
}

// 节流
function throttle(fn, delay = 100) {
  let timer = null;
  return function (...args) {
    if (timer) return;
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, delay);
  };
}

onMounted(() => {
  const params = {
    app: document.getElementById("screen-scale"),
    designWidth: 1920,
    designHeight: 1080,
  };
  resize(params);
  const handleResize = throttle(() => resize(params), 500);
  window.addEventListener("resize", handleResize);
  onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
  });
});
</script>
<style>
#screen-scale {
  transform-origin: 0 0; /* 从左上角缩放 */
  width: 1920px;
  height: 1080px;
  background-color: aqua;
  display: grid;
}
</style>
