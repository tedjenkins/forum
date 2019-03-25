<template>
  <div id="home">
    Welcome to {{ this.$siteName }} (home).
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})

export default class Home extends Vue {}
</script>

<style lang="scss" scoped>

</style>
