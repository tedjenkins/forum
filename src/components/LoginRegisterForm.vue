<template>
  <form class="site-form-login-register" :id="formId" @submit.prevent="handleForm">
    <h1>{{ formHeader }} {{ this.$siteName }}</h1>
    <template v-for="element of elements">
      <div class="form-section" v-if="element.html" v-html="element.html" :key="element.index"></div>
      <div class="form-section" v-else-if="!element.html" :key="element.index">
        <label :for="element.id">{{ element.label }}: </label> <input :type="element.type" minlength="6" maxlength="24" :id="element.id" @input="validateInput"/> <div class="form-input-wordcount"></div>
      </div>
    </template>
  </form> 
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { isEmail } from 'validator';

@Component({
  components: {}
})

export default class LoginRegisterForm extends Vue {
  @Prop() private formId!: string;
  @Prop() private formHeader!: string;
  @Prop() private elements!: object[];

  /**
   * Pre-submit validation. Displays current char length with max length beside input field (e.g. 33/128), adds / removes 'valid' class from field's <label>.
   * @param {Event} e -- input event.
   */
  validateInput = (e: Event) => {
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
  }

  /**
   * Insert profile type value into hidden text field based on the profile type <div> clicked on.
   * @param {MouseEvent} e -- mouse click event.
   */
  handleProfileType = (e: MouseEvent) => {
    const targ = e.target as HTMLElement;
    const hdnInput = targ.parentElement!.nextSibling as HTMLInputElement;

    if (targ.id !== 'form-profile-type') {
      hdnInput.value = targ.textContent!.toLowerCase();
    }
  }

  /**
   * Handle data in form on submit.
   * @param {Event} e -- form submit event.
   */
  handleForm = (e: Event) => {
    const targ = e.target as HTMLFormElement;
    console.log(targ);
  }
}
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
