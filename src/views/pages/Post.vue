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
        :threadNumberOfReplies="thread.numReplies"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { props } from '@/utils';
import BoardThreadListing from '@/components/BoardThreadListing.vue';
import { format } from 'date-fns';

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

  // temp auto-incrementing id variable
  autoId = 0;

  threads = [
    {
      id: this.autoId,
      title: 'Hello world!',
      authorId: 0,
      dateCreated: format(new Date(), 'hh:mma, ddd Do MMM YYYY'),
      numReplies: 0
    }
  ];

  created() {
    fetch(`${props.siteHost}/get-threads`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => (this.threads = json));
  }

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

    fetch(`${props.siteHost}/makepost`, {
      method: 'POST',
      body: JSON.stringify(this.credentials),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      this.autoId++;

      // Update display
      this.threads.unshift({
        id: this.autoId,
        title: (targ.querySelector('input') as HTMLInputElement).value,
        authorId: this.credentials.userId,
        dateCreated: new Date().toLocaleTimeString(),
        numReplies: 0
      });

      // Clear fields
      targ
        .querySelectorAll('input, textarea')
        .forEach(el => ((el as HTMLInputElement).value = ''));
    });

    this.regenerateIdsMixin();
  }
}
</script>

<style lang="scss" scoped>
</style>
