<template>
  <div id="post">
    <form id="post-form" @submit="handleForm">
      <h2>Demo posting form</h2>
      <span>
        Logged in as
        <b>{{ credentials.username }}</b>,
        posting in
        <b>{{ credentials.board }}.</b>
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
    username: 'testuser123',
    board: 'General Discussion',
    threadTitle: 'Title',
    threadContent: 'Hello world'
  };

  /**
   * Temporary method to fill form with dummy content.
   */
  fillWithDummyContent() {
    // Username
    const firstNames = [
      'Steve',
      'Fred',
      'Carol',
      'Alice',
      'Bob',
      'Llewellyn',
      'Bryn',
      'Sophie',
      'Abigail'
    ];
    const lastNames = ['Smith', 'Jones', 'Jackson', 'Taylor'];
    this.credentials.username = `${firstNames[
      Math.floor(Math.random() * firstNames.length)
    ].toLowerCase()}${lastNames[
      Math.floor(Math.random() * lastNames.length)
    ].toLowerCase()}${Math.floor(Math.random() * 30) + 1}`;

    // Post title
    const sentenceStarters = ['You are a ', 'I am a ', 'He is a ', 'She is a ', 'It is a '];
    const animals = ['cat', 'dog', 'fish', 'pigeon', 'snake'];
    this.credentials.threadTitle = `${sentenceStarters[Math.floor(Math.random() * sentenceStarters.length)]}${animals[Math.floor(Math.random() * animals.length)]}`;

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
