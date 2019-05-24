<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/common/Header"
import Footer from "./components/common/Footer"
export default {
  components: {
    Header,
    Footer
  },
  name: 'App'
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans');
  #app {
    font-family: 'Noto Sans', sans-serif;
    text-align: center;
  }
</style>