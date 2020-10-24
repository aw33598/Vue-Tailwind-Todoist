<template>
  <div class="px-2 mt-6">
    <button
      class="flex items-center space-x-1 outline-none focus:outline-none"
      @click="isAddingProject = !isAddingProject"
      v-if="!isAddingProject"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" class="text-red-600">
        <g fill="none" fill-rule="evenodd" transform="translate(4 3)">
          <mask id="jd4FBg" fill="#fff">
            <path
              d="M9 8h7a.5.5 0 1 1 0 1H9v7a.5.5 0 1 1-1 0V9H1a.5.5 0 0 1 0-1h7V1a.5.5 0 0 1 1 0v7z"
            ></path>
          </mask>
          <g mask="url(#jd4FBg)">
            <path fill="currentColor" d="M-4-3h24v24H-4z"></path>
          </g>
        </g>
      </svg>
      <p class="text-xs text-gray-600 font-medium">Add project</p>
    </button>

    <div v-else>
      <input
        type="text"
        name="task"
        class="w-full outline-none focus:outline-none border focus:border-blue-500 px-2 py-1 text-sm text-gray-800"
        v-model="project"
      />
      <div class="mt-3 flex items-center justify-between">
        <div class="flex items-center">
          <button
            class="outline-none focus:outline-none bg-red-600 text-white rounded-sm px-3 py-1.5 text-xs font-medium"
            @click="addNewProject"
          >
            Add project
          </button>
          <button
            class="outline-none focus:outline-none text-xs font-medium text-gray-600 px-3 py-1"
            @click="isAddingProject = false"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddProject",
  data() {
    return {
      isAddingProject: false,
      project: "",
    };
  },
  methods: {
    addNewProject() {
      if (this.project.trim() === "") {
        return;
      } else {
        this.addProject(this.project.toUpperCase());
        this.project = "";
        this.isAddingProject = false;
      }
    },
    ...mapActions(["addProject"]),
  },
};
</script>

<style>
</style>