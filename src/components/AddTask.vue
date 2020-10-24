<template>
  <div class="w-full">
    <button
      class="flex items-center space-x-1 outline-none focus:outline-none"
      @click="isAddingTask = !isAddingTask"
      v-if="!isAddingTask"
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
      <p class="text-xs text-gray-600 font-medium">Add task</p>
    </button>
    <div class="flex flex-col space-y-3" v-if="isAddingTask">
      <input
        type="text"
        name="task"
        class="outline-none focus:outline-none border focus:border-blue-500 px-2 py-1 text-sm text-gray-800"
        v-model="task"
      />
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <button
            class="outline-none focus:outline-none bg-red-600 text-white rounded-sm px-3 py-1.5 text-xs font-medium"
            @click="addTask"
          >
            Add task
          </button>
          <button
            class="outline-none focus:outline-none text-xs font-medium text-gray-600 px-3 py-1"
            @click="isAddingTask = false"
          >
            Cancel
          </button>
        </div>
        <div class="flex items-center space-x-1">
          <button
            class="outline-none focus:outline-none relative"
            @click="showDays = !showDays"
          >
            <svg
              data-svgs-path="sm1/calendar_small.svg"
              class="text-blue-400"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 22 22"
            >
              <path
                fill="currentColor"
                fill-rule="nonzero"
                d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8zm0 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1.25 7a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm.75-5a.5.5 0 1 1 0 1h-7a.5.5 0 0 1 0-1h7z"
              ></path>
            </svg>

            <div
              class="absolute mt-1 border bg-white right-0 w-40"
              v-if="showDays"
            >
              <button
                class="w-full outline-none focus:outline-none flex items-center space-x-1.5 pl-2 py-1.5 pr-6 hover:bg-gray-100"
                @click="setSelectedDay('Today')"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  class="text-orange-600"
                  aria-hidden="true"
                  focusable="false"
                >
                  <g fill="currentColor" fill-rule="nonzero">
                    <path
                      d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                      opacity=".1"
                    ></path>
                    <path
                      d="M9.704 17.543a.5.5 0 0 1 .27.654l-.956 2.31a.5.5 0 0 1-.924-.383l.957-2.31a.5.5 0 0 1 .653-.27zm5.245.27l.957 2.31a.5.5 0 0 1-.924.383l-.956-2.31a.5.5 0 0 1 .923-.382zM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm-5.543 6.796a.5.5 0 0 1-.27.653l-2.31.957a.5.5 0 0 1-.383-.924l2.31-.956a.5.5 0 0 1 .653.27zm11.74-.27l2.31.956a.5.5 0 0 1-.383.924l-2.31-.957a.5.5 0 0 1 .383-.923zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm-8.124-.406l2.31.957a.5.5 0 0 1-.383.923l-2.31-.956a.5.5 0 0 1 .383-.924zm16.9.27a.5.5 0 0 1-.27.654l-2.31.956a.5.5 0 0 1-.382-.923l2.31-.957a.5.5 0 0 1 .653.27zM9.019 3.495l.956 2.31a.5.5 0 0 1-.923.382l-.957-2.31a.5.5 0 1 1 .924-.382zm6.617-.27a.5.5 0 0 1 .271.652l-.957 2.31a.5.5 0 0 1-.923-.383l.956-2.31a.5.5 0 0 1 .653-.27z"
                    ></path>
                  </g>
                </svg>
                <span class="text-xs text-gray-800">Today</span>
              </button>

              <button
                class="w-full outline-none focus:outline-none flex items-center space-x-1.5 pl-2 py-1.5 pr-6 hover:bg-gray-100"
                @click="setSelectedDay('Next 7 days')"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  class="text-purple-500"
                >
                  <g fill="currentColor" fill-rule="evenodd">
                    <path
                      fill-rule="nonzero"
                      d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z"
                      opacity=".1"
                    ></path>
                    <path
                      fill-rule="nonzero"
                      d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm10 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm8-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM7 8h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"
                    ></path>
                  </g>
                </svg>
                <span class="text-xs text-gray-800">Next 7 days</span>
              </button>
            </div>
          </button>

          <button
            class="outline-none focus:outline-none relative"
            @click="showProjects = !showProjects"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 22 22"
              class="text-green-500"
            >
              <g fill="currentColor">
                <path
                  d="M13.5 9.5V12a1.5 1.5 0 01-1.5 1.5H4A1.5 1.5 0 012.5 12V9.5h3.75a1.75 1.75 0 003.5 0h3.75z"
                  opacity="0.1"
                ></path>
                <path
                  d="M10.491 2a2 2 0 011.923 1.45l1.509 5.28a2 2 0 01.077.55V12a2 2 0 01-2 2H4a2 2 0 01-2-2V9.28a2 2 0 01.077-.55l1.509-5.28A2 2 0 015.509 2h4.982zm0 1H5.51a1 1 0 00-.962.725l-1.509 5.28A1 1 0 003 9.28V12a1 1 0 001 1h8a1 1 0 001-1V9.28a1 1 0 00-.038-.275l-1.51-5.28a1 1 0 00-.96-.725zM6.25 9a.5.5 0 01.5.5 1.25 1.25 0 002.5 0 .5.5 0 01.5-.5h1.75a.5.5 0 110 1h-1.306a2.25 2.25 0 01-4.388 0H4.5a.5.5 0 010-1z"
                ></path>
              </g>
            </svg>

            <div
              class="absolute mt-1 border bg-white right-0 h-24 overflow-y-auto"
              v-if="showProjects"
            >
              <button
                class="w-64 uppercase outline-none focus:outline-none flex items-center space-x-1.5 pl-3 py-2 pr-6 hover:bg-gray-100 text-xs text-gray-800 border-b"
                v-for="project in allProjects"
                :key="project.projectId"
                @click="setProjectName(project.name)"
              >
                {{ project.name }}
              </button>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import short from "short-uuid";
export default {
  name: "AddTask",
  data() {
    return {
      isAddingTask: false,
      showDays: false,
      showProjects: false,
      task: "",
      selectedProject: null,
      selectedDay: null,
    };
  },
  methods: {
    ...mapActions(["createNewTask"]),
    addTask() {
      if (this.task.trim() === "") {
        return;
      } else {
        let task = {
          taskId: short.generate(),
          task: this.task.trim(),
          created: this.selectedDay,
          projectName: this.selectedProject,
        };
        this.createNewTask(task);
        this.isAddingTask = false;
        this.task = "";
        this.selectedDay = null;
      }
    },
    setSelectedDay(day) {
      this.selectedDay = day;
    },
    setProjectName(project) {
      this.selectedProject = project;
    },
  },
  computed: {
    ...mapGetters(["allProjects"]),
  },
};
</script>

<style>
</style>