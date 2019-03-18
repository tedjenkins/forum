<template>
  <div id="register">
    Welcome to {{ this.$siteName }}.
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})

export default class Register extends Vue {}
</script>

<style lang="scss" scoped>

</style>
