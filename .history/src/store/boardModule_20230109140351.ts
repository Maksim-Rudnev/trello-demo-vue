import { Task } from '@/models/Task';

type AA={

}
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
    async setChapters(ctx: v, payload: Task[]) {
      ctx.commit('setChapters', payload);
    },
  },
  namespaced: true,
};

export default boardModule;
