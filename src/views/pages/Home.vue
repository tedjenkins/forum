<template>
  <div id="home">
    <div id="latest-posts-display">
      <h3>Latest posts</h3>
      <div id="latest-posts-display-box">
        <BoardThreadListing
          v-for="thread of threads"
          :key="thread.id"
          :threadTitle="thread.title"
          :threadAuthorId="thread.authorId"
          :threadDateCreated="thread.dateCreated"
          :threadNumberOfReplies="thread.numReplies"
        />
      </div>
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
export default class Home extends Vue {
  threads: object[] | null = null;

  created() {
    fetch(`${Vue.prototype.$siteHost}/get-threads`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => (this.threads = json))
      .catch(err => console.log(err));
  }
}
</script>

<style lang="scss" scoped>
</style>
