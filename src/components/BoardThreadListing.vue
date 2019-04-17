<template>
  <div class="thread-listing-box">
    <div class="thread-title">{{ threadTitle }}</div>
    <div class="thread-posted-by">
      Posted by
      <a :href="getAuthorUrl()">user</a>
    </div>
    <div class="thread-date-created">Posted at {{ threadDateCreated }}</div>
    <div class="thread-num-replies">{{ threadNumberOfReplies }} replies</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class BoardThreadListing extends Vue {
  @Prop() private threadTitle!: string;
  @Prop() private threadAuthorId!: number;
  @Prop() private threadDateCreated!: string;
  @Prop() private threadNumberOfReplies!: number;

  /**
   * Get URL of thread author's profile page.
   * @returns {string} URL to thread author's profile page.
   */
  getAuthorUrl() {
    return `${Vue.prototype.$siteHost}/profile/${this.threadAuthorId}`;
  }
}
</script>

<style lang="scss" scoped>
.thread-listing-box {
  align-items: center;
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  padding: 4px;

  .thread-title {
    font-weight: bold;
  }
}
</style>
