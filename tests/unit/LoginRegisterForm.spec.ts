import { shallowMount } from '@vue/test-utils';
import { formEls } from '@/types';
import LoginRegisterForm from '@/components/LoginRegisterForm.vue';

describe('LoginRegisterForm component', () => {
  const mockEls: formEls = [
    {
      html: '<h3>This is a test form.</h3>'
    },
    {
      html: `<label for="name-input">Enter your name: </label> <input type="text" id="name-input"/>`
    },
    {
      html: `<label for="location-input">Enter your location: </label> <input type="text" id="location-input"/>`
    },
    {
      html: `<label for="date-input">Enter your date of birth: </label> <input type="date" id="date-input"/>`
    },
    {
      id: 'test-form-extras',
      html: `<label for="confirm-input">Confirm...</label> <input type="checkbox" id="confirm-input"/>`
    },
    {
      id: 'test-form-submit',
      html: `<button type="submit">Submit</button>`
    }
  ];

  const wrapper = shallowMount(LoginRegisterForm, {
    propsData: {
      formId: 'test-form',
      elements: mockEls
    }
  });

  test('it is a form, has the "site-form" class and renders correctly', () => {
    expect(wrapper.contains('form')).toBe(true);
    expect(wrapper.contains('label')).toBe(true);
    expect(wrapper.contains('input')).toBe(true);
    expect(wrapper.contains('button')).toBe(true);
    expect(wrapper.classes()).toContain('site-form');

    expect(wrapper.isVueInstance()).toBe(true);
    expect(wrapper.html().match(/"form-section"/g)).toHaveLength(mockEls.length);
  });

  describe('methods', () => {
    const methods: {[key: string]: () => void} = wrapper.vm;

    test('handleForm', () => {
      expect(methods.handleForm).toBeDefined();
    });
  });
});
