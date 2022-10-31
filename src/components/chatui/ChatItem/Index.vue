<script lang="ts">
import type { UserType } from "@/types/user";
interface messageContent {
  type: string;
  message: string;
  time: string;
  voice: boolean;
  user: UserType;
}
</script>
<script setup lang="ts">
import { defineProps, computed, ref } from "vue";
import { dateTimeFormat } from "@/utils/common";
// import ChatItemMenu from "./Components/ChatItemMenu.vue";
defineProps<{
  message: messageContent;
}>();
const timer = computed(() => (res: string) => {
  return dateTimeFormat(res);
});
// const showMenu = ref(false);
// const chatMenu = ref();
// const onLongPress = function (e: TouchEvent) {
//   showMenu.value = true;
//   setTimeout(() => {
//     let pageX = e.targetTouches[0].pageX;
//     let pageY = e.targetTouches[0].pageY;
//     let menuWidth = 120;
//     let menuHeight = 140;
//     let width = document.body.clientWidth;
//     let height = document.body.clientHeight;
//     if (pageX + menuWidth > width) {
//       chatMenu.value.$el.style.right = width - pageX + "px";
//       chatMenu.value.$el.style.left = null;
//     } else {
//       chatMenu.value.$el.style.left = pageX + "px";
//       chatMenu.value.$el.style.right = null;
//     }
//     if (pageY + menuHeight > height) {
//       console.log(height - pageY);
//       chatMenu.value.$el.style.bottom = height - pageY + "px";
//       chatMenu.value.$el.style.top = null;
//     } else {
//       chatMenu.value.$el.style.top = pageY + "px";
//       chatMenu.value.$el.style.bottom = null;
//     }
//   }, 0);
// };
// const active = ref(false);
// function onMouseEnter() {
//   active.value = true;
// }
// function onMouseLeave() {
//   active.value = false;
// }
</script>

<template>
  <div :class="['chat-item__content']">
    <div class="chat-item__left">
      <img :src="message.user.avatar" />
    </div>
    <div class="chat-item__center">
      <div class="chat-item__name">{{ message.user.name }}</div>
      <div class="chat-item__message">{{ message.message }}</div>
    </div>
    <div class="chat-item__right">{{ timer(message.time) }}</div>
    <!-- <div v-if="showMenu">
      <Teleport to="body">
        <div
          class="cover"
          @click="showMenu = false"
          @mousedown="showMenu = false"
        ></div>
        <ChatItemMenu ref="chatMenu" class="ChatMenu"></ChatItemMenu>
      </Teleport>
    </div> -->
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/common.scss";
.chat-item__hover {
  background-color: #eee;
}
.chat-item__content {
  @include df-al-center;
  position: relative;
  height: 80px;
  padding: $--body-common-padding;
  background-color: $--bg-color-white;
  font-size: 14px;
  &::after {
    content: "";
    border-bottom: 1px solid #eee;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .chat-item__left {
    @include df-al-center;
    margin-right: 8px;
    img {
      width: 48px;
      height: 48px;
      border-radius: 5px;
    }
  }
  .chat-item__center {
    height: 48px;
    @include df-cl-space;
    .chat-item__name {
      font-weight: 550;
    }
    .chat-item__message {
      font-size: 12px;
    }
  }
  .chat-item__right {
    color: $--text-color-gray;
    margin-left: auto;
    height: 48px;
    font-size: 12px;
  }
}
.ChatMenu {
  position: fixed;
  background-color: #fff;
  width: 100px;
  height: 140px;
  z-index: 1;
}
.cover {
  background-color: #333;
  opacity: 0.1;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>
