<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <fieldset>
    <legend>Add new Theme</legend>
    <label>
      Name:
      <input v-model="themeName" type="text" />
    </label>
    <br />
    <button @click="addTheme">Add Theme</button>
    <p>{{ themeStatus }}</p>
  </fieldset>

  <fieldset>
    <legend>Add new Task</legend>
    <label>
      Title:
      <input v-model="taskTitle" type="text" />
    </label>
    <br />
    <label>
      Text:
      <input v-model="taskText" type="text" />
    </label>
    <br />
    <label>
      Priority:
      <input v-model="priority" type="text" />
    </label>
    <br />
    <label>
      ThemeId:
      <input v-model="themeId" type="text" />
    </label>
    <br />
    <button @click="addTask">Add Task</button>
    <p>{{ taskStatus }}</p>
  </fieldset>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { db } from '../db';

export default defineComponent({
  name: 'FriendAdder',
  props: {
    defaultAge: {
      type: Number,
      default: 21,
    },
  },
  data() {
    return {
      themeStatus: '',
      themeName: '',

      taskStatus: '',
      taskText: '',
      taskTitle: '',
      priority: 0,
      themeId: 0,
    };
  },

  methods: {
    async addTheme() {
      try {
        const id = await db.themes.add({
          name: this.themeName,
        });

        this.themeStatus = `Theme ${this.themeName}
          successfully added. Got id ${id}`;

        // Reset form:
        this.themeName = '';
      } catch (error) {
        this.themeStatus = `Failed to add ${this.themeName}: ${error}`;
      }
    },
    async addTask() {
      try {
        const id = await db.tasks.add({
          title: this.taskTitle,
          text: this.taskText,
          priority: 
        });

        this.themeStatus = `Theme ${this.themeName}
          successfully added. Got id ${id}`;

        // Reset form:
        this.themeName = '';
      } catch (error) {
        this.themeStatus = `Failed to add ${this.themeName}: ${error}`;
      }
    },
  },
});
</script>
