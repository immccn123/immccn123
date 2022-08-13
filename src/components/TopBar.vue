<template>
    <a-menu v-model:selectedKeys="current" mode="horizontal">
    <a-menu-item key="home">
        <router-link to="/">Home</router-link>
    </a-menu-item>
    <a-menu-item key="about">
        <router-link to="/about">About</router-link>
    </a-menu-item>
    </a-menu>
</template>
<script>
export default {
    name: "TopBar"
}
</script>