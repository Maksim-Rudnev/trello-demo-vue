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

      
    };
  },

  methods: {
    async addTheme() {
      try {
        // Add the new friend!
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
        // Add the new friend!
        const id = await db.tasks.add({
          text: this.themeName,
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
