import { defineComponent } from 'vue';
import { mapState } from 'vuex';

export default defineComponent({
  data() {
    return {
      panel: [],
    };
  },
  methods: {
    none() {
      this.panel = [];
    },
  },
  computed: {
    ...mapState({
      closeAllPanel: (state: any): boolean => state.board.closeAllPanel,
    }),
  },
  watch: {
    closeAllPanel() {
      if (this.closeAllPanel) this.none();
    },
  },
});
