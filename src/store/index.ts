import { createStore } from 'vuex';
import { IState } from '@/models/IState';
import boardModule from './boardModule';

const store = createStore<IState>({
  modules: {
    board: boardModule,
  },
});
export default store;
