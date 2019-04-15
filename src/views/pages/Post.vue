<template>
  <div id="post">
    <h2>Demo posting form</h2>
    <span>
      Logged in as
      <b>{{ credentials.username }}</b>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Post extends Vue {
  credentials = {
    username: 'testuser123'
  };
}
</script>

<style lang="scss" scoped>
</style>
