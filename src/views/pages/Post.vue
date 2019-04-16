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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Post extends Vue {
  credentials = {
    userId: Math.floor(Math.random() * 10) + 1,
    boardId: Math.floor(Math.random() * 10) + 1,
    threadTitle: 'Title',
    threadContent: 'Hello world'
  };

  /**
   * Temporary method to fill form with dummy content.
   */
  fillWithDummyContent() {
    // User id
    this.credentials.userId = Math.floor(Math.random() * 10) + 1;

    // Board id
    this.credentials.boardId = Math.floor(Math.random() * 10) + 1;

    // Post title
    const sentenceStarters = [
      'You are a ',
      'I am a ',
      'He is a ',
      'She is a ',
      'It is a '
    ];
    const animals = ['cat', 'dog', 'fish', 'pigeon', 'snake'];
    this.credentials.threadTitle = `${
      sentenceStarters[Math.floor(Math.random() * sentenceStarters.length)]
    }${animals[Math.floor(Math.random() * animals.length)]}`;

    // Post content
    this.credentials.threadContent = `Lorem ipsum etc etc`;
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
    });
  }
}
</script>

<style lang="scss" scoped>
</style>
