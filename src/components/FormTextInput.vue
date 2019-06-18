<template>
  <div class="form-text-input">
    <div class="form-sect-label-input">
      <label :for="id">{{ label }}:</label>
      <input
        :type="type ? type : 'text'"
        :id="id"
        :minlength="min"
        :maxlength="max"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
        :required="isRequired"
      >
    </div>
    <div
      class="input-feedback-box"
      style="display: none"
    >Please enter your information into the input field.</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { props } from '@/utils';

@Component
export default class FormTextInput extends Vue {
  @Prop() type?: string;
  @Prop() id!: string;
  @Prop() label!: string;
  @Prop() isRequired!: boolean;

  min = props.inputLengths.min;
  max = props.inputLengths.max;

  /**
   * Handle user focus on input box (show feedback box).
   * @param {Event} e -- focus event.
   */
  handleFocus(e: Event) {
    const targ = e.target as HTMLInputElement;
    this.$el.querySelector('.input-feedback-box')!.removeAttribute('style');
  }

  /**
   * Handle user blur on input box (hide feedback box).
   * @param {Event} e -- blur event.
   */
  handleBlur(e: Event) {
    const targ = e.target as HTMLInputElement;
    this.$el
      .querySelector('.input-feedback-box')!
      .setAttribute('style', 'display: none');
  }

  /**
   * Handle input into fields. Display error message, etc.
   * @param {KeyboardEvent} e -- input event.
   */
  handleInput(e: KeyboardEvent) {
    const targ = e.target as HTMLInputElement;
    const receptionBox = this.$el.querySelector('.input-feedback-box')!;

    if (targ.value.length < this.min) {
      receptionBox.classList.add('bad-feedback');
    } else if (targ.value.length > this.max) {
      receptionBox.classList.add('bad-feedback');
    } else {
      receptionBox.classList.remove('bad-feedback');
    }
  }
}
</script>

<style lang="scss" scoped>
.form-text-input {
  .form-sect-label-input {
    align-items: center;
    display: flex;
    justify-content: space-between;

    & > * {
      padding: 5px;
    }

    label {
      border: 1px solid transparent;
      flex: 0 1 30%;
      font-weight: bold;
      text-align: center;
    }

    input {
      background-color: #ccc;
      border: 1px solid #aaa;
      flex: 0 1 70%;
    }
  }

  .input-feedback-box {
    margin: 10px 0px;
    text-align: center;
  }

  .good-feedback {
    background-color: lightgreen;
  }

  .bad-feedback {
    background-color: lightpink;
  }
}
</style>
