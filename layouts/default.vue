<script setup lang="ts"></script>

<template>
  <main>
    <nav>
      <NuxtLink to="/">首頁</NuxtLink>
      <NuxtLink to="rooms">客房旅宿</NuxtLink>
      <NuxtLink to="member/signin">會員登入</NuxtLink>
      <NuxtLink to="rooms">立即訂房</NuxtLink>
    </nav>
    <slot />
  </main>
</template>

<style scoped></style>
