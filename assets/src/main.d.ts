import Vue, { VNode } from 'vue';
import { CreateElement } from 'vue/types/umd';

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
