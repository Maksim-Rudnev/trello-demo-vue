/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

//  declare module '@vue/runtime-core' {
//   import { Store } from '@/store'
//   interface ComponentCustomProperties {
//     $store: Store;
//    }
// }