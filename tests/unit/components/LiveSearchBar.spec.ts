import { shallowMount } from '@vue/test-utils';
import LiveSearchBar from '@/components/LiveSearchBar.vue';

describe('LiveSearchBar component', () => {
  const wrapper = shallowMount(LiveSearchBar, {
    propsData: {
      inputId: 'test-input',
      label: 'Test label'
    }
  });

  test('it renders correctly and is an input field', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.contains('input')).toBe(true);
    expect(wrapper.classes()).toContain('live-search-bar');

    expect(wrapper.isVueInstance()).toBe(true);
  });

  test('the appropriate event handling method is called on input', () => {
    let flag = false;
    wrapper.setMethods({ handleInput: () => (flag = true) });

    wrapper.find('input').trigger('input');
    expect(flag).toBe(true);
  });
});
