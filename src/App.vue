<style>
.router-link-active {
  color: green;
  text-decoration-line: none;
}

footer a {
  color: rgb(80, 80, 80);
  text-decoration-line: none;
}
</style>

<template>
  <div>
    <a-layout>
      <a-layout-header>
        <TopBar />
      </a-layout-header>
      <a-layout-content>
        <router-view />
      </a-layout-content>
      <a-layout-footer style="background-color: #cccccccc9f">
        <a href="mailto:immccn123@immccn123.xyz">Mail </a>
        <a href="https://space.bilibili.com/104576155">Bilibili </a>
        <a href="https://www.facebook.com/youxi.luo.31">Facebook </a>
        <a href="https://github.com/immccn123">GitHub </a>
        <a href="https://gitee.com/immccn123">Gitee </a>
        <a href="https://flightaware.com/adsb/stats/user/immccn123">ADSB </a>
        <br>
        <a href="https://ys.mihoyo.com">Genshin Impact UID(CN): 205476456 </a>
        <a href="https://genshin.hoyoverse.com"> (ASIA): 844010126</a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue';
export default {
  name: "App",
  components: { TopBar }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Oxygen+Mono|Noto+Sans+SC');
* {
  font-family: 'Oxygen Mono', 'Noto Sans SC';
}

.ant-layout-header {
  padding: 0px !important;
  background-color: #00000000 !important;
}
</style>