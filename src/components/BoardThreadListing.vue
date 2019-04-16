<template>
  <div class="thread-listing-box">
    <div class="thread-title">{{ threadTitle }}</div>
    <div class="thread-posted-by">
      Posted by
      <a :href="getAuthorUrl()">user</a>
    </div>
    <div class="thread-date-created">{{ threadDateCreated }}</div>
    <div class="thread-num-posts">{{ threadNumberOfPosts }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class BoardThreadListing extends Vue {
  @Prop() private threadTitle!: string;
  @Prop() private threadAuthorId!: number;
  @Prop() private threadDateCreated!: string;
  @Prop() private threadNumberOfPosts!: number;

  /**
   * Get URL of thread author's profile page.
   * @returns {string} URL to thread author's profile page.
   */
  getAuthorUrl() {
    return `${Vue.prototype.$siteHost}/profile/${this.threadAuthorId}`;
  }
}
</script>

<style lang="sass" scoped>

</style>
