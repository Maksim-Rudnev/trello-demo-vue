<template>
  <v-dialog width="300px"
    :modelValue="visibleEditDialog"
    @update:modelValue="setVisibleEditDialog"
  >
    <v-sheet color="white py-1">
      <div class="text-h4 d-flex justify-center">Edit</div>
      <slot></slot>
    </v-sheet>
  </v-dialog>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { mapMutations, mapState } from 'vuex';

export default defineComponent({
  name: 'EditDialog',
  computed: {
    ...mapState({
      visibleEditDialog: (state: any): boolean => state.board.visibleEditDialog,
    }),
  },
  methods: {
    ...mapMutations({
      setVisibleEditDialog: 'board/setVisibleEditDialog',
    }),
  },
});
</script>
