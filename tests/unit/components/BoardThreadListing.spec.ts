import { shallowMount } from '@vue/test-utils';
import BoardThreadListing from '@/components/BoardThreadListing.vue';

describe('BoardThreadListing component', () => {
  const wrapper = shallowMount(BoardThreadListing, {
    propsData: {
      length: 5
    }
  });

  beforeEach(() => fetchMock.resetMocks());

  test('it renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain('thread-listing-box');

    expect(wrapper.isVueInstance()).toBe(true);
  });

  // TODO //
  test('it fetches the set number of threads based on the length property', () => {
    expect(wrapper.contains('.thread-box')).toEqual(null);
  });
});
