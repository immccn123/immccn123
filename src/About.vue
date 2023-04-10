<script setup lang="ts">
import { NSpace, NBackTop } from 'naive-ui'
</script>

<template>
  <div>
    <n-back-top :right="100" />
    <n-space vertical>
      <n-space justify="center">
        <div style="text-align: left;">
          <h1>About Me / 关于我</h1>
          <div id="name">
            <h2>Name / 名字</h2>
            <p>You can call me immccn123 or Imken (アイメケン) [aimeken].<br>Imken is a readable version of immccn123.</p>
            <p>你可以叫我 immccn123 或 Imken (アイメケン) [aimeken]。<br>Imken 是 immccn123 的<i>可读</i>版本。</p>
            <p>I prefer not to reveal my real name, <br>even though you can easily know it.</p>
            <p>不愿透露真实姓名<br>（但是查到它确实很容易啦 看自己啦</p>
          </div>
          <div id="personality">
            <h2>Personality / 性格</h2>
            <p>A Turbulent Campaigner (ENFP-A) based on <a
                href="https://www.16personalities.com/profiles/c92e29682c0f2">16Personalities results</a>.</p>
            <p>16Personalities 的<a href="https://www.16personalities.com/profiles/c92e29682c0f2">测试结果</a>为Turbulent
              Campaigner (ENFP-A)</p>
            <p>MAYBE a girl?</p>
            <p>性别可能是女（</p>
          </div>
          <div id="interest">
            <h2>Interests / 兴趣</h2>
            <div id="interest/rhythm-games">
              <h3>Rhythm Games / 音游</h3>
              <p>Very suck. / 菜。</p>
              <p style="font-size: smaller; color: #8d8ba3;">
                Malody 4k (1dan) (切力大概 2dan)<br>
                Phigros (Ranking Score: 14.88)<br>
                Arcaea (PTT: 10.08)<br>
                osu!mania 4k (<a href="https://osu.ppy.sh/users/28687186" style="font-size: smaller;">Profile</a>)<br>
                Rotaeno (Ranking: 11.097)<br>
                Muse Dash / ミューズダッシュ<br>
                Project SEKAI COLORFUL STAGE! feat. Hatsune Miku / プロジェクトセカイ カラフルステージ！ feat. 初音ミク<br>
                Lanota<br>
                Orzmic (Rating 12.24)<br>
              </p>
            </div>
            <div id="acg">
              <h3>ACGN</h3>
              <p style="font-size: smaller; color: #8d8ba3;">
                原神 / Genshin Impact (Asia / JP Server) (UID: 844010126 (Lv. 45 + 170k))<br>
                明日方舟 / アークナイツ / Arknights (CN Mainland Offical Server) (Name: Imken)<br>
                Blue Archive / ブルーアーカイブ
              </p>
            </div>
            <div id="oi">
              <h3>OI / 信息学竞赛</h3>
              <p>As of Apr. 4, 2023 / 截至2023年4月4日</p>
            </div>
          </div>
          <div id="political-standpoint">
            <h2>Political Standpoint / 政治立场</h2>
            <p>F**k politics. Idiots, why politicize everything?</p>
            <p>去**的政治。有些*[文明]*能不能不要什么都扯到政治上啊？</p>
          </div>
          <div style="height: 50px;"></div>
          <div style="text-align: center;">
            <p>
              Last updated on Apr. 4, 2023. Some information may have changed.<br>
              本页面最后更新于2023年4月4日，其中的某些信息可能已经发生改变。
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
