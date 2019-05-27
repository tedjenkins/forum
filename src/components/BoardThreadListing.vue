<template>
  <div class="thread-listing-box">
    <div class="thread-title">
      <a :href="`${this.siteHost}/thread/${this.threadId}`">{{ threadTitle }}</a>
    </div>
    <div class="thread-posted-by">
      Posted by
      <a :href="`${this.siteHost}/profile/${this.threadAuthorId}`">user</a>
    </div>
    <div class="thread-date-created">Posted at {{ threadDateCreated }}</div>
    <div class="thread-num-replies">{{ threadNumberOfReplies }} replies</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { props } from '@/utils';

@Component({})
export default class BoardThreadListing extends Vue {
  @Prop() threadId!: number;
  @Prop() threadTitle!: string;
  @Prop() threadAuthorId!: number;
  @Prop() threadDateCreated!: string;
  @Prop() threadNumberOfReplies!: number;

  siteHost = props.siteHost;
}
</script>

<style lang="scss" scoped>
.thread-listing-box {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 4px;

  .thread-title {
    font-weight: bold;
  }
}
</style>
