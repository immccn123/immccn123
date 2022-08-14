<template>
  <div style="margin: 30px;">
    <h1>友情链接</h1>
    <h6>Links</h6>
    <h6>リンク</h6>
    <a-list bordered :data-source="links">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta :description="item.subtitle">
            <template #title>
              <a :href="item.href">{{ item.title }}</a>
            </template>
            <template #avatar>
              <a-avatar :src="item.avatar" :size="54" />
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script>
export default {
  name: "Links",
  setup() {
    return {
      links: [
        {
          title: 'Rickyxrc',
          subtitle: "immccn123同机房的大佬",
          href: "https://github.com/Rickyxrc",
          avatar: 'https://avatars.githubusercontent.com/u/81732554',
        },
        {
          title: "成都市新津区成外学校",
          subtitle: "immccn123的学校",
          href: "http://www.xjmjxccw.com/#/",
          avatar: 'https://avatars.githubusercontent.com/u/0',
        },
      ],
    };
  },
};
</script>