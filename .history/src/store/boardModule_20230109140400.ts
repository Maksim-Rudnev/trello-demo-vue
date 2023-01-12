import { Task } from '@/models/Task';

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
    async setChapters(ctx: { commit: (arg0: string, arg1: Task[]) => void; }, payload: Task[]) {
      ctx.commit('setChapters', payload);
    },
  },
  namespaced: true,
};

export default boardModule;
