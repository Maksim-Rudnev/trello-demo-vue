<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-main class="v-layout-0">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';

export default defineComponent({
  name: 'App',

  components: {
    NavBar,
  },
  data() {
    return {
      //
    };
  },
});
</script>
<style>
  .v-layout-top {
    --v-layout-top:0px,
  }
</style>
