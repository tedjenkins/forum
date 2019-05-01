import { props, utils } from '@/utils';

describe('utils', () => {
  describe('expandCollapseSection', () => {
    let testHeader: HTMLElement;

    beforeEach(() => {
      document.body.innerHTML =
        '<section id="test-section"><h4 id="test-header">Test header</h4><div id="test-section-box">This is test box</div><h2 id="fake-header">This is not the header</h2></section>';
      testHeader = document.getElementById('test-header')!;
      localStorage.clear();
    });

    const testClickHandler = (e: MouseEvent) => {
      utils.expandCollapseSection(
        e.target as HTMLElement,
        document.getElementById('test-section-box')!
      );
    };

    test('it returns early when the target is not an <h4> element', () => {
      const spy = jest.spyOn(utils, 'expandCollapseSection');
      document
        .getElementById('fake-header')!
        .addEventListener('click', testClickHandler);
      document.getElementById('fake-header')!.click();
      expect(spy).toHaveReturnedWith(undefined);
    });

    test('it adds the hidden class to "sect" argument', () => {
      testHeader.addEventListener('click', testClickHandler);
      testHeader.click();
      expect(document.getElementById('test-section-box')!.classList).toContain(
        'side-interface-hidden'
      );
    });

    test('it adds to localStorage if localStorage is null', () => {
      expect(localStorage.getItem(props.lsEntry)).toEqual(null);

      testHeader.addEventListener('click', testClickHandler);
      testHeader.click();

      expect(localStorage.getItem(props.lsEntry)).not.toEqual(null);
    });

    test('it adds to the data array if the id of "sect" is not present', () => {
      localStorage.setItem(props.lsEntry, JSON.stringify(['id-1', 'id-2']));

      testHeader.addEventListener('click', testClickHandler);
      testHeader.click();

      expect(JSON.parse(localStorage.getItem(props.lsEntry) as string)).toEqual(
        ['id-1', 'id-2', 'test-section-box']
      );
    });

    test('it deletes from the data array if the id of "sect" is present', () => {
      localStorage.setItem(
        props.lsEntry,
        JSON.stringify(['id-1', 'test-section-box', 'id-2'])
      );

      testHeader.addEventListener('click', testClickHandler);
      testHeader.click();

      expect(JSON.parse(localStorage.getItem(props.lsEntry) as string)).toEqual(
        ['id-1', 'id-2']
      );
    });

    test('it removes the entry from localStorage if its length is zero', () => {
      localStorage.setItem(props.lsEntry, JSON.stringify(['test-section-box']));

      testHeader.addEventListener('click', testClickHandler);
      testHeader.click();

      expect(localStorage.getItem(props.lsEntry)).toEqual(null);
    });
  });
});
