<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <v-sheet min-width="300" width="300">
    <div class="mx-3 pb-5">
      <v-card min-height="80"
        class="mb-5 bg-grey-lighten-2 d-flex
        align-center"
      >
        <v-card-title  class="wrap">
          <span v-show="!edit">{{ theme.name  }}</span>
          <v-form ref="form" v-model="valid" lazy-validation v-show="edit">
            <v-textarea
              v-model="themeText"
              auto-grow
              :counter="40"
              :rules="themeRules"
              variant="underlined"
              rows="1"
            />
          </v-form>
        </v-card-title>

        <v-card-actions class="ml-auto gap py-0 px-2 d-flex flex-column justify-space-between">
          <v-btn class="ma-0"
            icon
            @click="editTheme"
            variant="tonal"
            size="x-small"
            :color="color"
          >
            <MyIcon :icon="icon" width="18"/>
          </v-btn>
          <v-btn class="ma-0"
            icon
            variant="tonal"
            size="x-small"
            color="red"
            @click="deleteTheme"
          >
            <MyIcon icon="mdi:trash" width="18" />
          </v-btn>
        </v-card-actions>
      </v-card>

      <task-list
        :tasks="getTasksByThemeId(theme.id)" :themeId="theme.id">
      </task-list>

      <v-expansion-panels v-model="panel">
        <v-expansion-panel value="add" elevation="0" class="border">
          <v-expansion-panel-title style="opacity: .65;"
            expand-icon="mdi-plus" collapse-icon="mdi-minus"
          >
            <v-btn variant="text" disabled style="opacity: 1;">ADD TASK</v-btn>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <task-form @close="none" class="pa-0"
              :themeId="theme.id"
            />
          </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
  </v-sheet>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import { db } from '@/db';
import TaskList from './TaskList.vue';
import TaskForm from './TaskForm.vue';

export default defineComponent({
  name: 'ChapterBoard',
  components: { TaskList, TaskForm },
  props: {
    theme: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      color: 'info',
      icon: 'mdi-pencil',
      panel: [],
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
    none() {
      this.panel = [];
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
            name: this.themeText,
          });
          this.setThemes();
        }
      }
    },
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
</style>
