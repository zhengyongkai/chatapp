<script setup lang="ts">
defineProps({
  icon: String,
  title: String,
  to: String,
});
</script>
<template>
  <div class="simple-cell">
    <div class="simple-cell__icon">
      <img :src="icon" />
    </div>
    <div class="simple-cell__title">
      {{ title }}
    </div>
    <div class="simple-cell__content">
      <div class="simple-cell__news">
        <slot name="news" />
      </div>
      <div class="simple-cell__right">
        <nut-icon name="right" size="12"></nut-icon>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/common.scss";
.simple-cell {
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
  .simple-cell__icon {
    margin-right: 12px;
    img {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      padding: 0;
      margin-bottom: -6px;
    }
  }
  .simple-cell__content {
    @include df-al-right;
    flex: 1;
    .simple-cell__news {
      margin-right: 4px;
    }
    .simple-cell__right {
      margin-top: 2px;
      color: $--text-color-gray;
    }
  }
}
</style>
