<template>
  <main>
    <aside id="side-interface">
      <div id="side-interface-components" @click="handleExpandCollapse">
        <SiteDashboard/>
        <SiteBoardList :boards="boardList"/>
      </div>
    </aside>
    <SiteNavigation/>
    <section id="display">
      <router-view/>
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
    grid-area: aside;

    /deep/ h4 {
      cursor: pointer;
    }

    #side-interface-bar {
      align-items: center;
      background-color: green;
      border: 1px solid black;
      border-left: 0px;
      border-right: 0px;
      color: white;
      cursor: pointer;
      display: flex;
      font-size: 12px;
      height: 20px;
      justify-content: center;
      text-transform: uppercase;
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

      #side-interface-components {
        height: 100%;
        width: 100%;

        & > * {
          height: 50%;
        }
      }

      #side-interface-bar {
        display: none;
      }
    }
  }
}
</style>
