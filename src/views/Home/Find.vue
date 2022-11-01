<script setup lang="ts">
import { getAssetsImages } from "@/utils/common";
const friendFind = getAssetsImages("friendFind.png");
const seeFind = getAssetsImages("seeFind.png");
const scanFind = getAssetsImages("scanFind.png");
const gameFind = getAssetsImages("gameFind.png");
</script>

<template>
  <div class="chat-main">
    <chat-nav-bar :title="'发现'"> </chat-nav-bar>
    <div class="chat-content cell-group">
      <div class="cell-group__content">
        <chat-simple-cell :icon="friendFind" title="朋友圈">
          <template #news><chat-badge :number="12" /></template>
        </chat-simple-cell>
        <chat-simple-cell :icon="seeFind" title="看一看"></chat-simple-cell>
        <chat-simple-cell :icon="scanFind" title="扫一扫"></chat-simple-cell>
        <chat-simple-cell :icon="gameFind" title="游戏">
          <template #news> 你有一条新的王者咨询 </template>
        </chat-simple-cell>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/common.scss";
.cell-group {
  .cell-group__content {
    > div {
      margin-bottom: 8px;
    }
  }
}
</style>
