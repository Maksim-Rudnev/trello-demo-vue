<template>
  <div class="mx-5 pb-5">
    <v-card
      class="mb-5 bg-grey-lighten-2"
      width="300"
      :title="theme.name">
    </v-card>
    <task-list
      :tasks="getTaskByThemeId(theme.id)">
    </task-list>
    <v-btn
      variant="plain"
      width="300"
      height="90"
      class="v-btn--border"
      v-on:click="openForm">
      + Add new card
    </v-btn>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import TaskList from './TaskList.vue';

export default defineComponent({
  components: { TaskList },
  data() {
    return {
      visibleAddModel: false,
    };
  },
  methods: {
    openForm(event: Event) {
      console.log(event);
    },
  },
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
