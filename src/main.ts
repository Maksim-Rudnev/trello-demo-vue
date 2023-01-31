import { Component, createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import loadFonts from './plugins/webfontloader';
import components from './components/UI';

loadFonts();

const app = createApp(App);

components.forEach((component: Component) => {
  if (component.name === undefined) return;
  app.component(component.name, component);
});

app
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app');
