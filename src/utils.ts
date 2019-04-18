// * -----------------
// * Helper functions.
// * -----------------
import store from '@/store';

const utils = {
  recursiveSetModalAttr: (el: HTMLElement) => {
    store.commit('setModalAttr', el);
    for (const child of Array.from(el.children)) {
      utils.recursiveSetModalAttr(child as HTMLElement);
    }
  }
};

export default utils;
