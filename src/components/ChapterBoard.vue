<template>
  <v-sheet min-width="300">
    <div class="mx-3 pb-5">
    <v-card
      class="mb-5 bg-grey-lighten-2"
      :title="theme.name">
    </v-card>
    <task-list
      :tasks="getTaskByThemeId(theme.id)">
    </task-list>

    <v-btn
      v-if="!visibleAddModel"
      variant="plain"
      height="90"
      width="300"
      class="v-btn--border"
      v-on:click="openForm">
      + Add new card
    </v-btn>

    <v-card class="pa-3 d-flex flex-column justify-center"
      v-if="visibleAddModel">
      <add-task
        :themeId="theme.id"
        @visibleAddTaskClose="closeForm"
      />

      <v-btn
        variant="text"
        class="mt-4"
        v-on:click="closeForm"
      >
        <v-icon
          start
          icon="mdi-minus-circle"
        ></v-icon>
        Cancel
      </v-btn>
    </v-card>
  </div>
  </v-sheet>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import TaskList from './TaskList.vue';
import AddTask from './AddTask.vue';

export default defineComponent({
  name: 'ChapterBoard',
  components: { TaskList, AddTask },
  props: {
    theme: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      visibleAddModel: false,
    };
  },
  methods: {
    openForm() {
      this.visibleAddModel = true;
    },
    closeForm() {
      this.visibleAddModel = false;
    },
  },
  computed: {
    ...mapGetters({
      getTaskByThemeId: 'board/getTaskByThemeId',
    }),
  },
});
</script>
