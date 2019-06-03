import { shallowMount } from '@vue/test-utils';
import UserProfileListing from '@/components/UserProfileListing.vue';

describe('UserProfileListing component', () => {
  const wrapper = shallowMount(UserProfileListing, {
    propsData: {
      length: 5
    }
  });

  beforeEach(() => fetchMock.resetMocks());

  test('it renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain('user-listing-box');

    expect(wrapper.isVueInstance()).toBe(true);
  });
});
