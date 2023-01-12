import { createStore } from 'vuex';
import boardModule from './boardModule';

export default createStore({
  modules: {
    board: boardModule,
  },
});
