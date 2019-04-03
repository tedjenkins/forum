<template>
  <header>
    <a id="site-title" href="#" @click="handleEmit">{{ this.$siteName }}</a>
    <nav id="site-navigation" aria-label="site navigation">
      <router-link to="/">Home</router-link>
      <router-link to="/settings">Settings</router-link>
      <router-link to="/post">Post</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import SiteSearchBar from '@/components/SiteSearchBar.vue';

@Component({
  components: {
    SiteSearchBar
  },
  mounted() {
    // Add fixed width to nav menu elements depending on how many of them there are (100 / <number of elements>).
    const els = document.querySelectorAll('#site-navigation > *');
    els.forEach(el => el.setAttribute('style', `min-width: ${100 / els.length}%`));
  }
})

export default class SiteHeader extends Vue {
  /**
   * Emit to App.vue from click of site-title, to trigger event which reloads Main component by changing its key.
   * @param {MouseEvent} e -- mouse click event.
   */
  @Emit('emitReloadMain')
  handleEmit(e: MouseEvent) {
    e.preventDefault();
  }
}
</script>

<style lang="scss" scoped>
header {
  @include hdrftr;
  border-bottom: $site-border;
  flex-direction: column;
  grid-row: 1;

  a {
    border: 1px solid transparent;
    border-bottom: 0px;
    color: inherit;
    padding: 4px 12px;
    text-decoration: none;
    transition-duration: 120ms;
    transition-property: background-color;
  }

  #site-title {
    display: block;
    font-size: 20px;
    font-weight: bold;
    margin: 0px auto;
    text-align: center;
  }

  #site-navigation {
    align-items: center;
    display: flex;
    flex-flow: row wrap;
    font-size: 14px;
    justify-content: center;
    margin-top: 4px;
    width: 100%;

    & > * {
      text-align: center;

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }

    .router-link-exact-active {
      background-color: rgba(0, 0, 0, 0.1);
      border: 1px solid #333;
      border-bottom: 0px;

      &:first-of-type {
        border-left: 0px;
      }

      &:last-of-type {
        border-right: 0px;
      }
    }
  }
}

@media all and (min-width: 600px) {
  header {
    #site-title {
      font-size: 21px;
    }

    #site-navigation {
      font-size: 15px;
    }
  }
}

@media all and (min-width: 800px) {
  header {
    #site-title {
      font-size: 22px;
    }

    #site-navigation {
      font-size: 16px;
    }
  }
}

@media all and (min-width: 1200px) {
  header {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;

    #site-title {
      align-content: center;
      display: flex;
      height: 100%;
      justify-content: center;
      width: 30%;
    }

    #site-navigation {
      height: 100%;
      margin-top: 0px;
      width: 70%;

      & > * {
        align-items: center;
        display: flex;
        height: 100%;
        justify-content: center;
      }

      .router-link-exact-active {
        border-top: 0px;

        &:first-of-type {
          border-left: 1px solid #333;
        }
      }
    }
  }
}
</style>
