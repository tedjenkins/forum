<template>
  <section id="board-list">
    <h3 class="site-main-header">Boards</h3>
    <div class="side-interface-box" id="board-list-boards">
      <template v-for="(board, index) of boards">
        <router-link :to="`/board/${board.id}`" :key="index">{{ board.name }}</router-link>
      </template>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { props } from '@/utils';
import Boards from '@/db/entities/Boards';

@Component
export default class SiteBoardList extends Vue {
  boards: Boards[] | null = null;

  created() {
    fetch(`${props.siteHost}/get-boards`)
      .then(res => res.json())
      .then(json => (this.boards = json))
      .catch(() => this.$store.commit('flagLostDb'));
  }
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
    font-size: 15px;
    height: 100%;
    padding: 8px;
    text-align: center;
    text-decoration: none;

    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
      border-color: #fff;
    }

    &:first-of-type:hover {
      border-top-color: transparent;
    }

    &:active {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
}

@media all and (min-width: 1200px) {
  #board-list {
    a {
      font-size: 17px;
      padding: 10px;

      &:first-of-type:hover {
        border-top-color: #fff;
      }
    }
  }
}
</style>