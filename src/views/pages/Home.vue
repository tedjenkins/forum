<template>
  <div id="home">
    <div id="latest-posts-display">
      <h3>Latest posts</h3>
      <div id="latest-posts-display-box">
        <BoardThreadListing
          v-for="thread of threads"
          :key="thread.id"
          :threadId="thread.id"
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
import { props } from '@/utils';
import { isBefore } from 'date-fns';
import Threads from '@/db/entities/Threads';

@Component({
  components: {
    BoardThreadListing
  }
})
export default class Home extends Vue {
  threads: Threads[] | null = null;

  created() {
    fetch(`${props.siteHost}/get-threads`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then((json: Threads[]) => {
        this.threads = json.sort((thread1, thread2) => {
          return isBefore(thread1.dateCreated, thread2.dateCreated) ? 1 : 0;
        });
      })
      .catch(err => console.log(err));
  }
}
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
