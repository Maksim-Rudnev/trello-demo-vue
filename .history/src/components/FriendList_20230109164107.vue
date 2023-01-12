<template>
  <ul>
    <li v-for="theme in themes" :key="theme.id">
      {{ theme.name }}
    </li>
  </ul>
</template>

<script lang="ts">

import { useObservable } from '@vueuse/rxjs';
import { db } from '@/db';
import mapActions from 'vuex';
import { from } from 'rxjs';

export default {
  name: 'FriendList',
  data() {
    return {
      db,
      themes: useObservable(from(db.themes.toArray())),
    };
  },
  methods: {
    ...mapActions([
      setThemes: 'board/setThemes',
    []),
  },

};
</script>
