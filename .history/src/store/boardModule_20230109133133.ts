import { Task } from '@/models/Task';

const boardModule = {
  state: () => ({
    tasks: [
    ],
  }),
  mutations: {
    setChapters(state: { tasks: Task[]; }, payload: Task) {
      tasks = payload;
    },
  },
  namespaced: true,
};

export default boardModule;
