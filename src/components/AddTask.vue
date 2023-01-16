<template>
<v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="title"
      :counter="20"
      :rules="titleRules"
      label="Title"
      required
    ></v-text-field>

    <v-textarea
    :counter="300"
      v-model="text"
      :rules="textRules"
      label="Text"
      required></v-textarea>

    <div class="d-flex justify-center mt-3">
      <v-btn
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
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
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'AddTask',
  props: {
    themeId: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    valid: true,
    title: '',
    titleRules: [
      (v: string) => !!v || 'Title is required',
      (v: string) => (v && v.length <= 20) || 'Title must be less than 20 characters',
    ],
    text: '',
    textRules: [
      (v: string) => !!v || 'Text is required',
      (v: string) => (v && v.length <= 300) || 'Text must be less than 300 characters',
    ],
  }),

  methods: {
    ...mapActions({
      setThemes: 'board/setThemes',
      setTasks: 'board/setTasks',
    }),
    async validate() {
      const { valid } = await (this.$refs.form as HTMLFormElement).validate();

      if (valid) {
        try {
          await db.tasks.add({
            title: this.title,
            text: this.text,
            priority: 0,
            themeId: this.themeId,
          });
          this.$emit('visibleAddModelClose');
          this.setThemes();
          this.setTasks();
        } catch (error) {
          console.log(error);
        }
      }
    },
    reset() {
      (this.$refs.form as HTMLFormElement).reset();
    },
  },
});
</script>
