<template>
  <form class="site-form" :id="formId" @submit="handleForm">
    <div
      class="form-section"
      v-for="element of elements"
      :key="elements.indexOf(element)"
      :id="element.id"
      v-html="element.html"
    ></div>
  </form>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import { formEls } from '@/types';
import utils from '@/utils';

@Component({})
export default class LoginRegisterForm extends Vue {
  @Prop() formId!: string;
  @Prop() elements!: formEls;

  mounted() {
    // Add modal data attribute to element and all children for easy selection and manipulation of all elements within form.
    if (this.$el.parentElement) {
      utils.recursiveSetModalAttr(this.$el.parentElement as HTMLElement);
    }
  }

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
        vals.push(btoa(el.value));
        return true;
      }

      if (el.value.length < +el.minLength) {
        throw Error('Invalid length');
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
  padding: 10px;

  .form-section {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 4px;

    & > * {
      flex: 0 1 50%;
      font-size: 13px;
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
      margin: 6px auto;
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

  #login-extra {
    flex-direction: column;
  }

  #register-info {
    text-align: center;
  }
}

@media all and (min-width: 600px) {
  .site-form {
    .form-section {
      & > * {
        font-size: 15px;
      }
    }
  }
}

@media all and (min-width: 1200px) {
  .site-form {
    .form-section {
      & > * {
        font-size: 18px;
      }
    }
  }
}
</style>
