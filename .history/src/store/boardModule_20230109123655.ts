import { Task } from '@/models/Task';

const boardModule = {
  state: () => ({
    tasks: [
    ],
  }),
  mutations: {
    setChapters(state: { tasks: Task[]; }, payload: any) {
      state.tasks = payload;
    },
  },
  namespaced: true,
};

export default boardModule;
