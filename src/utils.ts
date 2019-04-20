// * -----------------
// * Helper functions.
// * -----------------
import store from '@/store';

const utils = {
  recursiveSetModalAttr: (el: HTMLElement) => {
    store.commit('setModalAttr', el);

    if (el.children.length === 0) {
      return;
    }

    for (const child of Array.from(el.children)) {
      utils.recursiveSetModalAttr(child as HTMLElement);
    }
  }
};

export default utils;
