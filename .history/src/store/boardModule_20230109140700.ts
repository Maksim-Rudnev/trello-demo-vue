import { Task } from '@/models/Task';
import { Commit } from 'vuex';

type AA = { commit: (arg0: string, arg1: Task[]) => void; }
const boardModule = {
  state: () => ({
    tasks: [
    ],
  }),
  mutations: {
    setChapters(state: { tasks: Task[]; }, payload: Task[]) {
      state.tasks = payload;
    },
  },
  actions: {
    async setChapters({ commit }: ActionContext<S, R>, payload: Task[]) {
      commit('setChapters', payload);
    },
  },
  namespaced: true,
};

export default boardModule;
