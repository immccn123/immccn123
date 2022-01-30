<template>
  <div>
    <v-card>
      <v-alert>各位帮个忙回答一下问卷<a href="https://wj.qq.com/s2/9668331/fc5c">https://wj.qq.com/s2/9668331/fc5c</a></v-alert>
      <v-alert type="warning" v-for="t in tongbao" :key="t"
        >全站通报: {{ t }}，请知悉。</v-alert
      >
      <v-container>
        <v-img
          class="align-center"
          aspect-ratio="2"
          src="https://avatars.githubusercontent.com/u/41335471"
          alt="avatar"
        ></v-img>
        <h4 class="text-h4 text-center">欢迎来到immccn123的小站</h4>
      </v-container>
    </v-card>
    <br />
    <v-card>
      <v-container>
        <h4 class="text-h4">最近总是有一些闲着蛋疼的人来爆破我的服务器</h4>
        <p>现将ip公示如下</p>
        <v-list>
          <v-item-group>
            <v-list-item v-for="item in links" :key="item">
              <v-list-item-content>
                <v-list-item-title v-text="item.ip"></v-list-item-title>
                <v-list-item-subtitle
                  v-text="item.subtitle"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-item-group>
        </v-list>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      tongbao: ["黄澄燚 它（？）是一个彻头彻尾的骗子、美女歌唱家、傻*"],
      links: [
        {
          ip: "1.117.244.143",
          subtitle: "腾讯云服务器，部署了宝塔Linux面板，尝试暴力破解我的服务器的ssh密码失败\n还有一个叫Hoxin-WebCHAT的项目在8080端口跑着（应该是一个未完成项目）",
        },
        {
          ip: "175.178.66.145",
          subtitle: "大概是一个nps内网穿透服务器 似乎盯上我了",
        },
        {
          ip: "81.68.169.2",
          subtitle: "未知细节",
        },
        {
          ip: "78.126.30.114",
          subtitle: "未知细节",
        },
        {
          ip: "91.35.205.242",
          subtitle: "未知细节",
        },
        {
          ip: "43.133.110.206",
          subtitle: "每秒钟20次你好意思吗"
        },
        {
          ip: "83.165.210.166",
          subtitle: "我劝你善良"
        },
        {
          ip: "81.60.136.122",
          subtitle: "连用户名都猜不对你好意思吗"
        },
         {
          ip: "101.43.104.45",
          subtitle: "未知细节"
        },
      ],
    };
  },
};
</script>
