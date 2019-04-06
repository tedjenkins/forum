<template>
  <div id="register">
    <LoginRegisterForm formId="register-form" :elements="formElements"/>
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

export default class Register extends Vue {
  formElements: formEls = [
    {
      html: `Signing up with ${Vue.prototype.$siteName} is quick and easy.`
    },
    {
      html: `<label for="register-username">Username</label> <input type="text" id="register-username" minlength="6" maxlength="24"/>`
    },
    {
      html: `<label for="register-password">Password</label> <input type="password" id="register-password"/>`
    },
    {
      html: `<label for="register-password-repeat">Repeat password</label> <input type="password" id="register-password-repeat"/>`
    },
    {
      html: `<label for="register-email">Email address</label> <input type="text" id="register-email" minlength="6" maxlength="24"/>`
    },
    {
      id: 'register-info',
      html: `By signing up you agree to our <a href="#">Terms of Service</a>, <a href="#">Privacy Policy</a> and our <a href="#">usage of cookies</a>. You must also be aged 13 or over to register.`
    },
    {
      html: `<button type="submit">Submit</button>`
    }
  ];
}
</script>

<style lang="scss" scoped>

</style>
