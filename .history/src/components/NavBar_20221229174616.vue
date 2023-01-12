<template>
  <v-card max-width="448" class="mx-auto" color="grey-lighten-3">
      <v-app-bar
        color="teal-darken-4"
        image="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>
        <v-img class="d-flex justify-start"
        height="30"
          src="@/assets/LogoWhite.png"
        ></v-img>
      </v-app-bar>
  </v-card>
</template>
