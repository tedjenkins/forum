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
        :required="isRequired"
      >
    </div>
    <div
      class="input-feedback-box input-feedback-box-hidden"
    >Please enter your information into the input field.</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { props } from '@/utils';

@Component({})
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
  }

  /**
   * Handle user blur on input box (hide feedback box).
   * @param {Event} e -- blur event.
   */
  handleBlur(e: Event) {
    const targ = e.target as HTMLInputElement;
  }
}
</script>

<style lang="scss" scoped>
</style>
