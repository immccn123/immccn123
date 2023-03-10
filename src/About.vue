<script setup lang="ts">
import { NSpace } from 'naive-ui'
</script>

<template>
  <div>
    <n-space vertical>
      <n-space justify="center">
        <div style="text-align: left;">
          <h1>About Me / 关于我</h1>
          <div id="name">
            <h2>Name / 名字</h2>
            <p>You can call me immccn123 or Imken.<br>Imken is a readable version of immccn123.</p>
            <p>你可以叫我 immccn123 或 Imken。<br>Imken 是 immccn123 的<i>可读</i>版本。</p>
            <p>I prefer not to reveal my real name, <br>even though you can easily know it.</p>
            <p>不愿透露真实姓名<br>（但是查到它确实很容易啦 看自己啦</p>
          </div>
          <div id="personality">
            <h2>Personality / 性格</h2>
            <p>A Turbulent Campaigner (ENFP-T) based on <a
                href="https://www.16personalities.com/profiles/c92e29682c0f2">16Personalities results</a>.</p>
            <p>16Personalities 的<a href="https://www.16personalities.com/profiles/c92e29682c0f2">测试结果</a>为Turbulent
              Campaigner (ENFP-T)</p>
            <p>性别可能是女（</p>
          </div>
          <div id="interest">
            <h2>Interests / 兴趣</h2>
            <div id="interest/rhythm-games">
              <h3>Rhythm Games / 音游</h3>
              <p>Very suck. / 菜。</p>
              <p style="font-size: smaller; color: #b4b2d3;">
                Malody 4k (1dan) (切力大概 2dan)<br>
                Phigros (Ranking Score: 14.87)<br>
                Arcaea (PTT: 9.93)<br>
                osu!mania 4k (<a href="https://osu.ppy.sh/users/28687186" style="font-size: smaller;">Profile</a>)<br>
                Rotaeno (Ranking: 10.097)<br>
                Muse Dash / ミューズダッシュ<br>
                Project SEKAI COLORFUL STAGE! feat. Hatsune Miku / プロジェクトセカイ カラフルステージ！ feat. 初音ミク<br>
                Lanota<br>
              </p>
            </div>
            <div id="acg">
              <h3>ACGN</h3>
              <p style="font-size: smaller; color: #b4b2d3;">
                原神 / Genshin Impact (Asia / JP Server) (UID: 844010126 (Lv. 45 + 170k))<br>
                明日方舟 / アークナイツ / Arknights (CN Mainland Offical Server) (Name: Imken)<br>
                Blue Archive / ブルーアーカイブ
              </p>
            </div>
            <div id="oi">
              <h3>OI / 信息学竞赛</h3>
              <p>As of Mar. 10, 2023 / 截至2023年3月10日</p>
            </div>
          </div>
          <div id="political-standpoint">
            <h2>Political Standpoint / 政治立场</h2>
            <p style="font-size: x-small;">
              Adhere to the leadership of the Communist Party of China,<br>
              adhere to the guidance of new concepts, new ideas, and new strategies<br>
              for comprehensively governing the country by law,<br>
              and unswervingly follow the path of socialist rule of law with Chinese characteristics.
            </p>
            <p style="font-size: x-small;">
              坚持中国共产党领导，坚持以全面依法治国新理念新思想新战略为指导，坚定不移走中国特色社会主义法治道路。</p>
          </div>
          <div style="height: 50px;"></div>
          <div style="text-align: center;">
            <p>
              This page was last updated on Mar. 10, 2023, and some information may have changed.<br>
              本页面最后更新于2023年3月10日，其中的某些信息可能已经发生改变。
            </p>
            <router-link to="/">Home</router-link>
          </div>
        </div>
      </n-space>
      <n-space justify="center">
        <a target="_blank" href="https://icp.gov.moe/?keyword=20222616">萌ICP备20222616号</a>
      </n-space>
    </n-space>
  </div>
</template>
