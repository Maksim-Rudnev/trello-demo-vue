<template>
  <v-expansion-panels class="mb-5">
    <v-expansion-panel>

      <v-expansion-panel-title class="pa-0">
          <v-card elevation="0"  class="w-100 rounded-0">
            <v-card-title class="pt-0 d-flex flex-column">
              <v-sheet class="mb-3 align-self-center rounded-b-xl pl-10"
                :color="colors[task.priority]" width="180" height="5"
              />
              {{ task.owner }}
            </v-card-title>
            <v-card-text>
              {{ task.text }}
            </v-card-text>
          </v-card>
      </v-expansion-panel-title>

      <v-expansion-panel-text class="pa-0 ma-0">
        <v-sheet class="d-flex lighten-3 px-4 my-2 justify-center gap">
          <v-btn @click="setVisibleEditDialog(true),setSelectedTask(task.id)"
            rounded size="small" color="info"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn @click="deleteTask" rounded size="small" color="red">
            <MyIcon icon="mdi:trash" width="16" />
          </v-btn>
        </v-sheet>
      </v-expansion-panel-text>

    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { db } from '@/db';
import { mapActions, mapMutations, mapState } from 'vuex';

export default defineComponent({
  props: {
    task: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
    },
  },
  computed: {
    ...mapState({
      colors: (state: any): string[] => state.board.colors,
    }),
  },
  name: 'TaskItem',
  updated() {
    this.updateIndex();
  },
  methods: {
    updateIndex() {
      if (this.task.index !== this.index) {
        db.tasks.update(this.task.id, {
          index: this.index,
        });
      }
    },
    ...mapActions({
      setTasks: 'board/setTasks',
    }),
    ...mapMutations({
      setVisibleEditDialog: 'board/setVisibleEditDialog',
      setSelectedTask: 'board/setSelectedTask',
    }),
    async deleteTask() {
      await db.tasks.delete(this.task.id);
      this.setTasks();
    },
  },
});
</script>
<style scoped>
.gap {
  gap: 20px;
}</style>
