<template>
  <main>
    <unicon name="cloud-slash" fill="#ccc"/>
    <h1 id="error-desc">A problem has been encountered during connection to the database.</h1>
    <div id="error-follow-up">Apologies for the inconvenience. Please check back again soon.</div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SiteMainDbError extends Vue {}
</script>

<style lang="scss" scoped>
main {
  text-align: center;

  & > * {
    margin: 10px;
  }

  svg {
    height: 50px;
    margin-bottom: 0px;
    width: 50px;
  }

  h1 {
    font-size: 15px;
    margin-top: 0px;
  }
}

@media all and (min-width: 800px) {
  main {
    svg {
      height: 80px;
      width: 80px;
    }

    h1 {
      font-size: 18px;
    }

    div {
      font-size: 17px;
    }
  }
}
</style>
