<template>
  <div class="pt-12">
    <div class="flex flex-col">
      <div
        class="flex items-center space-x-2 p-2 select-none cursor-pointer"
        :class="{
          'font-medium': getActiveProject === 'Inbox',
          'bg-white': getActiveProject === 'Inbox',
        }"
        @click="setActiveProject('Inbox')"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" class="text-blue-500">
          <g fill="currentColor" fill-rule="nonzero">
            <path
              d="M10 14.5a2 2 0 104 0h5.5V18a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 18v-3.5H10z"
              opacity="0.1"
            ></path>
            <path
              d="M8.062 4h7.876a2 2 0 011.94 1.515l2.062 8.246a2 2 0 01.06.485V18a2 2 0 01-2 2H6a2 2 0 01-2-2v-3.754a2 2 0 01.06-.485l2.06-8.246A2 2 0 018.061 4zm0 1a1 1 0 00-.97.757L5.03 14.004a1 1 0 00-.03.242V18a1 1 0 001 1h12a1 1 0 001-1v-3.754a1 1 0 00-.03-.242l-2.06-8.247A1 1 0 0015.94 5H8.061zM12 17.25A2.75 2.75 0 019.295 15H7a.5.5 0 110-1h2.75a.5.5 0 01.5.5 1.75 1.75 0 003.5 0 .5.5 0 01.5-.5H17a.5.5 0 110 1h-2.295A2.75 2.75 0 0112 17.25z"
            ></path>
          </g>
        </svg>
        <span class="text-sm text-gray-800">Inbox</span>
      </div>

      <div
        class="flex items-center space-x-2 p-2 select-none cursor-pointer"
        :class="{
          'font-medium': getActiveProject === 'Today',
          'bg-white': getActiveProject === 'Today',
        }"
        @click="setActiveProject('Today')"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" class="text-green-500">
          <g fill="currentColor" fill-rule="evenodd">
            <path
              fill-rule="nonzero"
              d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z"
              opacity=".1"
            ></path>
            <path
              fill-rule="nonzero"
              d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"
            ></path>
            <text
              font-family="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
              font-size="9"
              transform="translate(4 2)"
              font-weight="500"
            >
              <tspan x="8" y="15" text-anchor="middle">22</tspan>
            </text>
          </g>
        </svg>
        <span class="text-sm text-gray-800">Today</span>
      </div>

      <div
        class="flex items-center space-x-2 p-2 select-none cursor-pointer"
        :class="{
          'font-medium': getActiveProject === 'Next 7 days',
          'bg-white': getActiveProject === 'Next 7 days',
        }"
        @click="setActiveProject('Next 7 days')"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" class="text-purple-500">
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
        <span class="text-sm text-gray-800">Next 7 days</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CollatedTasks",
  computed: {
    ...mapGetters(["getActiveProject"]),
  },
  methods: {
    ...mapActions(["setActiveProject"]),
  },
};
</script>

<style>
</style>