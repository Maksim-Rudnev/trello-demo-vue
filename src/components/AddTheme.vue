<!-- eslint-disable vuejs-accessibility/no-autofocus -->
<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      autofocus
      class="mb-1"
      v-model="theme"
      :counter="30"
      :rules="themeRules"
      label="Theme"
      required
    ></v-text-field>
    <div class="d-flex justify-center">
      <v-btn
        color="success"
        size="small"
        @click="validate"
      >
        submit
        <v-icon
          class="pl-2"
          icon="mdi-checkbox-marked-circle"
        ></v-icon>
      </v-btn>
    </div>
  </v-form>
</template>

<script lang="ts">
import { db } from '@/db';
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'AddTheme',
  data: () => ({
    valid: true,
    theme: '',
    themeRules: [
      (v: string) => !!v || 'Theme is required',
      (v: string) => (v && v.length <= 30) || 'Theme must be less than 30 characters',
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
          await db.themes.add({
            name: this.theme,
          });
          this.$emit('visibleAddThemeClose');
          this.setThemes();
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
});
</script>
