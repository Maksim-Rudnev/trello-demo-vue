<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="px-1 pt-2"
  >
    <slide-colors
      v-model:modelValue="selectedRankColor"
    />

    <v-text-field
      class="mt-2 mx-4"
      v-model="owner"
      :counter="20"
      :rules="ownerRules"
      label="Owner"
      required
    />

    <v-textarea
      class="mx-4"
      rows="3"
      :counter="300"
      v-model="text"
      :rules="textRules"
      label="Text"
      required
    />

    <div class="d-flex justify-center mt-1 mb-3">
      <v-btn
        color="success"
        class="mr-4"
        @click="validate"
      >
        submit
      </v-btn>

      <v-btn
        color="error"
        @click="reset"
      >
        Reset Form
      </v-btn>
    </div>
  </v-form>
</template>

<script lang="ts">
import { db } from '@/db';
import { defineComponent } from 'vue';
import { mapActions, mapMutations } from 'vuex';
import SlideColors from './SlideColors.vue';

export default defineComponent({
  name: 'TaskForm',
  components: { SlideColors },
  props: {
    themeId: {
      type: Number,
      default: 0,
    },
    action: {
      type: String,
      default: '',
    },
    task: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    selectedRankColor: 0,
    valid: true,
    owner: '',
    ownerRules: [
      (v: string) => !!v.trim() || 'Owner is required',
      (v: string) => (v && v.length <= 20) || 'Owner must be less than 20 characters',
    ],

    text: '',
    textRules: [
      (v: string) => !!v.trim() || 'Text is required',
      (v: string) => (v && v.length <= 300) || 'Text must be less than 300 characters',
    ],
  }),
  created() {
    if (this.task) {
      this.owner = this.task.owner;
      this.text = this.task.text;
      this.selectedRankColor = this.task.priority;
    }
  },
  methods: {
    ...mapActions({
      setTasks: 'board/setTasks',
    }),
    ...mapMutations({
      setResetForm: 'board/setResetForm',
      setVisibleEditDialog: 'board/setVisibleEditDialog',
    }),
    async validate() {
      const { valid } = await (this.$refs.form as HTMLFormElement).validate();

      if (valid) {
        if (this.action === 'EDIT') {
          db.tasks.update(this.task.id, {
            owner: this.owner.trim(),
            text: this.text.trim(),
            priority: this.selectedRankColor ?? 0,
          });
        } else {
          await db.tasks.add({
            owner: this.owner.trim(),
            text: this.text.trim(),
            priority: this.selectedRankColor ?? 0,
            themeId: this.themeId,
          });
        }
        this.setTasks();
        this.$emit('close');
        this.setVisibleEditDialog(false);
      }
    },
    reset() {
      (this.$refs.form as HTMLFormElement).reset();
      this.setResetForm(true);
    },
  },
});
</script>
