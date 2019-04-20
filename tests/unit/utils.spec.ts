import utils from '@/utils';

describe('utils', () => {
  describe('recursiveSetModalAttr', () => {
    test('it exists, is a function and returns early when without children', () => {
      expect(utils.recursiveSetModalAttr).toBeDefined();
      expect(typeof utils.recursiveSetModalAttr).toEqual('function');

      const spy = jest.spyOn(utils, 'recursiveSetModalAttr');
      utils.recursiveSetModalAttr(document.createElement('div'));
      expect(spy).toHaveReturnedWith(undefined);
    });

    test('it sets modal attribute to element and all children of element', () => {
      const el = document.createElement('section');
      const child1 = document.createElement('div');
      const child2 = document.createElement('div');
      const grandchild1 = document.createElement('div');

      el.appendChild(child1);
      el.appendChild(child2);
      child1.appendChild(grandchild1);

      utils.recursiveSetModalAttr(el);

      expect(el.dataset.isModal).toBeDefined();
      expect(child1.dataset.isModal).toBeDefined();
      expect(child2.dataset.isModal).toBeDefined();
      expect(grandchild1.dataset.isModal).toBeDefined();
    });
  });
});
