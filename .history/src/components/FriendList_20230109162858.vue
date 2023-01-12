<template>
  <ul>
    <li v-for="theme in themes" :key="theme.id">
      {{ theme.name }}
    </li>
  </ul>
</template>

<script lang="ts">

import { liveQuery } from 'dexie';
import { useObservable } from '@vueuse/rxjs';
import { db } from '@/db';
import mapActions from 'vuex';
import { Theme } from '@/models/Theme';

export default {
  name: 'FriendList',
  data() {
    return {
      db,
      themes: useObservable<Theme[]>(
        liveQuery(() => db.themes.toArray()),
      ),
    };
  },
  methods: {
  },

};
</script>
