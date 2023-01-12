declare module '*.vue' {
  import type { DefineComponent } from 'vue'k

  const component: DefineComponent<{}, {}, any>
  export default component
}
