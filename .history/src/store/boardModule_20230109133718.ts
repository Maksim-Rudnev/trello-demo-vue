import { Task } from '@/models/Task';

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
    async setChapters(ctx: { commit: (arg0: string, arg1: any) => void; }, payload: Task[]) {
      ctx.commit('setChapters', payload);
    },
  },
  namespaced: true,
};

export default boardModule;