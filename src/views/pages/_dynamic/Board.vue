<template>
  <div id="board">Board page for {{ this.$route.params.boardName }}</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Board extends Vue {}
</script>

<style lang="scss" scoped>
</style>
