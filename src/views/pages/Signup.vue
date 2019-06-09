<template>
  <div id="signup">
    <form @submit="handleForm">
      <h2>Register with us</h2>
      <div id="form-desc">It should only take a few seconds.</div>
      <div class="form-section">
        <label for="form-username">Username:</label>
        <input type="text" id="form-username" :minlength="min" :maxlength="max" required>
      </div>
      <div class="form-section">
        <label for="form-password">Password:</label>
        <input type="password" id="form-password" :minlength="min" :maxlength="max" required>
      </div>
      <div class="form-section">
        <label for="form-email">Email:</label>
        <input type="text" id="form-email" :minlength="min" :maxlength="max" required>
      </div>
      <div id="form-reception">Please enter your information in the form.</div>
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

@Component({})
export default class Signup extends Vue {
  min = props.inputLengths.min;
  max = props.inputLengths.max;
  /**
   * Handle user registration form.
   * @param {Event} e -- submit event.
   */
  handleForm(e: Event) {
    e.preventDefault();

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
    }
  }
}
</script>

<style lang="scss" scoped>
#signup {
  form {
    margin: 0px auto;
    width: 70%;

    div {
      margin: 20px 10px;
    }

    #form-desc {
      text-align: center;
    }

    .form-section {
      align-items: center;
      display: flex;
      justify-content: center;

      label {
        flex: 0 1 10%;
        font-weight: bold;
      }

      input {
        flex: 0 1 90%;
        font-size: 18px;
        margin-left: 10px;
        padding: 10px;
      }
    }

    .reception-good {
      background-color: lightgreen !important;
      border: 1px solid darkgreen !important;
    }

    .reception-bad {
      background-color: lightpink !important;
      border: 1px solid firebrick !important;
    }

    #form-reception {
      background-color: #ffff80;
      border: 1px solid #c7c700;
      border-radius: 10px;
      padding: 10px;
      text-align: center;
    }
  }
}
</style>
