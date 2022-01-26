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
    "
  >
    <v-app-bar style="opacity: 0.8">
      <v-app-bar-nav-icon @click="show = !show"></v-app-bar-nav-icon>
      <router-link to="/"
        ><v-toolbar-title>immccn123的小站</v-toolbar-title>
      </router-link>
    </v-app-bar>

    <v-navigation-drawer
      permanent
      :style="{ width: show ? '256px' : '0px' }"
      style="opacity: 0.8"
    >
      <v-list>
        <v-list-item-group>
          <router-link to="/">
            <v-list-item link>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/about">
            <v-list-item link>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/friends">
            <v-list-item link>
              <v-list-item-title>Friends</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/blog">
            <v-list-item link>
              <v-list-item-title>Blog</v-list-item-title>
            </v-list-item>
          </router-link>
          <a href="https://sy.immccn123.xyz">
            <v-list-item link>
              <v-list-item-title>中国双押大词典</v-list-item-title>
            </v-list-item>
          </a>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
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
          <a>Genshin Impact UID(CN): 205476456 (ASIA): 844010126</a>
        </v-col>
      </v-footer>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    show: false,
  }),
};
</script>
