<template>
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
</template>

<script>
export default {
  name: "NavBar",
};
</script>
