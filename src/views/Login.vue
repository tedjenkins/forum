<template>
  <div id="login">
    <LoginRegisterForm formId="login-form" formHeader="Log in to " :elements="formElements"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoginRegisterForm from '@/components/LoginRegisterForm.vue';

const formElements = [
  {
    id: 'form-username-email',
    label: 'Username or email address',
    type: 'text'
  },
  {
    id: 'form-password',
    label: 'Password',
    type: 'password'
  },
  {
    html:
      `<button type="submit">Submit</button>
        <div id="form-remember-me">
          <input type="checkbox" id="form-remember"/> <label for="form-remember"> Remember me</label>
        </div>
        <div id="form-forgot-password">
          (<a href="#">forgot password?</a>)
        </div>`
  }
];

formElements.forEach((obj, index) => Object.defineProperty(obj, 'index', { value: index }));

@Component({
  components: {
    LoginRegisterForm
  },
})

export default class Login extends Vue {
  get formElements() {
    return formElements;
  }
}
</script>

<style lang="scss" scoped>

</style>
