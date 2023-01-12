<template>
  <ul>
    <li v-for="theme in themes" :key="theme.id">
      {{ friend.name }}, {{ friend.age }}
    </li>
  </ul>
</template>

<script>
import { liveQuery } from 'dexie';
import { useObservable } from '@vueuse/rxjs';
import { db } from '@/db';

export default {
  name: 'FriendList',
  data() {
    return {
      db,
      themes: useObservable(
        liveQuery(() => db.themes.toArray()),
      ),
    };
  },
};
</script>
