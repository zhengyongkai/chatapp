<script setup lang="ts">
defineProps({
  number: Number,
});
</script>
<template>
  <div class="chat-badge">
    <div class="chat-badge__icons"></div>
    <div class="chat-badge__number">{{ number }}</div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/common.scss";
.chat-badge {
  position: relative;
  .chat-badge__icons {
    position: absolute;
    background: linear-gradient(135deg, #fa2c19 0%, #fa6419 100%);
    padding: 0 5px;
    text-align: center;
    border-radius: 14px;
    z-index: 1;
  }
  .chat-badge__number {
    background: linear-gradient(135deg, #fa2c19 0%, #fa6419 100%);
    padding: 0 5px;
    text-align: center;
    border-radius: 14px;
    font-size: 10px;
    font-weight: 400;
    height: 24px;
    color: #fff;
  }
}
</style>
