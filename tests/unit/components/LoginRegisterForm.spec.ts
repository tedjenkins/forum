import { shallowMount } from '@vue/test-utils';
import { formEls } from '@/types';
import LoginRegisterForm from '@/components/LoginRegisterForm.vue';

describe('LoginRegisterForm component', () => {
  const mockEls: formEls = [
    {
      html: `<label for="login-email">Email address</label> <input type="text" id="login-email"/>`
    },
    {
      id: 'login-extra',
      html: `<button type="submit">Submit</button> <div id="form-remember-me"> <input type="checkbox" id="form-remember"/> <label for="form-remember">Remember me</label></div> <div id="form-forgot-password">(<a href="#">forgot password?</a>)</div>`
    }
  ];

  const wrapper = shallowMount(LoginRegisterForm, {
    propsData: {
      formId: 'test-form',
      elements: mockEls
    }
  });

  test('it is a form, has the "site-form" class and renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.contains('form')).toBe(true);
    expect(wrapper.contains('label')).toBe(true);
    expect(wrapper.contains('input')).toBe(true);
    expect(wrapper.contains('button')).toBe(true);
    expect(wrapper.classes()).toContain('site-form');

    expect(wrapper.isVueInstance()).toBe(true);
    expect(wrapper.html().match(/"form-section"/g)).toHaveLength(
      mockEls.length
    );
  });

  test('the appropriate event handling method is called on submit', () => {
    let flag = false;
    const stub = () => (flag = true);
    wrapper.setMethods({ handleForm: stub });

    wrapper.find('form').trigger('submit');
    expect(flag).toBe(true);
  });
});
