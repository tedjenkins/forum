<template>
  <div id="login">
    <LoginRegisterForm formId="login-form" :elements="formElements"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { formEls } from '@/types';
import LoginRegisterForm from '@/components/LoginRegisterForm.vue';

@Component({
  components: {
    LoginRegisterForm
  }
})

export default class Login extends Vue {
  formElements: formEls = [
    {
      html: `<label for="login-email">Email address</label> <input type="text" id="login-email"/>`
    },
    {
      html: `<label for="login-password">Password</label> <input type="password" id="login-password"/>`
    },
    {
      id: 'login-extra',
      html: `<button type="submit">Submit</button> <div id="form-remember-me"> <input type="checkbox" id="form-remember"/> <label for="form-remember">Remember me</label></div> <div id="form-forgot-password">(<a href="#">forgot password?</a>)</div>`
    }
  ];
}
</script>

<style lang="scss" scoped>

</style>
