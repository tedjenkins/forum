<template>
  <div id="user">User page for user with id {{ this.$route.params.userId }}</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class User extends Vue {}
</script>

<style lang="scss" scoped>
</style>
