<script setup lang="ts">
defineProps({
  number: Number,
});
</script>
<template>
  <div class="chat-badge">
    <div class="chat-badge__number">{{ number }}</div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/common.scss";
.chat-badge {
  position: relative;
  vertical-align: middle;
  display: inline-block;
  .chat-badge__number {
    color: $--text-color-white;
    background-color: #f56c6c;
    border-radius: 10px;
    display: inline-block;
    font-size: 12px;
    height: 18px;
    line-height: 18px;
    padding: 0 6px;
    text-align: center;
    white-space: nowrap;
    border: 1px solid #fff;
  }
}
</style>
