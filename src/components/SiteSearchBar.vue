<template>
  <input type="text" class="site-search" placeholder="Search site..."/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})

export default class SiteSearchBar extends Vue {}
</script>

<style lang="scss" scoped>
.site-search {
  background-color: $light-site-hdrftr-bgcolor;
  border: 1px dotted white;
  border-radius: 8px;
  color: $light-site-main-fontcolor;
  display: block;
  font-size: 13px;
  margin: 0px auto;
  padding: 8px;
  width: 240px;
}
</style>

