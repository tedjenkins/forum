<template>
  <div id="register">
    <form class="site-form" id="register-form" @submit.prevent="handleForm">
      <h1>Register with {{ this.$siteName }}</h1>
      <div class="form-section" id="form-content">
        <h3>Reasons to sign up with {{ this.$siteName }}:</h3>
        <ul>
          <li>Stay on top of what's happening in Manchester.</li>
          <li>ijf</li>
          <li>It's cool</li>
        </ul>
      </div>
      <div class="form-section">
        <label for="form-username">Username: </label> <input type="text" id="form-username" minLength="6" maxlength="120" @input="validateInput"/> <div></div>
      </div>
      <div class="form-section">
        <label for="form-password">Password: </label> <input type="password" id="form-password"/>
      </div>
      <div class="form-section">
        <label for="form-password-repeat">Repeat password: </label> <input type="password" id="form-password-repeat"/>
      </div>
      <div class="form-section">
        <label for="form-email">Email address: </label> <input type="text" id="form-email" @input="validateInput"/>
      </div>
      <div class="form-section">
        <label for="form-profile-type">Profile type: </label>
        <div id="form-profile-type" @click="handleProfileType">
          <div id="form-profile-type-consumer">Consumer</div>
          <div id="form-profile-type-promoter">Promotor</div>
        </div>
        <input type="hidden" id="form-profile-type-value">
      </div>
      <div class="form-section">
        <div id="form-info">By signing up you agree to our <a href="#">Terms of Service</a>, <a href="#">Privacy Policy</a> and our <a href="#">usage of cookies</a>. You must also be aged 13 or over to register.</div>
      </div>
      <div class="form-section">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { isEmail } from 'validator';
import LoginRegisterForm from '@/components/LoginRegisterForm.vue';

@Component({
  components: {
    LoginRegisterForm
  },
  computed: {
    
  },
  methods: {
    /**
     * Pre-submit validation. Displays current char length with max length beside input field (e.g. 33/128), adds / removes 'valid' class from field's <label>.
     * @param {Event} e -- input event.
     */
    validateInput: (e: Event) => {
      const targ = e.target as HTMLInputElement;
      const targLabel = targ.previousElementSibling!;

      if (targ.type !== 'text') {
        return;
      }

      // For email field, check if valid email address syntax
      if (targ.id === 'form-email') {
        if (isEmail(targ.value)) {
          targLabel.classList.add('valid-input');
        } else if (!isEmail(targ.value) && targLabel.classList.contains('valid-input')) {
          targLabel.classList.remove('valid-input');
        }
      }

      // Valid minimum length, don't check email fields
      if (targ.id !== 'form-email') {
        // Current length / maxLength count
        targ.nextSibling!.textContent = `${targ.value.length}/${targ.maxLength}`;

        if (targ.value.length >= +targ.minLength) {
          targLabel.classList.add('valid-input');
        } else if (targ.value.length < +targ.minLength && targLabel.classList.contains('valid-input')) {
          targLabel.classList.remove('valid-input');
        }
      }
    },
    /**
     * Insert profile type value into hidden text field based on the profile type <div> clicked on.
     * @param {MouseEvent} e -- mouse click event.
     */
    handleProfileType: (e: MouseEvent) => {
      const targ = e.target as HTMLElement;
      const hdnInput = targ.parentElement!.nextSibling as HTMLInputElement;

      if (targ.id !== 'form-profile-type') {
        hdnInput.value = targ.textContent!.toLowerCase();
      }
    },
    /**
     * Handle data in form on submit.
     * @param {Event} e -- form submit event.
     */
    handleForm: (e: Event) => {
      const targ = e.target as HTMLFormElement;
      console.log(targ);
    }
  }
})

export default class Register extends Vue {}
</script>

<style lang="scss" scoped>
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