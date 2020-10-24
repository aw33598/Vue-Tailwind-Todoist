<template>
  <div class="mt-5 pb-4">
    <button
      class="flex items-center space-x-1 px-2 select-none outline-none focus:outline-none"
      @click="showProjects = !showProjects"
    >
      <svg
        class="w-5 h-5 text-gray-700 transform origin-center"
        :class="showProjects ? 'rotate-90' : 'rotate-0'"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span class="text-sm font-medium text-gray-800">Projects</span>
    </button>

    <div
      class="flex flex-col mt-6 max-h-48 overflow-y-auto"
      v-if="showProjects"
    >
      <button
        class="py-2 px-3 flex items-center justify-between select-none outline-none focus:outline-none"
        id="btn"
        v-for="project in allProjects"
        :key="project.projectId"
        :class="{
          'font-medium': getActiveProject === project.name,
          'bg-white': getActiveProject === project.name,
        }"
        @click="setProject(project.name)"
      >
        <div class="flex items-center space-x-3">
          <div class="h-2 w-2 rounded-full" :class="project.color"></div>
          <div class="text-sm text-gray-700">
            {{ project.name }}
          </div>
        </div>
        <div
          class="flex items-center text-gray-500"
          id="delete"
          @click="removeProject(project.projectId, project.name)"
        >
          <svg
            class="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </button>
    </div>
    <AddProject></AddProject>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AddProject from "./AddProject";
export default {
  name: "Projects",
  data() {
    return {
      showProjects: true,
    };
  },
  components: {
    AddProject,
  },
  computed: {
    ...mapGetters(["allProjects", "getActiveProject"]),
  },
  methods: {
    ...mapActions(["deleteProject", "setActiveProject", "removeProjectTasks"]),
    removeProject(projectId, projectName) {
      event.stopPropagation();
      this.deleteProject(projectId);
      this.removeProjectTasks(projectName);
    },
    setProject(projectName) {
      this.setActiveProject(projectName);
    },
  },
};
</script>

<style>
#delete {
  display: none;
}
#btn:hover #delete {
  display: block;
}
</style>