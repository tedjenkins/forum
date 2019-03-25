<template>
  <div id="search">
    Welcome to {{ this.$siteName }} (search).
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})

export default class Search extends Vue {}
</script>

<style lang="scss" scoped>

</style>
