<template>
  <div class="user-listing-box">
    <div class="user-box" v-for="user of users" :key="user.id">
      <div class="user-name">
        <a :href="`${siteHost}/profile/${user.id}`">{{ user.name }}</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { props } from '@/utils';
import { isBefore } from 'date-fns';
import Users from '@/db/entities/Users';

@Component
export default class UserProfileListing extends Vue {
  @Prop() length!: number;

  users: Users[] | null = null;
  siteHost = props.siteHost;

  created() {
    fetch(`${props.siteHost}/get-users/${this.length}`)
      .then(res => res.json())
      .then((json: Users[]) => {
        this.users = json.sort((user1, user2) => {
          return isBefore(user1.dateCreated, user2.dateCreated) ? 1 : 0;
        });
      })
      .catch(() => this.$store.commit('flagLostDb'));
  }
}
</script>

<style lang="scss" scoped>
</style>
