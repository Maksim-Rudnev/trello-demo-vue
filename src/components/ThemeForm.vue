<!-- eslint-disable vuejs-accessibility/no-autofocus -->
<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    @submit.prevent
  >
    <v-text-field
      trim
      autofocus
      class="mb-1"
      v-model="theme"
      :counter="40"
      :rules="themeRules"
      label="Theme"
      required
      @keyup.enter="validate"
    />
    <div
      class="d-flex
      justify-center"
    >
      <v-btn
        class="mb-3"
        color="success"
        size="small"
        @click="validate"
      >
        submit
        <v-icon class="pl-2" icon="mdi-checkbox-marked-circle"/>
      </v-btn>
    </div>
  </v-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

import { db } from '@/db';

export default defineComponent({
  name: 'ThemeForm',
  data: () => ({
    valid: true,
    theme: '',
    themeRules: [
      (v: string) => !!v.trim() || 'Theme is required',
      (v: string) => (v && v.length <= 40) || 'Theme must be less than 40 characters',
    ],
  }),
  methods: {
    ...mapActions({
      setThemes: 'board/setThemes',
    }),
    async validate() {
      const { valid } = await (this.$refs.form as HTMLFormElement).validate();
      if (valid) {
        await db.themes.add({
          name: this.theme.replace(/\s+/g, ' ').trim(),
        });
        this.$emit('close');
        this.setThemes();
      }
    },
  },
});
</script>
