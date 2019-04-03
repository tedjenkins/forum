<template>
  <form class="site-form" :id="formId" @submit="handleForm">
    <div class="form-section" v-for="element of elements" :key="elements.indexOf(element)" v-html="element.html"></div>
  </form>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component({})

export default class LoginRegisterForm extends Vue {
  @Prop() formId!: string;
  @Prop() elements!: Array<{ id: string|undefined, html: string }>;

  /**
   * Handle login / register form.
   * @param {Event} e -- submit event.
   */
  handleForm(e: Event) {
    e.preventDefault();

    const targ = e.target as HTMLFormElement;
    const vals: string[] = [];
    targ.querySelectorAll('input').forEach(el => {
      if (el.type === 'password') {
        const encrypted = btoa(el.value);
        vals.push(encrypted);
        return true;
      }
      if (el.value.length < 6) {
        //
      }
      vals.push(el.value);
    });

    fetch(`${Vue.prototype.$siteHost}/register`, {
      method: 'POST',
      body: JSON.stringify(vals),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));
  }
}
</script>

<style lang="scss">
.site-form {
  background-color: #fafafa;
  border: 1px solid #ccc;
  padding: 10px;

  .form-section {
    padding: 4px;

    & > * {
      display: block;
      font-size: 18px;
    }

    label {
      font-weight: bold;
      padding: 10px;
      text-align: center;
    }

    input {
      margin: 0px auto;
    }

    button {
      margin: 10px auto;
    }

    a {
      display: inline;
      
      &:active {
        outline-color: transparent;
      }
    }

    div {
      text-align: center;
    }
  }

  #register-info {
    text-align: center;
  }
}
</style>
