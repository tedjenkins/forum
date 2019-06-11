import { shallowMount } from '@vue/test-utils';
import FormTextInput from '@/components/FormTextInput.vue';

describe('FormTextInput component', () => {
  const wrapper = shallowMount(FormTextInput, {
    propsData: {
      id: 'test-form-username',
      label: 'Username (test)',
      isRequired: false
    }
  });

  test('it renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain('form-text-input');

    expect(wrapper.isVueInstance()).toBe(true);
  });

  test('it has a label and input combination which is recognised and is the first element', () => {
    expect(wrapper.html().includes('form-sect-label-input')).toBe(true);

    const labelInputEl = wrapper.vm.$el.children[0];

    expect(labelInputEl.hasChildNodes()).toBe(true);

    const nodeNames: string[] = [];

    for (const child of Object.values(labelInputEl.children)) {
      nodeNames.push(child.nodeName);
    }

    expect(labelInputEl.classList.contains('form-sect-label-input')).toBe(true);
    expect(nodeNames).toContain('LABEL');
    expect(nodeNames).toContain('INPUT');
  });

  test('it has a feedback box which is recognised and is the last element', () => {
    expect(wrapper.html().includes('input-feedback-box')).toBe(true);
    expect(
      wrapper.vm.$el.children[
        wrapper.vm.$el.children.length - 1
      ].classList.contains('input-feedback-box')
    ).toBe(true);
  });
});
