<script lang="ts" setup>
import { NList, NListItem, NThing, NConfigProvider, NSpace, NAvatar } from 'naive-ui';
import { darkTheme } from 'naive-ui';

interface Link {
    avatar: string;
    name: string;
    link: string;
}

var linkList: [Link] = [
    {
        avatar: 'https://avatars.githubusercontent.com/u/81732554',
        name: 'Rickyxrc',
        link: 'https://rickyxrc.top/'
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/84607814',
        name: 'dsy4567 的小站',
        link: 'https://dsy4567.cf/'
    }
]
</script>

<template>
    <n-config-provider :theme="darkTheme">
        <div style="text-align: center;">
            <h1>Friend Link</h1>
            <n-list>
                <n-list-item v-for="i in linkList">
                    <n-space justify="center">
                        <n-thing>
                            <template #avatar>
                                <n-avatar size="small" :src="i.avatar">
                                </n-avatar>
                            </template>
                            <template #header>
                                <a :href="i.link">{{ i.name }}</a>
                            </template>
                        </n-thing>
                    </n-space>
                </n-list-item>
            </n-list>
            <a href="https://blog.immccn123.xyz/friend-link-exchange" target="_blank">Exchange your link with me / 友链互换</a>
            <ul style="list-style: none;"></ul>
            <router-link to="/">Home</router-link><br>
            <a href="https://icp.gov.moe/?keyword=20222616">萌ICP备20222616号</a>
        </div>
    </n-config-provider>
</template>
