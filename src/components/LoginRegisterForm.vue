<template>
  <form class="site-form site-form-login-register" :id="formId" @submit.prevent="handleForm">
    <h1>{{ formHeader }} {{ this.$siteName }}</h1>
    <template v-for="element of elements">
      <div class="form-section injected-html" v-if="element.html" v-html="element.html" :key="element.index" :id="element.id"></div>
      <div class="form-section label-input-pairing" v-else-if="!element.html" :key="element.index">
        <label :for="element.id">{{ element.label }} <span class="form-input-wordcount" style="display: none"></span></label> <input :type="element.type" minlength="6" maxlength="24" :id="element.id" @input="validateInput" @focus="validateInputFocus" @blur="validateInputBlur"/>
      </div>
    </template>
  </form> 
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { isEmail } from 'validator';

@Component({
  components: {},
  mounted() {
    // Default textContent for each wordcount element is "(0/maxLength of input)"
    document.querySelectorAll('.form-input-wordcount').forEach(node => node.textContent = `(0/${(node.parentElement!.nextSibling! as HTMLInputElement).maxLength})`);
  }
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
    if (targ.id.includes('email')) {
      if (isEmail(targ.value)) {
        targLabel.classList.add('valid-input');
      } else if (!isEmail(targ.value) && targLabel.classList.contains('valid-input')) {
        targLabel.classList.remove('valid-input');
      }
    }

    // Valid minimum length, don't check email fields
    if (!targ.id.includes('email')) {
      // Current length / maxLength count
      targLabel.querySelector('.form-input-wordcount')!.textContent = `(${targ.value.length}/${targ.maxLength})`;

      if (targ.value.length >= +targ.minLength) {
        targLabel.classList.add('valid-input');
      } else if (targ.value.length < +targ.minLength && targLabel.classList.contains('valid-input')) {
        targLabel.classList.remove('valid-input');
      }
    }
  }

  /**
   * Makes char length word count appear on input field focus.
   * @param {Event} e -- focus event.
   */
  validateInputFocus = (e: Event) => {
    const targ = e.target as HTMLInputElement;
    const targLabel = targ.previousElementSibling!;

    targLabel.querySelector('.form-input-wordcount')!.removeAttribute('style');
  }

  /**
   * Makes char length word count disappear on input field blur.
   * @param {Event} e -- blur event.
   */
  validateInputBlur = (e: Event) => {
    const targ = e.target as HTMLInputElement;
    const targLabel = targ.previousElementSibling!;

    targLabel.querySelector('.form-input-wordcount')!.setAttribute('style', 'display: none');
  }

  /**
   * Insert profile type value into hidden text field based on the profile type <div> clicked on.
   * @param {MouseEvent} e -- mouse click event.
   */
  handleProfileType = (e: MouseEvent) => {
    const targ = e.target as HTMLElement;
    const hdnInput = targ.parentElement!.nextSibling as HTMLInputElement;

    if (!targ.id.includes('form-profile-type')) {
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
// Class to add to label elements, for marking input as success / valid.
.valid-input {
  color: forestgreen;
}

.site-form-login-register {
  display: grid;
  grid-gap: 6px;
  max-width: calc($site-max-width / 2);

  h1 {
    font-size: 20px;
    margin-top: 10px;
    text-align: center;
  }

  /deep/ h2 {
    font-size: 16px;
  }
}

@media all and (min-width: 400px) {

}

@media all and (min-width: 600px) {

}

@media all and (min-width: 800px) {

}

@media all and (min-width: 1200px) {
  h1 {
    font-size: 24px;
    text-align: center;
  }

  .site-form-login-register {
    .form-section {
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 10px 0px;

      label {
        flex: 0 1 45%;
      }

      input {
        flex: 0 1 55%;
      }

      button {
        flex: 0 1 20%;
      }
    }

    .label-input-pairing {
      flex-flow: column;

      * {
        font-size: 22px;
      }

      label {
        font-weight: bold;
      }

      input {
        margin-top: 10px;
        width: 26%;
      }
    }
  }
}
</style>
