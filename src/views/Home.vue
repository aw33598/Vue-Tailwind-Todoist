<template>
  <div>
    <Navbar></Navbar>
    <Content></Content>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Content from "../layout/Content";
export default {
  name: "Home",
  components: {
    Navbar,
    Content,
  },
};
</script>

<style>
</style>