<template>
  <div id="post">
    Welcome to {{ this.$siteName }} (post).
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class Post extends Vue {}
</script>

<style lang="scss" scoped>

</style>
