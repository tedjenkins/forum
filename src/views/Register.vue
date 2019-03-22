<template>
  <div id="register">
    <LoginRegisterForm formId="register-form" formHeader="Register at " :elements="formElements"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LoginRegisterForm from '@/components/LoginRegisterForm.vue';

const formElements = [
  {
    html:
    `<h2>Reasons to sign up with ${Vue.prototype.$siteName}:</h2>
      <ul>
        <li>Stay on top of what's happening.</li>
        <li>ijf</li>
        <li>It's cool</li>
      </ul>`
  },
  {
    id: 'form-username',
    label: 'Username',
    type: 'text'
  },
  {
    id: 'form-password',
    label: 'Password',
    type: 'password'
  },
  {
    id: 'form-password-repeat',
    label: 'Repeat password',
    type: 'password'
  },
  {
    id: 'form-email',
    label: 'Email address',
    type: 'text'
  },
  {
    html:
      `<label for="form-profile-type">Profile type: </label>
        <div id="form-profile-type" @click="handleProfileType">
          <div id="form-profile-type-consumer">Consumer</div>
          <div id="form-profile-type-promoter">Promotor</div>
        </div>
        <input type="hidden" id="form-profile-type-value">`
  },
  {
    html:
      `<div id="form-info">By signing up you agree to our <a href="#">Terms of Service</a>, <a href="#">Privacy Policy</a> and our <a href="#">usage of cookies</a>. You must also be aged 13 or over to register.</div>`
  },
  {
    html:
      `<button type="submit">Submit</button>`
  }
];

formElements.forEach((obj, index) => Object.defineProperty(obj, 'index', { value: index }));

@Component({
  components: {
    LoginRegisterForm
  }
})

export default class Register extends Vue {
  get formElements() {
    return formElements;
  }
}
</script>

<style lang="scss" scoped>

</style>