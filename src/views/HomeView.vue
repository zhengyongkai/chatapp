<script setup lang="ts">
import HellowWorld from "../components/HelloWorld.vue";
import Service from "@/services";
const { getUserParams } = Service;
getUserParams().then((res) => {
  console.log(res);
});
</script>

<template>
  <main>
    <HellowWorld msg="good" />
  </main>
</template>
