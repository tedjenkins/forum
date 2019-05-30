<template>
  <div id="home">
    <div id="latest-posts-display">
      <h3>Latest posts</h3>
      <BoardThreadListing :length="5"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BoardThreadListing from '@/components/BoardThreadListing';

@Component({
  components: {
    BoardThreadListing
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
#latest-posts-display {
  max-width: 600px;
}

@media all and (min-width: 600px) {
  #latest-posts-display {
    margin: 0px auto;
  }
}
</style>
