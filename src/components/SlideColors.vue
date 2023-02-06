<template>
  <v-slide-group
    v-model="model"
    center-active
    show-arrows="always"
  >
    <v-slide-group-item
      v-for="n in colors"
      :key="n"
      v-slot="{ isSelected, toggle }"
    >
      <v-card
        :color="n"
        class="ma-1"
        height="25"
        width="25"
        @click="toggle($event),
        $emit('update:modelValue', model)"
      >
      <v-tooltip
        activator="parent"
        location="top"
      >
        {{ colors.indexOf(n) }}
      </v-tooltip>
        <div class="d-flex fill-height align-center justify-center">
          <v-scale-transition>
            <v-icon
              v-if="isSelected"
              color="black"
              size="14"
              icon="mdi-close-circle-outline"
            />
          </v-scale-transition>
        </div>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { mapState, mapMutations } from 'vuex';

export default defineComponent({
  name: 'SlideColors',
  props: {
    modelValue: {
      type: Number,
    },
  },
  created() {
    if (this.modelValue !== undefined) this.model = this.modelValue;
  },
  data() {
    return {
      model: -1,
    };
  },
  computed: {
    ...mapState({
      colors: (state: any): Array<string> => state.board.colors,
      resetForm: (state: any): boolean => state.board.resetForm,
    }),
  },
  methods: {
    ...mapMutations({
      setResetForm: 'board/setResetForm',
    }),
  },
  watch: {
    resetForm() {
      if (this.resetForm) this.model = -1;
      this.setResetForm(false);
    },
  },
});
</script>
