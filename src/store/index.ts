import { createStore } from 'vuex';

import { IState } from '@/interfaces/IState';
import boardModule from './boardModule';

const store = createStore<IState>({
  modules: {
    board: boardModule,
  },
});
export default store;
