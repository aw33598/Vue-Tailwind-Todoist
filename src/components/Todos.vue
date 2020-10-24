<template>
  <div class="pt-10 pb-8 px-12">
    <div class="flex flex-col space-y-8">
      <div>
        <h3 class="text-2xl text-gray-800 font-medium mb-6">
          {{ getActiveProject }}
        </h3>
        <Todo
          v-for="task in getAllTasks"
          :key="task.taskId"
          :task="task"
        ></Todo>
      </div>
      <AddTask></AddTask>
    </div>
  </div>
</template>

<script>
import Todo from "./Todo";
import AddTask from "./AddTask";
import { mapGetters } from "vuex";
export default {
  name: "Todos",
  components: {
    Todo,
    AddTask,
  },
  computed: {
    ...mapGetters(["getActiveProject", "getAllTasks"]),
  },
};
</script>

<style>
</style>