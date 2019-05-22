<template>
  <main>
    <aside id="side-interface">
      <div id="side-interface-components" @click="handleExpandCollapse">
        <SiteDashboard />
        <SiteBoardList :boards="boardList" />
      </div>
    </aside>
    <SiteNavigation />
    <section id="display">
      <router-view />
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { formEls } from '@/types';
import { props, utils } from '@/utils';

import SiteDashboard from '@/views/layout/main/SiteDashboard.vue';
import SiteBoardList from '@/views/layout/main/SiteBoardList.vue';
import SiteNavigation from '@/views/layout/main/SiteNavigation.vue';

@Component({
  components: {
    SiteDashboard,
    SiteBoardList,
    SiteNavigation
  }
})
export default class SiteMain extends Vue {
  boardList = [
    {
      title: 'Board 1',
      path: '/board1'
    },
    {
      title: 'Board 2',
      path: '/board2'
    },
    {
      title: 'Board 3',
      path: '/board3'
    }
  ];

  /**
   * Handle expand / collapse of section.
   * @param {MouseEvent} e -- mouse click event.
   */
  handleExpandCollapse(e: MouseEvent) {
    const targ = e.target as HTMLElement;

    utils.expandCollapseSection(targ, targ.nextElementSibling as HTMLElement);
  }

  mounted() {
    Array.from(document.querySelectorAll('.side-interface-box')).forEach(el => {
      if (utils.isSectionHidden(el as HTMLElement)) {
        el.classList.add('side-interface-hidden');
      }
    });
  }
}
</script>

<style lang="scss" scoped>
main {
  background-color: $light-site-main-bgcolor;
  color: $light-site-main-fontcolor;
  display: grid;
  font-family: Arial, Helvetica, sans-serif;
  grid-row: 2;
  grid-template-areas:
    'topbar'
    'aside'
    'view';
  grid-template-rows: auto auto 1fr;
  height: 100%;

  #side-interface {
    background-color: lightgreen;
    grid-area: aside;

    /deep/ h4 {
      background-color: #64b164;
      border-bottom: 1px solid #fff;
      cursor: pointer;
      user-select: none;
    }
  }

  #display {
    grid-area: view;
  }
}

@media all and (min-width: 1200px) {
  main {
    grid-template-areas:
      'aside topbar'
      'aside view';
    grid-template-columns: 0.2fr auto;
    grid-template-rows: auto 1fr;

    #side-interface {
      align-items: flex-start;
      display: flex;
      justify-content: space-between;

      /deep/ h4 {
        background-color: inherit;
        border-bottom: 0px;
        cursor: text;
        user-select: initial;
      }

      #side-interface-components {
        height: 100%;
        width: 100%;

        & > * {
          height: 50%;
        }
      }
    }
  }
}
</style>
