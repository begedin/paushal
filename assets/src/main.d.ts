import Vue, { VNode } from 'vue';
import { Store } from 'vuex';
import { RootState } from './store';

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
