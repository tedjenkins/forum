<template>
  <footer>
    <u @click="toggleLoggedIn">Toggle logged in</u>
    <div id="site-credits" aria-label="site credits">
      {{ this.$store.state.siteName }} ©
      <a href="https://usefulsoftware.xyz">UsefulSoftware.xyz</a> 2019
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class SiteFooter extends Vue {
  toggleLoggedIn() {
    this.$store.commit('toggleLoggedIn');
  }
}
</script>

<style lang="scss" scoped>
footer {
  @include hdrftr;
  grid-row: 3;
  padding: 10px;

  u {
    cursor: pointer;
    user-select: none;
  }

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
    align-items: center;
    display: flex;
    justify-content: space-between;

    #site-credits {
      font-size: 16px;
      text-align: right;
    }
  }
}
</style>
