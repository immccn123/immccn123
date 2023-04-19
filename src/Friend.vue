<script lang="ts" setup>
import {
  NList, NListItem, NThing,
  NConfigProvider, NSpace, NAvatar, NCard,
  NGrid, NGridItem
} from 'naive-ui';
import { lightTheme } from 'naive-ui';
import { ref } from 'vue';

interface Link {
  avatar: string;
  name: string;
  link: string;
  description?: string;
}

var linkList: Link[] = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/81732554',
    name: 'Rickyxrc',
    link: 'https://rickyxrc.top/',
    description: 'Frontend/Backend Developer\nOIer',
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/84607814',
    name: 'dsy4567 的小站',
    link: 'https://dsy4567.cf/',
    description: '站长很懒，不想写网站介绍',
  },
]

const col = ref(2);

const R = () => {
  if (document.documentElement.clientWidth < 900) col.value = 1;
  else col.value = 2;
}

var linkListLeft: Link[] = [], linkListRight: Link[] = [];

for (var i = 0; i < linkList.length; i += 1) {
  if (i % 2 == 0) {
    linkListLeft.push(linkList[i]);
  } else {
    linkListRight.push(linkList[i]);
  }
}

window.addEventListener('resize', R);
R();
</script>

<template>
  <n-config-provider :theme="lightTheme">
    <div style="text-align: center;">
      <h1>Links</h1>
      <n-space justify="center">
        <n-grid x-gap="12" :cols="col">
          <n-grid-item>
            <n-list>
              <n-list-item v-for="i in linkListLeft">
                <n-card embedded hoverable>
                  <n-thing>
                    <template v-if="i.description" #description>
                      <pre style="text-align: left; margin-top: 0px;">{{ i.description }}</pre>
                    </template>
                    <template #avatar>
                      <n-avatar :size="64" :src="i.avatar">
                      </n-avatar>
                    </template>
                    <template #header>
                      <a :href="i.link" target="_blank">{{ i.name }}</a>
                    </template>
                  </n-thing>
                </n-card>
              </n-list-item>
            </n-list>
          </n-grid-item>
          <n-grid-item>
            <n-list>
              <n-list-item v-for="i in linkListRight">
                <n-card embedded hoverable>
                  <n-thing>
                    <template v-if="i.description" #description>
                      <pre style="text-align: left; margin-top: 0px;">{{ i.description }}</pre>
                    </template>
                    <template #avatar>
                      <n-avatar :size="64" :src="i.avatar">
                      </n-avatar>
                    </template>
                    <template #header>
                      <a :href="i.link" target="_blank">{{ i.name }}</a>
                    </template>
                  </n-thing>
                </n-card>
              </n-list-item>
            </n-list>
          </n-grid-item>
        </n-grid>
      </n-space>
      <a href="https://blog.immccn123.xyz/friend-link-exchange" target="_blank">Make a Friend? /
        友链互换</a>
      <ul style="list-style: none;"></ul>
      <router-link to="/">Home</router-link><br>
      <a href="https://icp.gov.moe/?keyword=20222616">萌ICP备20222616号</a>
    </div>
  </n-config-provider>
</template>


<style scoped>
.n-card {
  border-radius: 10px;
}

.n-list-item,
.n-card__content {
  font-family: 'Fira Code', 'Noto Sans SC' !important;
  font-size: 18px;
  background-color: #fbeeec;
  width: 400px;
}

.n-avatar {
  background-color: #00000000;
}

pre {
  font-family: 'Fira Code', 'Noto Sans SC' !important;
  font-size: 14px;
}
</style>
