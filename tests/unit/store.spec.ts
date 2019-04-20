import store from '@/store';

describe('store', () => {
  describe('mutation methods', () => {
    test('setModalAttr', () => {
      const el = document.createElement('div');
      store.commit('setModalAttr', el);
      expect(el.dataset.isModal).toBeDefined();
    });

    test('toggleModal', () => {
      expect(store.state.modalIsDisplaying).toEqual(false);
      store.commit('toggleModal');
      expect(store.state.modalIsDisplaying).toEqual(true);
    });
  });
});
