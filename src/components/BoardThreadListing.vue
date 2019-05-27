<template>
  <div class="thread-listing-box">
    <div class="thread-title">
      <a :href="`${this.siteHost}/thread/${this.threadId}`">{{ this.formattedTitle }}</a>
    </div>
    <div class="thread-datetime">{{ this.formattedDate }}</div>
    <div class="thread-posted-by">
      Posted by
      <a :href="`${this.siteHost}/profile/${this.threadAuthorId}`">user</a>
    </div>
    <div class="thread-num-replies">{{ threadNumberOfReplies }} replies</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { props } from '@/utils';
import { format } from 'date-fns';

@Component({})
export default class BoardThreadListing extends Vue {
  @Prop() threadId!: number;
  @Prop() threadTitle!: string;
  @Prop() threadAuthorId!: number;
  @Prop() threadDateCreated!: string;
  @Prop() threadNumberOfReplies!: number;

  siteHost = props.siteHost;
  formattedTitle =
    this.threadTitle.length > 24
      ? `${this.threadTitle.substring(0, 24)}...`
      : this.threadTitle;
  formattedDate = format(this.threadDateCreated, "HH:mm DD MMM 'YY");
}
</script>

<style lang="scss" scoped>
.thread-listing-box {
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
