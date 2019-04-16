<template>
  <div id="post">
    <form id="post-form" @submit="handleForm">
      <h2>Demo posting form</h2>
      <span>
        Logged in as user with ID
        <b>{{ credentials.userId }}</b>,
        posting in board with ID
        <b>{{ credentials.boardId }}.</b>
      </span>
      <div class="form-section">
        <label for="post-form-title">Title:</label>
        <input type="text" id="post-form-title" v-model="credentials.threadTitle">
      </div>
      <div class="form-section">
        <label for="post-form-content">Post:</label>
        <textarea id="post-form-content" v-model="credentials.threadContent"></textarea>
      </div>
      <button type="button" @click="fillWithDummyContent">Fill with dummy content</button>
      <button type="submit">Submit</button>
    </form>
    <section id="post-display">
      <BoardThreadListing
        v-for="thread of threads"
        :key="thread.id"
        :threadTitle="thread.title"
        :threadAuthorId="thread.authorId"
        :threadDateCreated="thread.dateCreated"
        :threadNumberOfPosts="thread.num_posts"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BoardThreadListing from '@/components/BoardThreadListing.vue';

@Component({
  components: {
    BoardThreadListing
  }
})
export default class Post extends Vue {
  credentials = {
    userId: Math.floor(Math.random() * 10) + 1,
    boardId: Math.floor(Math.random() * 10) + 1,
    threadTitle: '',
    threadContent: ''
  };

  threads = [
    {
      id: 0,
      title: 'Hello world',
      authorId: 0,
      dateCreated: 'Yesterday',
      num_posts: 0
    }
  ];

  /**
   * Temporary mixin to regenerate userId and boardId.
   */
  regenerateIdsMixin() {
    this.credentials.userId = Math.floor(Math.random() * 10) + 1;
    this.credentials.boardId = Math.floor(Math.random() * 10) + 1;
  }

  /**
   * Temporary method to fill form with dummy content.
   */
  fillWithDummyContent() {
    this.regenerateIdsMixin();

    // Post title and content
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcefghijklmnoqrstuvwxyzáéóíú0123456789-`¬<>{}][;@#\\/?!"£$%^&*()';
    const MIN_LENGTH = 6;

    let threadTitle = '';
    for (
      let i = 0;
      i < Math.floor(Math.random() * chars.length) + MIN_LENGTH;
      i++
    ) {
      threadTitle += chars[Math.floor(Math.random() * chars.length)];
    }
    this.credentials.threadTitle = threadTitle;

    let threadContent = '';
    for (
      let i = 0;
      i < Math.floor(Math.random() * chars.length) + MIN_LENGTH;
      i++
    ) {
      threadContent += chars[Math.floor(Math.random() * chars.length)];
    }
    this.credentials.threadContent = threadContent;
  }

  /**
   * Handle post form.
   * @param {Event} e -- submit event.
   */
  handleForm(e: Event) {
    e.preventDefault();

    const targ = e.target as HTMLFormElement;

    fetch(`${Vue.prototype.$siteHost}/makepost`, {
      method: 'POST',
      body: JSON.stringify(this.credentials),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() =>
        targ
          .querySelectorAll('input, textarea')
          .forEach(el => ((el as HTMLInputElement).value = ''))
      )
      .catch(err => console.log(err));

    this.regenerateIdsMixin();
  }
}
</script>

<style lang="scss" scoped>
</style>
