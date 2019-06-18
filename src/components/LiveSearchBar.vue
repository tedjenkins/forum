<template>
  <div class="live-search-bar">
    <input type="text" :id="inputId" :placeholder="placeholder" @input="handleInput">
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LiveSearchBar extends Vue {
  @Prop() inputId!: string;
  @Prop() placeholder!: string;

  /**
   * Send value of input field up the components hierarchy.
   */
  @Emit()
  handleInput(e: KeyboardEvent) {
    const targ = e.target as HTMLInputElement;
    return targ.value;
  }
}
</script>

<style lang="scss" scoped>
.live-search-bar {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;

  input {
    background-color: inherit;
    border: 0px;
    color: inherit;
    padding: 6px;
    width: 100%;
  }
}
</style>
