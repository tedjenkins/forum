<template>
  <div id="site-search">
    <input type="text" placeholder="Search site..."/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})

export default class HeaderSiteSearch extends Vue {}
</script>

<style lang="scss" scoped>
#site-search input {
  background-color: $light-site-main-bgcolor;
  border: 1px solid white;
  border-radius: 8px;
  color: $light-site-main-fontcolor;
  font-size: 13px;
  padding: 8px;
  width: 240px;
}
</style>

