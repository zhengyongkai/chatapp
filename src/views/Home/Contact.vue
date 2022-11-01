<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { getAssetsImages } from "@/utils/common";

const dataList = [
  {
    title: "*",
    list: [
      {
        name: "新的朋友",
        icon: getAssetsImages("addFriend.png"),
        id: -4,
        number: 1,
      },
      {
        name: "仅聊天的好友",
        icon: getAssetsImages("onlyTall.png"),
        id: -3,
      },
      {
        name: "群聊",
        icon: getAssetsImages("groupTalk.png"),
        id: -2,
      },
      {
        name: "标签",
        icon: getAssetsImages("tag.png"),
        id: -1,
      },
    ],
  },
  {
    title: "A",
    list: [
      {
        name: "安徽",
        id: 1,
        icon: "https://pic2.zhimg.com/v2-d0165f886d9534a43f8205fb76c537ed_b.jpg",
      },
    ],
  },
  {
    title: "B",
    list: [
      {
        name: "北京",
        id: 2,
        icon: "https://pic2.zhimg.com/v2-d0165f886d9534a43f8205fb76c537ed_b.jpg",
      },
    ],
  },
  {
    title: "G",
    list: [
      {
        name: "广西",
        id: 3,
        icon: "https://pic2.zhimg.com/v2-d0165f886d9534a43f8205fb76c537ed_b.jpg",
      },
      {
        name: "广东",
        id: 4,
        icon: "https://pic2.zhimg.com/v2-d0165f886d9534a43f8205fb76c537ed_b.jpg",
      },
    ],
  },
  {
    title: "H",
    list: [
      {
        name: "湖南",
        id: 5,
        icon: "https://pic2.zhimg.com/v2-d0165f886d9534a43f8205fb76c537ed_b.jpg",
      },
      {
        name: "湖北",
        id: 6,
        icon: "https://pic2.zhimg.com/v2-d0165f886d9534a43f8205fb76c537ed_b.jpg",
      },
      {
        name: "湖南",
        id: 5,
        icon: "https://pic2.zhimg.com/v2-d0165f886d9534a43f8205fb76c537ed_b.jpg",
      },
      {
        name: "湖北",
        id: 6,
        icon: "https://pic2.zhimg.com/v2-d0165f886d9534a43f8205fb76c537ed_b.jpg",
      },
      {
        name: "湖南",
        id: 5,
        icon: "https://pic2.zhimg.com/v2-d0165f886d9534a43f8205fb76c537ed_b.jpg",
      },
      {
        name: "湖北",
        id: 6,
        icon: "https://pic2.zhimg.com/v2-d0165f886d9534a43f8205fb76c537ed_b.jpg",
      },
      {
        name: "湖南",
        id: 5,
        icon: "https://pic2.zhimg.com/v2-d0165f886d9534a43f8205fb76c537ed_b.jpg",
      },
      {
        name: "湖北",
        id: 6,
        icon: "https://pic2.zhimg.com/v2-d0165f886d9534a43f8205fb76c537ed_b.jpg",
      },
      {
        name: "湖南",
        id: 5,
        icon: "https://pic2.zhimg.com/v2-d0165f886d9534a43f8205fb76c537ed_b.jpg",
      },
      {
        name: "湖北",
        id: 6,
        icon: "https://pic2.zhimg.com/v2-d0165f886d9534a43f8205fb76c537ed_b.jpg",
      },
    ],
  },
  {
    title: "#",
    list: [
      {
        name: "广西",
        id: 3,
        icon: "https://pic2.zhimg.com/v2-d0165f886d9534a43f8205fb76c537ed_b.jpg",
      },
      {
        name: "广东",
        id: 4,
        icon: "https://pic2.zhimg.com/v2-d0165f886d9534a43f8205fb76c537ed_b.jpg",
      },
    ],
  },
];

let elevatorHeight = ref(0);

onBeforeMount(() => {
  // 计算 elevator 的 高度
  elevatorHeight.value = document.body.clientHeight - 44 - 52;
});
</script>

<template>
  <div class="chat-main">
    <chat-nav-bar :title="'联系人'">
      <template #right>
        <nut-icon name="search" class="navbar-ui"></nut-icon>
        <nut-icon name="add"></nut-icon>
      </template>
    </chat-nav-bar>
    <div class="chat-content">
      <nut-elevator
        :index-list="dataList"
        :height="elevatorHeight"
        :title-height="30"
        :space-height="10"
      >
        <template v-slot:default="slotProps">
          <chat-cell
            :icon="slotProps.item.icon"
            :title="slotProps.item.name"
            :number="slotProps.item.number"
          ></chat-cell>
        </template>
      </nut-elevator>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/common.scss";
:deep(.nut-elevator__list__item__name) {
  padding: 0;
  height: 100%;
  width: 100%;
}
.navbar-ui {
  margin-right: 30px;
}
</style>
