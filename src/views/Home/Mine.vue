<script setup lang="ts">
import { getAssetsImages } from "@/utils/common";
const payMine = getAssetsImages("payMine.png");
const favMine = getAssetsImages("favMine.png");
const friendMine = getAssetsImages("friendMine.png");
const walletMine = getAssetsImages("walletMine.png");
</script>

<template>
  <div class="chat-main">
    <div class="chat-content mine-content">
      <div class="mine-content__header">
        <div class="mine-header__img">
          <img src="@/assets/img/avatar.png" />
        </div>
        <div class="mine-header__info">
          <div class="mine-info__top">Ride</div>
          <div class="mine-info__center">
            <div>聊天号：zyk13247526905</div>
            <div>
              <nut-icon name="right" size="12" />
            </div>
          </div>
          <div class="mine-info__bottom">状态：难过中</div>
        </div>
      </div>
      <div class="mine-content__cell">
        <chat-simple-cell :icon="payMine" title="服务"> </chat-simple-cell>
      </div>
      <div class="mine-content__cell">
        <chat-simple-cell :icon="favMine" title="收藏"></chat-simple-cell>
        <chat-simple-cell :icon="friendMine" title="朋友圈"> </chat-simple-cell>
        <chat-simple-cell :icon="walletMine" title="卡包"> </chat-simple-cell>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/common.scss";
.chat-content {
  top: 0;
  &:before {
    background-color: $--bg-color-white;
    height: 40px;
    width: 100%;
    display: block;
    content: "";
  }
}
.mine-content {
  .mine-content__header {
    padding: $--body-common-padding;
    background-color: $--bg-color-white;
    display: flex;
    height: 100px;
    .mine-header__img {
      margin-right: 12px;
      img {
        border-radius: $--img-common-radius;
        width: 56px;
        height: 56px;
      }
    }
    .mine-header__info {
      flex: 1;
      .mine-info__top {
        line-height: 1;
        font-weight: 600;
        font-size: 18px;
        margin-bottom: 10px;
      }
      .mine-info__center {
        color: $--text-color-gray;
        display: flex;
        font-size: 14px;
        margin-bottom: 10px;
        width: 100%;
        :first-child {
          flex: 1;
        }
        :nth-child(2) {
          @include df-al-right;
        }
      }
      .mine-info__bottom {
        color: $--text-color-blue;
        font-size: 14px;
      }
    }
  }
  .mine-content__cell {
    margin-top: 12px;
  }
}
</style>
