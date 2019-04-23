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
export default class App extends Vue {
  /**
   * Focus on app when user clicks away from a popup box / modal.
   * @param {MouseEvent} e -- click event.
   */
  handleFocusOnApp(e: MouseEvent): void {
    const targ = e.target as HTMLElement;

    if (!targ.dataset.isModal && this.$store.state.modalIsDisplaying) {
      Array.from(document.querySelectorAll('[data-is-modal="true"]')).forEach(
        el => {
          if (el.nodeName === 'A') {
            return;
          }
          (el as HTMLElement).style.opacity = '0';
        }
      );
      this.$store.commit('toggleModal');
    }
  }
}
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
