<template>
  <a-result status="404" title="404 Not Found" :sub-title="'Sorry, the page you visited does not exist. 申し訳ありませんが、アクセスしたページは存在しません。'">
    <template #extra>
      <a-button type="primary" @click="$router.replace('/')">Back Home</a-button>
      or
      <a-button @click="$router.go(-1)">Go to Prev Page</a-button>
    </template>
  </a-result>
</template>