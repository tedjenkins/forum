<template>
  <div id="home">
    <div id="latest-posts-display">
      <h3>Latest posts</h3>
      <div id="latest-posts-error" v-if="errMessage">{{ errMessage }}</div>
      <div id="latest-posts-display-box" v-else>
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
  errMessage: Error | null = null;
  threads: Threads[] | null = null;

  created() {
    fetch(`${props.siteHost}/get-threads/5`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then((json: Threads[]) => {
        if (json.length === 0) {
          throw new Error('No threads were found.');
        }

        this.threads = json.sort((thread1, thread2) => {
          return isBefore(thread1.dateCreated, thread2.dateCreated) ? 1 : 0;
        });
      })
      .catch(err => {
        if (err.name === 'TypeError') {
          this.errMessage = new Error(
            'A problem was encountered, please be patient.'
          );
          return;
        }
        this.errMessage = err;
      });
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
