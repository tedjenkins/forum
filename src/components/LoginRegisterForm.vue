<template>
  <form class="site-form-login-register" :id="formId" @submit.prevent="handleForm">
    <h1>{{ formHeader }}</h1>
    <div class="form-section" v-for="(element, key) in inputElements" v-bind:key="key">
      <label :for="element.id">{{ element.label }}</label> <input :type="element.type" :minlength="element.minLength" :maxlength="element.maxLength" :id="element.id"/> <div class="form-input-wordcount"></div>
    </div>
    <div class="form-section" v-for="(element, key) in customElements" v-bind:key="key">{{ element.html }}</div>
  </form> 
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})

export default class LoginRegisterForm extends Vue {}
</script>

<style lang="scss" scoped>

</style>
