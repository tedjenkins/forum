<template>
  <section id="board-list">
    <h4 class="site-main-header">Board list</h4>
    <div class="side-interface-box" id="board-list-boards">
      <template v-for="(board, index) of boards">
        <router-link :to="`/board${board.path}`" :key="index">{{ board.title }}</router-link>
      </template>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { utils } from '@/utils';

@Component({})
export default class SiteBoardList extends Vue {
  @Prop() boards!: object[];
}
</script>

<style lang="scss" scoped>
#board-list {
  a {
    border: 1px solid transparent;
    border-left: 0px;
    border-right: 0px;
    color: inherit;
    display: block;
    height: 100%;
    padding: 4px;
    text-decoration: none;
  }

  a:hover {
    background-color: rgba(0, 0, 0, 0.2);
    border-color: #fff;
  }

  a:active {
    background-color: rgba(0, 0, 0, 0.3);
  }
}

@media all and (min-width: 1200px) {
  #board-list {
    a {
      font-size: 17px;
      padding: 10px;
      text-align: center;
    }
  }
}
</style>