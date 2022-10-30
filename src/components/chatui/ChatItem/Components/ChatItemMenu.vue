<script setup lang="ts">
import { defineProps } from "vue";
defineProps({
  postion: String,
});
</script>

<template>
  <div class="chat-menu__main">
    <div>删除该聊天</div>
    <div>置顶该聊天</div>
    <div>标为未读</div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/common.scss";
.chat-menu__main {
  position: absolute;
  width: 120px;
  background-color: #fff;
  height: 140px;
  font-size: 16px;
  box-shadow: $--box-common-shallow;
  div {
    height: 40px;
    padding: 10px 10px;
  }
}
</style>
