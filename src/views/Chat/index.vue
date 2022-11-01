<script setup lang="ts"></script>

<template>
  <div class="chat-main">
    <chat-nav-bar :title="'鄭永楷(24)'" backto> </chat-nav-bar>
    <div class="chat-content cell-group"></div>
    <div class="chat-bottom">
      <div class="chat-bottom__input">
        <div contenteditable="true" autofocus>123</div>
      </div>
      <div class="chat-bottom__hander">
        <cell-icon name="smail" size="24px" />
        <cell-icon name="add" size="24px" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/common.scss";
.chat-bottom {
  @include fx-bottom();
  @include df-al-center;
  padding: $--body-common-padding;
  background-color: $--text-color-lightGray;
  height: 52px;
  .chat-bottom__input {
    width: 80%;
    margin-right: 8px;
    div {
      @include li-height(36px);
      background: #fff;
      width: 100%;
      font-size: 16px;
      padding: 0 5px;
      border-radius: $--box-common-radius;
      outline: 0;
    }
  }
  .chat-bottom__hander {
    @include df-al-right;
    flex: 1;
    justify-content: space-between;
    div {
      margin-left: 8px;
    }
  }
}
</style>
