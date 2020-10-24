<template>
  <span
    class="h-4 w-4 border rounded-full border-gray-500 select-none cursor-pointer"
    @click="markComplete(taskId)"
  ></span>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Checkbox",
  props: {
    taskId: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions(["markTaskComplete"]),
    markComplete(taskId) {
      this.markTaskComplete(taskId);
    },
  },
};
</script>

<style>
</style>