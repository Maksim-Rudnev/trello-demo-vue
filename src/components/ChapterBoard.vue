<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <v-sheet
    @click.capture="setCloseAllPanel(false)"
    elevation="0"
    min-width="300"
    width="300"
    height="min-content"
    class="transparent"
  >
    <v-card
      min-height="80"
      elevation="0"
      class="mb-5
      currentColor
      d-flex
      align-center
      border"
    >
      <v-card-title class="wrap">
        <span v-show="!edit">
          {{ theme.name  }}
        </span>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          v-show="edit"
        >
          <v-textarea
            v-model="themeText"
            auto-grow
            :counter="40"
            :rules="themeRules"
            variant="underlined"
            rows="1"
            @keyup.enter.exact="editTheme"
          />
        </v-form>
      </v-card-title>
      <v-card-actions
        class="ml-auto
        gap
        py-0
        px-2
        d-flex
        flex-column
        justify-space-between"
      >
        <v-btn
          class="ma-0"
          icon
          @click="editTheme"
          size="x-small"
          :color="color"
        >
          <CustomIcon :icon="icon" width="18"/>
        </v-btn>
        <v-btn
          class="ma-0"
          icon
          size="x-small"
          color="red"
          @click="deleteTheme"
        >
          <CustomIcon icon="mdi:trash" width="18"/>
        </v-btn>
      </v-card-actions>
    </v-card>
    <task-list
      :tasks="getTasksByThemeId(theme.id)"
      :themeId="theme.id"
    />
  </v-sheet>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { mapGetters, mapActions, mapMutations } from 'vuex';

import { db } from '@/db';
import TaskList from './TaskList.vue';

export default defineComponent({
  name: 'ChapterBoard',
  components: { TaskList },
  props: {
    theme: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
    },
  },
  updated() {
    this.updateIndex();
  },
  data() {
    return {
      color: 'info',
      icon: 'mdi-pencil',
      edit: false,
      valid: true,
      themeText: '',
      themeRules: [
        (v: string) => !!v.trim() || 'Theme is required',
        (v: string) => (v && v.length <= 40) || 'Theme must be less than 40 characters',
      ],
    };
  },
  methods: {
    updateIndex() {
      if (this.theme.index !== this.index) {
        db.themes.update(this.theme.id, {
          index: this.index,
        });
      }
    },
    async editTheme() {
      const { valid } = await (this.$refs.form as HTMLFormElement).validate();
      this.edit = !this.edit;
      if (this.edit) {
        this.themeText = this.theme.name.trim();
        this.color = 'success';
        this.icon = 'mingcute:save-fill';
      }
      if (!this.edit) {
        this.color = 'info';
        this.icon = 'mdi-pencil';
        if (valid && this.themeText !== this.theme.name) {
          db.themes.update(this.theme.id, {
            name: this.themeText.replace(/\s+/g, ' ').trim(),
          });
          this.setThemes();
        }
      }
    },
    ...mapMutations({
      setCloseAllPanel: 'board/setCloseAllPanel',
    }),
    ...mapActions({
      setTasks: 'board/setTasks',
      setThemes: 'board/setThemes',
    }),
    async deleteTheme() {
      await db.themes.delete(this.theme.id);
      await db.tasks.where('themeId').anyOf(this.theme.id).delete();
      this.setThemes();
      this.setTasks();
    },
  },
  computed: {
    ...mapGetters({
      getTasksByThemeId: 'board/getTasksByThemeId',
    }),
  },
});
</script>

<style scoped>
.border {
  border: 1px solid;
  border-color: rgb(229,229,229);
  border-radius: 4px;
}
.v-expansion-panel-text__wrapper {
  padding: 6px 1px;
}
.wrap {
  flex: initial;
  white-space: inherit;
}
.gap {
  gap: 4px;
}
.transparent {
  background: transparent;
}
.currentColor {
  background-color:rgb(232,232,232);
}
</style>
