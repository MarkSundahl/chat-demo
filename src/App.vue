<template>
  <div id="app">
    <ChatDemo/>
  </div>
</template>

<script>
import ChatDemo from './components/ChatDemo'

export default {
  name: 'app',
  components: {
    ChatDemo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
