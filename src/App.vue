<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans');
  #app {
    font-family: 'Noto Sans', sans-serif;
    text-align: center;
    margin-top: 60px;
  }
</style>