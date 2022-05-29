<style>
v-list-item-content a {
  color: black;
  text-decoration: none;
}
</style>

<template>
  <v-card>
    <v-container>
      <h4 class="text-h4">友情链接</h4>
    </v-container>
  </v-card>
  <br />
  <v-card>
    <v-list>
      <v-item-group>
        <v-list-item v-for="item in links" :key="item">
          <v-list-item-content>
            <a :href="item.href">
              <v-list-item-title v-text="item.title"></v-list-item-title>
              <v-list-item-subtitle
                v-text="item.subtitle"
              ></v-list-item-subtitle>
            </a>
          </v-list-item-content>
        </v-list-item>
      </v-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "Friends",
  data() {
    return {
      links: [
        {
          title: "Rickyxrc",
          subtitle: "immccn123同机房的大佬",
          href: "https://github.com/Rickyxrc",
        },
        {
          title: "成都市新津区成外学校",
          subtitle: "immccn123的学校",
          href: "http://www.xjmjxccw.com/#/",
        },
      ],
    };
  },
};
</script>