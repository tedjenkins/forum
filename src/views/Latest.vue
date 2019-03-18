<template>
  <div id="latest">
    Welcome to {{ this.$siteName }}.
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})

export default class Latest extends Vue {}
</script>

<style lang="scss" scoped>

</style>
