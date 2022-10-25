<style>
footer a {
  color: rgb(80, 80, 80);
  text-decoration-line: none;
}
</style>

<template>
  <a-layout id="wrapper">
    <div id="content">
      <a-layout-header id="header">
        <a-affix :offset-top="top">
          <top-bar />
        </a-affix>
      </a-layout-header>
      <a-layout-content>
        <router-view v-slot="{ Component }">
          <transition name="scale" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </a-layout-content>
    </div>
    <a-layout-footer style="background-color: #cccccccc9f" id="footer">
      <a href="mailto:immccn123@jumpticket.games">Mail </a>
      <a href="https://space.bilibili.com/104576155">Bilibili </a>
      <a href="https://github.com/immccn123">GitHub </a>
      <br>
      <p>Genshin Impact UID (ASIA): 844010126<br>Discord: immccn123#7749</p>
      <a href="https://icp.gov.moe/?keyword=20222616" target="_blank">萌ICP备20222616号</a>
    </a-layout-footer>
  </a-layout>
  <div style="position: fixed; z-index: 20; bottom: 20px; right: 20px;">
    <a-button type="primary" @click="visible = !visible" shape="circle" :size="'large'">
      <template #icon>
        <play-circle-outlined />
      </template>
    </a-button>
    <a-drawer v-model:visible="visible" title="Music Player" placement="right">
      <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=450
        src="//music.163.com/outchain/player?type=0&id=7588907133&auto=1&height=430"></iframe>
    </a-drawer>
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue';
import { PlayCircleOutlined } from '@ant-design/icons-vue';

export default {
  name: "App",
  components: { TopBar, PlayCircleOutlined },
  computed: {
    getHeight() {
      return window.innerHeight;
    }
  },
  data() {
    return {
      visible: true
    }
  }
};
console.log()
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

.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}


.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

body {
  height: 100%;
}

#content {
  overflow: hidden;
}
</style>
