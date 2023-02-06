import { ITask } from '@/models/ITask';
import { ITheme } from '@/models/ITheme';
import { IBoardState } from '@/models/IBoardState';
import { Commit } from 'vuex';
import { db } from '@/db';

const boardModule = {
  state: (): IBoardState => ({
    tasks: [],
    themes: [],
    colors: ['#9C27B0', '#673AB7', '#3F51B5', '#2196F3',
      '#00BCD4', '#009688', '#4CAF50', '#FFEB3B',
      '#FF9800', '#F44336', '#E91E63'],
    resetForm: false,
    visibleEditDialog: false,
    selectedTask: 0,
  }),
  mutations: {
    setTasks(state: { tasks: ITask[]; }, payload: ITask[]) {
      state.tasks = payload;
    },
    setThemes(state: { themes: ITheme[]; }, payload: ITheme[]) {
      state.themes = payload;
    },
    setResetForm(state: { resetForm: boolean; }, payload: boolean) {
      state.resetForm = payload;
    },
    setVisibleEditDialog(state: { visibleEditDialog: boolean; }, payload: boolean) {
      state.visibleEditDialog = payload;
    },
    setSelectedTask(state: { selectedTask: number; }, payload: number) {
      state.selectedTask = payload;
    },
  },
  getters: {

    getTasksByThemeId: (state: { tasks: ITask[]; }) => (id: number) => state.tasks
      .filter((task) => Number(task.themeId) === id),

    getSelectedTask: (state: { tasks: ITask[], selectedTask: number }) => (state.tasks
      .filter((el) => el.id === state.selectedTask))[0],
  },
  actions: {
    async setTasks({ commit }: { commit: Commit }) {
      const data = await db.tasks.toCollection().sortBy('index');
      commit('setTasks', data);
    },
    async setThemes({ commit }: { commit: Commit }) {
      const data = await db.themes.toArray();
      commit('setThemes', data);
    },
  },
  namespaced: true,
};

export default boardModule;
