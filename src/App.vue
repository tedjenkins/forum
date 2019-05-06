<template>
  <div id="app" aria-label="app" @click="handleFocusOnApp">
    <SiteHeader aria-label="header section"/>
    <SiteMain aria-label="main section"/>
    <SiteFooter aria-label="footer section"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SiteHeader from './views/layout/SiteHeader.vue';
import SiteMain from './views/layout/SiteMain.vue';
import SiteFooter from './views/layout/SiteFooter.vue';

@Component({
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  overflow: auto;
  width: 100vw;
}
</style>
