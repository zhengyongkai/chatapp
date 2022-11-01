<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const path = ref("/");

watch(
  router.currentRoute,
  (val) => {
    path.value = val.path;
  },
  { deep: true, immediate: true }
);

const onTabChange = (_res: any, index: string) => {
  router.replace(index);
};
</script>

<script lang="ts"></script>
<template>
  <RouterView></RouterView>
  <div class="chat-bottom">
    <nut-tabbar
      :safeAreaInsetBottom="true"
      :active-color="'#409EFF'"
      v-model:visible="path"
      @tab-switch="onTabChange"
    >
      <nut-tabbar-item
        tab-title="聊天"
        name="/"
        icon="message"
      ></nut-tabbar-item>
      <nut-tabbar-item
        tab-title="朋友"
        name="/contact"
        icon="my2"
      ></nut-tabbar-item>
      <nut-tabbar-item
        tab-title="发现"
        name="/find"
        icon="find"
      ></nut-tabbar-item>
      <nut-tabbar-item
        tab-title="我的"
        name="/mine"
        icon="my"
      ></nut-tabbar-item>
    </nut-tabbar>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/common.scss";
.chat-bottom {
  @include fx-bottom();
}
</style>
