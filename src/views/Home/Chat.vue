<script setup lang="ts">
import { ref, onMounted } from "vue";
import BScroll from "better-scroll";
const message = ref([
  {
    user: {
      avatar:
        "https://pic2.zhimg.com/v2-d0165f886d9534a43f8205fb76c537ed_b.jpg",
      name: "郑永楷",
      sex: "男",
    },
    type: "message",
    message: "牛逼鸭",
    time: "2022/10/30 11:00:00",
    voice: true,
  },
  {
    user: {
      avatar:
        "https://pic2.zhimg.com/v2-f281417371d4df6e2e012479f13dc3b1_b.jpg",
      name: "蔡子民",
      sex: "男",
    },
    type: "message",
    message: "你在干什么？为啥不回我捏(๑￫ܫ￩)",
    time: "2022/10/30 19:41:00",
    voice: true,
  },
  {
    user: {
      avatar:
        "https://pic2.zhimg.com/v2-f281417371d4df6e2e012479f13dc3b1_b.jpg",
      name: "蔡子民",
      sex: "男",
    },
    type: "message",
    message: "你在干什么？为啥不回我捏(๑￫ܫ￩)",
    time: "2022/10/30 19:41:00",
    voice: true,
  },
  {
    user: {
      avatar:
        "https://pic2.zhimg.com/v2-f281417371d4df6e2e012479f13dc3b1_b.jpg",
      name: "蔡子民",
      sex: "男",
    },
    type: "message",
    message: "你在干什么？为啥不回我捏(๑￫ܫ￩)",
    time: "2022/10/30 19:41:00",
    voice: true,
  },
  {
    user: {
      avatar:
        "https://pic2.zhimg.com/v2-f281417371d4df6e2e012479f13dc3b1_b.jpg",
      name: "蔡子民",
      sex: "男",
    },
    type: "message",
    message: "你在干什么？为啥不回我捏(๑￫ܫ￩)",
    time: "2022/10/30 19:41:00",
    voice: true,
  },

  {
    user: {
      avatar:
        "https://pic2.zhimg.com/v2-f281417371d4df6e2e012479f13dc3b1_b.jpg",
      name: "蔡子民",
      sex: "男",
    },
    type: "message",
    message: "你在干什么？为啥不回我捏(๑￫ܫ￩)",
    time: "2022/10/30 19:41:00",
    voice: true,
  },
  {
    user: {
      avatar:
        "https://pic2.zhimg.com/v2-f281417371d4df6e2e012479f13dc3b1_b.jpg",
      name: "蔡子民",
      sex: "男",
    },
    type: "message",
    message: "你在干什么？为啥不回我捏(๑￫ܫ￩)",
    time: "2022/10/30 19:41:00",
    voice: true,
  },
  {
    user: {
      avatar:
        "https://pic2.zhimg.com/v2-f281417371d4df6e2e012479f13dc3b1_b.jpg",
      name: "蔡子民",
      sex: "男",
    },
    type: "message",
    message: "你在干什么？为啥不回我捏(๑￫ܫ￩)",
    time: "2022/10/30 19:41:00",
    voice: true,
  },
]);
let scroll: any = null;
onMounted(() => {
  scroll = new BScroll(".wrapper", {
    scrollY: true,
    pullDownRefresh: {
      threshold: 30,
    },
  });
  scroll.on("pullingDown", () => {
    scroll.finishPullDown();
  });
});
</script>

<template>
  <div class="chat-main">
    <chat-nav-bar :title="'聊天（163）'">
      <template #right>
        <nut-icon name="search" class="navbar-ui"></nut-icon>
        <nut-icon name="add"></nut-icon>
      </template>
    </chat-nav-bar>
    <div class="chat-content wrapper">
      <div>
        <chat-item
          v-for="(value, key) in message"
          :key="key"
          :message="value"
        ></chat-item>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/common.scss";
.navbar-ui {
  margin-right: 30px;
}
</style>
