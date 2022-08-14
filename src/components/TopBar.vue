<template>
    <a-menu v-model:selectedKeys="current" mode="horizontal">
        <a-menu-item key="home">
            <router-link to="/">Home</router-link>
        </a-menu-item>
        <a-menu-item key="about">
            <router-link to="/about">About</router-link>
        </a-menu-item>
        <a-menu-item key="links">
            <router-link to="/links">Links</router-link>
        </a-menu-item>
    </a-menu>
</template>
<script>
import { ref } from 'vue';
export default {
    name: "TopBar",
    data() {
        const current = ref<String>(['home'])
        return {
            current
        }
    }
}
</script>