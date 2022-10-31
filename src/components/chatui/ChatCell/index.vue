<script setup lang="ts">
defineProps({
  icon: String,
  title: String,
  call: Number,
});
</script>
<template>
  <div class="chat-cell">
    <div class="chat-cell__icon">
      <img :src="icon" />
    </div>
    <div class="chat-cell__title">
      {{ title }}
    </div>
    <div class="chat-cell__call"></div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/common.scss";
.chat-cell {
  @include df-al-center;
  position: relative;
  height: 48px;
  width: 100%;
  padding: $--body-common-padding;
  font-size: 14px;
  background-color: $--bg-color-white;
  &::after {
    content: "";
    border-bottom: 1px solid #eee;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .chat-cell__icon {
    margin-right: 12px;
    img {
      width: 30px;
      height: 30px;
      border-radius: 5px;
      padding: 0;
      margin-bottom: -10px;
    }
  }
}
</style>
