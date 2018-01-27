<template>
  <div class="chat-demo">
    <span v-if="user.loggedIn" id="logged-in-as" >
      Logged in as:<br />
      {{user.username}}<br />
      <a href="#" @click="logout" >Log Out</a>
    </span>
    <h3 class="main-title">
      {{title}}
    </h3>
    <MsgList v-if="user.loggedIn" :username="user.username" />
    <SignIn v-else @login="handleLogin" />
  </div>
</template>

<script>
  import MsgList from './MsgList';
  import SignIn from './SignIn';
  
  export default {
    name: 'ChatDemo',
    components: { MsgList, SignIn},
    
    data () {
      return {
        title: 'Chat Demo',
        user: {
          username: '',
          loggedIn: false,
        },
      };
    },
    
    methods: {
      handleLogin (username) {
        this.user = {
          username: username,
          loggedIn: true,
        };
      },
      logout () {
        this.user.loggedIn = false;
      },
    },
    
  };
  
</script>

<style>
  
  body {
    background: grey;
  }
  
  .chat-demo {
    width: 25em;
    margin: auto;
    background: white;
  }
  
  .main-title {
    padding: 1em;
    margin: 0;
  }
  
  #logged-in-as {
    text-align: right;
    float: right;
    font-size: .9em;
    padding: .3em .5em;
  }
  
</style>