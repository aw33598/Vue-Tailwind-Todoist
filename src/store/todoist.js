import short from 'short-uuid';
import moment from 'moment';

const state = {
  projects: [
    { projectId: "73WakrfVbNJBaAmhQtEeDv", name: "🏢 THE OFFICE", color: "bg-blue-500" },
    { projectId: "sTyDEBP5rLZVD7QuPCghG4", name: "🚀 DAILY", color: "bg-red-500" },
    { projectId: "FXljmRfPEU3RZpXvO9jxz9", name: "🤖 FUTURE", color: "bg-purple-500" },
    { projectId: "cypC9goUM8euqHaxRoF73w", name: "📚 WORDS", color: "bg-green-500" },
    { projectId: "TneSyX46QDETEoO1GLnboS", name: "🎵 MUSIC", color: "bg-orange-500" }
  ],
  tasks: [],
  activeProject: "Inbox"
}

const getters = {
  allProjects: (state) => state.projects,

  getActiveProject: (state) => state.activeProject,

  getAllTasks: (state) => {
    if (state.activeProject === "Inbox") {
      return state.tasks
    } if (state.activeProject === "Today") {
      return state.tasks.filter(task => task.created === moment().format('DD/MM/YYYY'))
    } if (state.activeProject === "Next 7 days") {
      return state.tasks.filter(task => moment(task.created, 'DD/MM/YYYY').diff(moment(), 'days') >= 1)
    } else {
      return state.tasks.filter(task => task.projectName === state.activeProject)
    }
  }
}

const mutations = {
  deleteProject: (state, projectId) => {
    state.projects = state.projects.filter(project => project.projectId !== projectId);
  },

  addProject: (state, project) => state.projects.push(project),

  createNewTask: (state, task) => state.tasks.push(task),

  setActiveProject: (state, activeProject) => state.activeProject = activeProject,

  markTaskComplete: (state, taskId) => {
    const taskCompletedIndex = state.tasks.findIndex(task => task.taskId === taskId);
    state.tasks.splice(taskCompletedIndex, 1);
  }
}

const actions = {
  deleteProject: ({ commit }, projectId) => {
    commit("deleteProject", projectId);
    commit('setActiveProject', "Inbox")
  },

  addProject: ({ commit }, projectName) => {
    const project = {
      projectId: short.generate(),
      name: projectName,
      color: "bg-gray-500"
    }
    commit("addProject", project);
  },

  createNewTask: ({ commit }, task) => {
    if (task.created === null || task.created === "Today") {
      task.created = moment().format('DD/MM/YYYY');
    } else if (task.created === "Tomorrow") {
      task.created = moment().add(24, 'h').format('DD/MM/YYYY');
    } else if (task.created === "Next 7 days") {
      task.created = moment().add(7, 'd').format('DD/MM/YYYY');
    }
    commit('createNewTask', task);
  },

  setActiveProject: ({ commit }, activeProject) => {
    commit('setActiveProject', activeProject)
  },

  markTaskComplete: ({ commit }, taskID) => {
    commit('markTaskComplete', taskID)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}