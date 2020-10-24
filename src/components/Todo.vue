<template>
  <div class="flex items-center space-x-4 py-2 border-b border-gray-300">
    <Checkbox :taskId="task.taskId"></Checkbox>
    <p class="text-gray-800 text-sm">{{ task.task }}</p>
  </div>
</template>

<script>
import Checkbox from "./Checkbox";
export default {
  name: "Todo",
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  components: {
    Checkbox,
  },
};
</script>

<style>
</style>