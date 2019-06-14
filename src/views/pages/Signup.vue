<template>
  <div id="signup">
    <form @submit="handleForm">
      <h2>Register with us</h2>
      <div id="form-desc">It should only take a few seconds.</div>
      <FormTextInput id="form-username" label="Username" isRequired/>
      <FormTextInput type="password" id="form-password" label="Password" isRequired/>
      <FormTextInput id="form-email" label="Email" isRequired/>
      <div class="form-section">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { isEmail } from 'validator';
import { props } from '@/utils';

import FormTextInput from '@/components/FormTextInput.vue';

@Component({
  components: {
    FormTextInput
  }
})
export default class Signup extends Vue {
  min = props.inputLengths.min;
  max = props.inputLengths.max;

  /**
   * Handle user registration form.
   * @param {Event} e -- submit event.
   */
  // Disabled for now.
  handleForm(e: Event) {
    e.preventDefault();

    return;
    /*
    const targ = e.target as HTMLFormElement;
    const data: { [key: string]: string } = {};
    const receptionBox = document.getElementById('form-reception')!;

    targ.querySelectorAll('.form-section input').forEach(input => {
      const inp = input as HTMLInputElement;

      try {
        if (inp.id.includes('email')) {
          if (!isEmail(inp.value)) {
            throw new Error('Please enter a valid email address.');
          }
        }

        data[inp.id] = inp.value;
      } catch (err) {
        receptionBox.classList.add('reception-bad');
        receptionBox.textContent = err.message;
      }
    });

    if (Object.keys(data).length === 3) {
      receptionBox.classList.remove('reception-bad');
      receptionBox.classList.add('reception-good');
      receptionBox.textContent =
        'Success! You will be redirected back to the homepage shortly...';

      fetch(`${props.siteHost}/register-user`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }*/
  }

  /**
   * Handle input into fields. Display error message, etc.
   * @param {KeyboardEvent} e -- input event.
   */
  handleInput(e: KeyboardEvent) {
    const targ = e.target as HTMLInputElement;
    const receptionBox = document.getElementById('form-reception')!;

    try {
      if (
        targ.value.length < props.inputLengths.min ||
        targ.value.length > props.inputLengths.max
      ) {
        throw new Error(
          `Number of characters does not fit between ${
            props.inputLengths.min
          } - ${
            props.inputLengths.max
          } character boundary (current number of characters: ${
            targ.value.length
          })`
        );
      }
      if (targ.id.includes('email')) {
        if (!isEmail(targ.value)) {
          throw new Error('Please enter a valid email address');
        } else {
          receptionBox.classList.remove('reception-bad');
          receptionBox.textContent = 'All is well.';
        }
      }
    } catch (err) {
      receptionBox.classList.add('reception-bad');
      receptionBox.textContent = err.message;
    }
  }
}
</script>

<style lang="scss" scoped>
.form-reception-box {
  display: block;
  padding: 10px;
  text-align: center;
  transition: opacity 5s ease-in;
}

.form-reception-box-hidden {
  display: none;
  opacity: 0;
}

.reception-good {
  background-color: lightgreen;
  border: 1px solid darkgreen;
}

.reception-bad {
  background-color: lightpink;
  border: 1px solid firebrick;
}

#signup {
  form {
    div {
      margin: 20px 10px;
    }

    #form-desc {
      text-align: center;
    }
  }
}
@media all and (min-width: 600px) {
  #signup {
    form {
      margin: 0px auto;
      width: 40%;

      .form-section {
        align-items: center;
        display: flex;
        justify-content: center;

        label {
          flex: 0 1 30%;
          font-weight: bold;
        }

        input {
          flex: 0 1 70%;
          font-size: 18px;
          margin-left: 10px;
          padding: 10px;
        }
      }
    }
  }
}
</style>
