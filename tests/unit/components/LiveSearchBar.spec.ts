import { shallowMount } from '@vue/test-utils';
import LiveSearchBar from '@/components/LiveSearchBar.vue';

describe('LiveSearchBar component', () => {
  const wrapper = shallowMount(LiveSearchBar, {
    propsData: {
      inputId: 'test-input',
      label: 'Test label'
    }
  });

  test('it is a text input field, has the "live-search-bar" class and renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.contains('input')).toBe(true);
    expect(wrapper.classes()).toContain('live-search-bar');

    expect(wrapper.isVueInstance()).toBe(true);
  });

  test('the appropriate event handling method is called on input', () => {
    let flag = false;
    const stub = () => (flag = true);
    wrapper.setMethods({ handleInput: stub });

    wrapper.find('input').trigger('input');
    expect(flag).toBe(true);
  });
});
