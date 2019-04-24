<template>
  <header>
    <a id="site-title" href="/">{{ this.$siteName }}</a>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class SiteHeader extends Vue {}
</script>

<style lang="scss" scoped>
header {
  @include hdrftr;
  flex-direction: column;
  grid-row: 1;

  a {
    color: inherit;
    padding: 4px 20px;
    text-decoration: none;
  }

  #site-title {
    display: block;
    font-size: 20px;
    font-weight: bold;
    margin: 0px auto;
    text-align: center;
    width: 100%;
  }
}

@media all and (min-width: 600px) {
  header {
    #site-title {
      font-size: 21px;
    }
  }
}

@media all and (min-width: 800px) {
  header {
    #site-title {
      font-size: 22px;
    }
  }
}

@media all and (min-width: 1200px) {
  header {
    padding: 5px;
    text-align: center;

    #site-title {
      display: inline-block;
      height: 100%;
      margin: 0px auto;
      width: auto;
    }
  }
}
</style>
