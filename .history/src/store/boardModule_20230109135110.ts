import { Task } from '@/models/Task';

const boardModule<any> = {
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
    async setChapters(commit:(arg0: string, arg1: Task[]) => void, payload: Task[]) {
      commit('setChapters', payload);
    },
  },
  namespaced: true,
};

export default boardModule;
