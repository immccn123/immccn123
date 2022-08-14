<template>
    <a-menu mode="horizontal">
        <a-menu-item key="home">
            <router-link to="/">Home</router-link>
        </a-menu-item>
        <a-menu-item key="about">
            <router-link to="/about">About</router-link>
        </a-menu-item>
        <a-menu-item key="links">
            <router-link to="/links">Links</router-link>
        </a-menu-item>
        <a-menu-item key="blog">
            <a href="https://blog.immccn123.xyz">Blog</a>
        </a-menu-item>
    </a-menu>
</template>
<script>
export default {
    name: "TopBar",
}
</script>