<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <fieldset>
    <legend>Add new friend</legend>
    <label>
      Name:
      <input v-model="friendName" type="text" />
    </label>
    <br />
    <label>
      Age:
      <input v-model="friendAge" type="number" />
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
  },
});
</script>
