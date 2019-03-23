import { shallowMount } from '@vue/test-utils';
import LoginRegisterForm from '@/components/LoginRegisterForm.vue';

describe('LoginRegisterForm component', () => {
  const wrapper = shallowMount(LoginRegisterForm, {
    propsData: {
      elements: [
        {
          html: '<marquee>hello</marquee>'
        },
        {
          id: 'test-text-input',
          label: 'Test text input',
          type: 'text'
        },
        {
          id: 'test-email-input',
          label: 'Test email input',
          type: 'text'
        }
      ]
    }
  });
  const methods: {[key: string]: () => void} = wrapper.vm.$data;

  test('it is a form and has the "site-form" class', () => {
    expect(wrapper.contains('form')).toBe(true);
    expect(wrapper.classes()).toContain('site-form');
  });

  test('validateInput', () => {
    expect(methods.validateInput).toBeDefined();

    // Basic input triggers method
    const spy = jest.spyOn(methods, 'validateInput');
    wrapper.find('input').trigger('input');
    expect(spy).toHaveBeenCalled();

    // Valid email input
    wrapper.find('#test-email-input').setValue('hello@abc.com');
    expect(wrapper.find('label[for=test-email-input]').classes()).toContain('valid-input');
    wrapper.find('#test-email-input').setValue('hello');
    expect(wrapper.find('label[for=test-email-input]').classes()).not.toContain('valid-input');

    // Minimum length
    wrapper.find('#test-text-input').setValue('abcdefg');
    expect(wrapper.find('label[for=test-text-input]').classes()).toContain('valid-input');
    wrapper.find('#test-text-input').setValue('abc');
    expect(wrapper.find('label[for=test-text-input]').classes()).not.toContain('valid-input');
  });

  test('validateInputFocus', () => {
    expect(methods.validateInputFocus).toBeDefined();

    const spy = jest.spyOn(methods, 'validateInputFocus');
    wrapper.find('input').trigger('focus');
    expect(spy).toHaveBeenCalled();
  });

  test('validateInputBlur', () => {
    expect(methods.validateInputBlur).toBeDefined();

    const spy = jest.spyOn(methods, 'validateInputBlur');
    wrapper.find('input').trigger('blur');
    expect(spy).toHaveBeenCalled();
  });
});
