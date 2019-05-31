<template>
  <div id="app" aria-label="app">
    <SiteHeader aria-label="header section"/>
    <SiteMainDbError
      aria-label="no database connection main section"
      v-if="this.$store.state.dbConnectionLost"
    />
    <SiteMain aria-label="main section" v-else/>
    <SiteFooter aria-label="footer section"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { props } from '@/utils';

import SiteHeader from '@/views/layout/SiteHeader.vue';
import SiteMainDbError from '@/views/layout/SiteMainDbError.vue';
import SiteMain from '@/views/layout/SiteMain.vue';
import SiteFooter from '@/views/layout/SiteFooter.vue';

@Component({
  components: {
    SiteHeader,
    SiteMainDbError,
    SiteMain,
    SiteFooter
  }
})
export default class App extends Vue {
  created() {
    document.title = props.siteName;
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
