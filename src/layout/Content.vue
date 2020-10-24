<template>
  <div class="max-w-5xl mx-auto px-4 flex">
    <div class="w-4/12">
      <CollatedTasks></CollatedTasks>
      <Projects></Projects>
    </div>
    <div class="w-8/12 bg-white h-screen-calc overflow-y-auto">
      <Todos></Todos>
    </div>
  </div>
</template>

<script>
import CollatedTasks from "../components/CollatedTasks";
import Todos from "../components/Todos";
import Projects from "../components/Projects";
export default {
  name: "Content",
  components: {
    CollatedTasks,
    Todos,
    Projects,
  },
};
</script>

<style>
.h-screen-calc {
  height: calc(100vh - 3rem);
}
</style>