<template>
  <div id="admin">
    Welcome to {{ this.$siteName }}.
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})

export default class Admin extends Vue {}
</script>

<style lang="scss" scoped>

</style>
