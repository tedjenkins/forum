<template>
  <section id="board-list">
    <h4 class="site-main-header">Board list</h4>
    <div id="board-list-boards">
      <template v-for="(board, index) of boards">
        <router-link :to="board.path" :key="index">{{ board.title }}</router-link>
      </template>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class HomeBoardList extends Vue {
  @Prop() boards!: object[];
}
</script>

<style lang="scss" scoped>
#board-list {
  background-color: $light-site-secondary-bgcolor;

  a {
    color: inherit;
    display: block;
    height: 100%;
    padding: 4px;
    text-decoration: none;

    &:nth-child(2n) {
      background-color: lightgreen;
    }
  }
}
</style>