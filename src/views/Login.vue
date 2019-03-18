<template>
  <div id="login">
    <form class="site-form" id="login-form">
      <h1>Log in to {{ this.$siteName }}</h1>
      <div class="form-section">
        <label for="form-username-email">Username or email address: </label> <input type="text" id="form-username-email"/>
      </div>
      <div class="form-section">
        <label for="form-password">Password: </label> <input type="password" id="form-password"/>
      </div>
      <div class="form-section">
        <button type="submit">Submit</button>
        <div id="form-remember-me">
          <input type="checkbox" id="form-remember"/> <label for="form-remember"> Remember me</label>
        </div>
        <div id="form-forgot-password">
          (<a href="#">forgot password?</a>)
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})

export default class Login extends Vue {}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 24px;
  text-align: center;
}

.form-section:last-child {
  justify-content: space-evenly;
}
</style>
