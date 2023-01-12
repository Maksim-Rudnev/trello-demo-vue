<template>
  <div class="mx-5">
    {{ theme.name }}
    <v-card-title class="text-xs-h6 text-md-h5 text-lg-h4">Title</v-card-title>
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
  mounted() {
    console.log(this.theme.id);
  },
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
