import { Task } from '@/models/Task';
import { Theme } from '@/models/Theme';
import { Commit } from 'vuex';
import { db } from '@/db';

const boardModule = {
  state: () => ({
    tasks: [],
    themes: [],
  }),
  mutations: {
    setTasks(state: { tasks: Task[]; }, payload: Task[]) {
      state.tasks = payload;
    },
    setThemes(state: { themes: Theme[]; }, payload: Theme[]) {
      state.themes = payload;
    },
  },
  getters: {
    getTaskByThemeId(id: number, state: { tasks: Task[]; }) {
      return state.tasks.filter((task) => task.themeId === id);
    },
  },
  actions: {
    async setTasks({ commit }: { commit: Commit }, payload: Task[]) {
      const data = await db.themes.toArray();
      commit('setTasks', payload);
    },
    async setThemes({ commit }: { commit: Commit }) {
      const data = await db.themes.toArray();
      commit('setThemes', data);
    },
  },
  namespaced: true,
};

export default boardModule;
