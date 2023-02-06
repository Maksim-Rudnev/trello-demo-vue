<template>
  <v-app-bar
    style="position: block;"
    color="teal-darken-4"
    image="https://picsum.photos/1920/1080?random"
  >
    <template v-slot:image>
      <v-img
        gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
      />
    </template>
    <v-img
      height="30"
      src="@/assets/LogoWhite.png"
    />
  </v-app-bar>
</template>
