<style>
v-list-item-group > .router-link-active {
  color: green;
  text-decoration-line: none;
}
footer a {
  color: rgb(58, 58, 58);
  text-decoration-line: none;
}

v-list-item-group a {
  color: black;
  text-decoration-line: none;
}

.v-app-bar a {
  color: black;
  text-decoration-line: none;
}
</style>

<template>
  <v-app
    style="
      background: url('https://s2.loli.net/2022/01/22/d2UHFOXm8h59Y13.jpg')
        no-repeat;
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
    "
  >
    <NavBar v-show="0" />
    <v-main :style="{ 'padding-left': show ? '256px' : '0px' }">
      <v-container style="opacity: 0.8">
        <router-view />
      </v-container>
    </v-main>
    <v-card style="background-color: #cccccc; opacity: 0.8">
      <v-footer class="font-weight-medium" style="background-color: #cccccccc">
        <v-col class="text-center">
          CopyLEFT {{ new Date().getFullYear() }} - <strong>immccn123</strong>
          <br />
          <a href="mailto:immccn123@immccn123.xyz">Mail </a>
          <a href="https://space.bilibili.com/104576155">Bilibili </a>
          <a href="https://www.facebook.com/youxi.luo.31">Facebook </a>
          <a href="https://github.com/immccn123">GitHub </a>
          <a href="https://gitee.com/immccn123">Gitee </a>
          <a href="https://flightaware.com/adsb/stats/user/immccn123">ADSB </a>
          <br>
          <a href="https://ys.mihoyo.com">Genshin Impact UID(CN): 205476456 </a>
          <a href="https://genshin.mihoyo.com"> (ASIA): 844010126</a>
        </v-col>
      </v-footer>
    </v-card>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
  data: () => ({
    show: false,
  }),
};
</script>
