<template>
  <div class="form-text-input">
    <div class="form-sect-label-input">
      <label :for="id">{{ label }}:</label>
      <input
        :type="type ? type : 'text'"
        :id="id"
        :minlength="min"
        :maxlength="max"
        @blur="handleInput"
        @input="handleInput"
        :required="isRequired"
      >
    </div>
    <div class="input-feedback-box" v-show="badInput">Please enter your information into the field.</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { props } from '@/utils';
import { isEmail } from 'validator';

@Component
export default class FormTextInput extends Vue {
  @Prop() type?: string;
  @Prop() id!: string;
  @Prop() label!: string;
  @Prop() isRequired!: boolean;

  min = props.inputLengths.min;
  max = props.inputLengths.max;
  badInput = false;

  /**
   * Tell user through visual feedback if their input is invalid.
   * @param {Event} e -- onblur, oninput events.
   */
  handleInput(e: Event) {
    const targ = e.target as HTMLInputElement;
    const box = this.$el.querySelector('.input-feedback-box')!;

    if (targ.value.length < this.min) {
      this.badInput = true;
      box.classList.add('bad-feedback');
      box.textContent = `Please input a minimum of 4 characters (current count: ${
        targ.value.length
      }).`;
      return;
    }

    if (targ.id.includes('email')) {
      if (!isEmail(targ.value)) {
        this.badInput = true;
        box.classList.add('bad-feedback');
        box.textContent = 'Please supply a valid email address.';
        return;
      }
    }

    this.badInput = false;
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
    padding: 5px;
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
