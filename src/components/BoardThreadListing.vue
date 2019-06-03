<template>
  <div class="thread-listing-box">
    <div class="thread-box" v-for="thread of threads" :key="thread.id">
      <div class="thread-title">
        <a :href="`${siteHost}/thread/${thread.id}`">
          {{ thread.title.length > 24
          ? `${thread.title.substring(0, 24)}...`
          : thread.title }}
        </a>
      </div>
      <div class="thread-datetime">{{ formattedDate(thread.dateCreated) }}</div>
      <div class="thread-posted-by">
        Posted by
        <a :href="`${siteHost}/profile/${thread.authorId}`">user</a>
      </div>
      <div class="thread-num-replies">{{ thread.numReplies }} replies</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { props, utils } from '@/utils';
import { format, isBefore } from 'date-fns';
import Threads from '@/db/entities/Threads';

@Component({})
export default class BoardThreadListing extends Vue {
  @Prop() length!: number;

  threads: Threads[] | null = null;
  siteHost = props.siteHost;

  formattedDate(date: string) {
    return format(date, "HH:mm DD MMM 'YY");
  }

  created() {
    fetch(`${props.siteHost}/get-threads/${this.length}`)
      .then(res => res.json())
      .then((json: Threads[]) => {
        this.threads = json.sort((thread1, thread2) => {
          return isBefore(thread1.dateCreated, thread2.dateCreated) ? 1 : 0;
        });
      })
      .catch(() => this.$store.commit('flagLostDb'));
  }
}
</script>

<style lang="scss" scoped>
.thread-box {
  align-items: center;
  display: grid;
  font-size: 13px;
  grid-template-areas:
    'title datetime'
    'author replies';
  justify-content: space-between;
  padding: 4px;

  &:hover {
    background-color: #ddd;
  }

  .thread-title {
    font-weight: bold;
    grid-area: title;
  }

  .thread-datetime {
    grid-area: datetime;
  }

  .thread-posted-by {
    grid-area: author;
  }

  .thread-num-replies {
    grid-area: replies;
    text-align: right;
  }
}
</style>
