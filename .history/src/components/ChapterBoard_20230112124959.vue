<template>
  <div class="mx-5 width-chapter">
    <v-card
      class="mb-5 bg-amber-accent-3"
      width="400"
      :title="theme.name">
    </v-card>
    <task-list
      :tasks="getTaskByThemeId(theme.id)">
    </task-list>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import TaskList from './TaskList.vue';

export default defineComponent({
  components: { TaskList },
  props: {
    theme: {
      type: Object,
      required: true,
    },
  },
  name: 'ChapterBoard',
  computed: {
    ...mapGetters({
      getTaskByThemeId: 'board/getTaskByThemeId',
    }),
  },
});
</script>
<style>
  .width-chapter {
    width: 500px;
  }
</style>
