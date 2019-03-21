<template>
  <div id="register">
    <LoginRegisterForm formId="register-form" formHeader="Register at " :inputElements="inputElements" :customElements="customElements"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LoginRegisterForm from '@/components/LoginRegisterForm.vue';
import * as v from '../main';

const formElements = [
  {
    html:
    `<h3>Reasons to sign up with ${Vue.prototype.$siteName}:</h3>
      <ul>
        <li>Stay on top of what's happening in Manchester.</li>
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
  get customElements() {
    return formElements.filter(entry => entry.html);
  }

  get inputElements() {
    return formElements.filter(entry => !entry.html);
  }
}
</script>

<style lang="scss">
h1 {
  font-size: 24px;
  text-align: center;
}

// Class to add to label elements, for marking input as success / valid.
.valid-input {
  color: forestgreen;
}

.form-section:last-child {
  justify-content: space-evenly;
}

#form-profile-type {
  & > * {
    border: 1px solid black;
    cursor: pointer;
    margin: 10px;
    padding: 6px;
  }
}
</style>