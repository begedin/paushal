<template>
  <div class="app">
    <div class="nav">
      <router-link to="/">
        Home
      </router-link>
      <router-link to="/codepoc">
        POC - Code
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({ name: 'app' })
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav {
  display: flex;
  justify-content: center;

  a {
    background: palegreen;
    border-radius: 2px;
    margin: 3px;
    padding: 5px;
    text-decoration: none;
    text-transform: uppercase;
  }
}
</style>
