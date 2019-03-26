<template>
  <footer>
    <div id="site-credits" aria-label="site credits">{{ this.$siteName }} © <a href="https://usefulsoftware.xyz">UsefulSoftware.xyz</a> 2019</div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class SiteFooter extends Vue {}
</script>

<style lang="scss" scoped>
footer {
  @include hdrftr;
  border-top: $site-border;
  grid-row: 3;
  padding: 10px;

  #site-credits {
    font-size: 13px;
    text-align: center;
  }
}

@media all and (min-width: 400px) {
  footer {
    #site-credits {
      font-size: 14px;
    }
  }
}

@media all and (min-width: 600px) {
  footer {
    #site-credits {
      font-size: 15px;
    }
  }
}

@media all and (min-width: 800px) {
  footer {
    #site-credits {
      font-size: 16px;
      text-align: right;
    }
  }
}
</style>
