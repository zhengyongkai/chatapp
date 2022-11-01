<script setup lang="ts">
import { useRouter } from "vue-router";

defineProps({
  backto: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
  },
});

const router = useRouter();
function onBack() {
  router.go(-1);
}
</script>

<template>
  <div class="chat-navbar">
    <div class="chat-navbar__left">
      <nut-icon name="left" v-show="backto" @click="onBack"></nut-icon>
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
