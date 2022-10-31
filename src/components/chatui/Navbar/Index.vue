<script setup lang="ts">
import { defineProps } from "vue";
defineProps({
  backto: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
  },
});
</script>

<template>
  <div class="chat-navbar">
    <div class="chat-navbar__left">
      <nut-icon name="left" v-show="backto"></nut-icon>
    </div>
    <div class="chat-navbar__title">
      {{ title }}
    </div>
    <div class="chat-navbar__right" v-show="title">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/common.scss";
.chat-navbar {
  @include df-al-center;
  @include fx-top;
  box-sizing: border-box;
  padding: $--body-common-padding;
  background: $--bg-color-gray;
  height: 44px;
  box-shadow: $--box-common-shallow;
  .chat-navbar__left,
  .chat-navbar__right {
    font-size: 14px;
    @include df-al-center;
    width: 10%;
    i {
      margin-top: 3px;
    }
  }
  .chat-navbar__right {
    text-align: right;
  }
  .chat-navbar__title {
    @include box-center;
    width: 80%;
  }
}
</style>
