<template>
  <div style="margin: 30px;">
    <h2>关于我...</h2>
    <h6>About Me</h6>
    <h6>私について</h6>
    <p>
      Phigros/韵律源点 Arcaea/DanceRail3/音乐世界 Cytus II/古树旋律/花雨旋律/喵斯快跑/Orzmic/调律诗篇/osu!/Malody/原神/崩坏3/Minecraft 玩家
    </p>
    <p>
      Phigros/Arcaea/DanceRail3/Cytus II/Deemo I~II/Muse Dash/Orzmic/Lanota/osu!/Malody/Genshin Impact/Honkai Impact
      3rd/Minecraft player
    </p>
    <p>
      Phigros/Arcaea/DanceRail3/Cytus II/Deemo I~II/Muse Dash/Orzmic/Lanota/osu!/Malody/Genshin Impact/Honkai Impact
      3rd/Minecraft プレイヤー
    </p>
    <a-button
      @click="jump('https://immccn123.notion.site/Genshin-Impact-fad1ef25f3cc4372a8fa6af52f8bc4ab')">Look my
      my Genshin Impact
      activities</a-button>
  </div>
</template>
<script>
export default {
  setup() {
    return {
      jump(url) {
        window.location = url;
      }
    }
  }
}
</script>