<script lang="ts" setup>
import { NSpace, NTooltip, NSkeleton } from 'naive-ui'
</script>

<template>
  <div>
    <n-space vertical>
      <n-space justify="center">
        <img src="https://avatars.githubusercontent.com/u/41335471?v=4" alt="avatar">
        <div>
          <h1>immccn123 (aka Imken)</h1>
          <p>OIer / Software Developer</p>
          <p>Localizer (en -> zh-Hans/zh-CN)</p>
          <p>Rhythm Game Player</p>
          <p>ENFP-T</p>
          <router-link to="/friends">Friend Link</router-link><br>
          <router-link to="/about">About Me</router-link><br>
          <a target="_blank" href="https://blog.immccn123.xyz/">Blog</a>
        </div>
      </n-space>
      <p style="text-align: center;">
        <a target="_blank" href="https://github.com/immccn123">GitHub </a>
        <a target="_blank" href="https://t.me/immccn123">Telegram </a>
        <n-tooltip trigger="hover"><template #trigger><a href="javascript:void(0)">Mail </a></template>immccn123|at|outlook|dot|com</n-tooltip><br>
        <a target="_blank" href="https://discord.gg/JGh6FBtM6Q">Discord (immccn123#7749)</a><br>
        <a target="_blank" href="https://immccn123.notion.site/Genshin-Impact-fad1ef25f3cc4372a8fa6af52f8bc4ab">Genshin
          Impact UID:
          844010126 (Asia)</a><br>
      </p>
      <n-space justify="center">
        <a target="_blank" href="https://icp.gov.moe/?keyword=20222616">萌ICP备20222616号</a>
      </n-space>
    </n-space>
  </div>
</template>

