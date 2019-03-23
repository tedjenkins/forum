import { shallowMount } from '@vue/test-utils';
import SiteSearchBox from '@/components/SiteSearchBox.vue';

describe('SiteSearchBox component', () => {
  const wrapper = shallowMount(SiteSearchBox);
  const methods: {[key: string]: () => void} = wrapper.vm.$data;

  test('it is a div and has the "site-search" class', () => {
    expect(wrapper.contains('div')).toBe(true);
    expect(wrapper.classes()).toContain('site-search');
  });
});
