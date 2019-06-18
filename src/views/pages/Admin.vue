<template>
  <div id="admin">
    <section id="admin-boards-box">
      <h1>Boards</h1>
      <ul>
        <li>
          <router-link to="/admin/add-board">Add a board</router-link>
        </li>
        <li>
          <router-link to="/admin/remove-board">Remove a board</router-link>
        </li>
        <li>
          <router-link to="/admin/modify-board">Modify an existing board</router-link>
        </li>
      </ul>
      <h1>Users</h1>
      <ul>
        <li>
          <router-link to="/admin/ban-user">Ban / unban a user</router-link>
        </li>
        <li>
          <router-link to="/admin/view-all-users">View all users</router-link>
        </li>
      </ul>
      <h1>Miscellaneous</h1>
      <ul>
        <li>
          <router-link to="/admin/modify-blacklisted-terms">Modify blacklisted terms</router-link>
        </li>
        <li>
          <router-link to="/admin/modify-site-settings">Modify site settings</router-link>
        </li>
        <li>
          <router-link to="/admin/sandbox">Sandbox page (testing)</router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Admin extends Vue {}
</script>

<style lang="scss" scoped>
#admin {
  font-size: 15px;

  h1 {
    background-color: lightblue;
    border: 1px solid #9090ff;
    border-left: 0px;
    border-right: 0px;
    font-size: 16px;
    padding: 5px;
  }

  ul {
    list-style-type: none;
    margin: 0px;
    padding: 0px;
  }

  li {
    user-select: none;
  }
}

@media all and (min-width: 600px) {
  #admin {
    font-size: 17px;

    h1 {
      background-color: lightblue;
      border: 1px solid #9090ff;
      font-size: 20px;
      margin: 5px;
      padding: 5px;
    }

    ul {
      list-style-type: initial;
      margin-left: 30px;
    }

    li {
      padding: 3px;

      &:hover {
        background-color: #ddd;
      }
    }
  }
}
</style>
