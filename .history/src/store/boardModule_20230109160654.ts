import { Task } from '@/models/Task';
import { Theme } from '@/models/Theme';
import { Commit } from 'vuex';
import { db } from '@/db';

const boardModule = {
  state: () => ({
    tasks: [],
    theme: [],
  }),
  mutations: {
    setTasks(state: { tasks: Task[]; }, payload: Task[]) {
      state.tasks = payload;
    },
    setThemes(state: { theme: Theme[]; }, payload: Theme[]) {
      state.theme = payload;
    },
  },
  actions: {
    async setTasks({ commit }: { commit: Commit }, payload: Task[]) {
      commit('setTasks', payload);
    },
    async setThemes({ commit }: { commit: Commit }, payload: Theme[]) {
      db,
      themes: useObservable(
        liveQuery(() => db.themes.toArray()),
      ),
      commit('setThemes', payload);
    },
  },
  namespaced: true,
};

export default boardModule;
