<script setup lang="ts">
defineProps({
  name: String,
  size: Number,
});
</script>
<template>
  <div class="chat-icon">
    <i class="iconfont" :class="`icon-${name}`"></i>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/common.scss";
.chat-icon {
  i {
    font-size: v-bind(size);
  }
}
</style>
