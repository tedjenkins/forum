<template>
  <div id="settings">
    Welcome to {{ this.$siteName }} (settings).
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})

export default class Settings extends Vue {}
</script>

<style lang="scss" scoped>

</style>
