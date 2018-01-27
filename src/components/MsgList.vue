<template>
  <div>
    <MsgView v-for="message in messages" :message="message" :key="message.id" />
    <ComposeMsg @send="send" :username="username" />
  </div>
</template>

<script>
  import MsgView from './MsgView';
  import ComposeMsg from './ComposeMsg';
  import MsgMan from '../operations/MsgMan';
  
  export default {
    name: 'MsgList',
    components: {MsgView, ComposeMsg},
    props: ['username'],
    
    data () {
      return {
        // Initialize for data binding
        messages: [],
      };
    },
    
    methods: {
      send: MsgMan.addMsg,
    },
    
    mounted () {
      // On mount, get pre-existing messages
      MsgMan.getAll(function(messages) {
        this.messages = messages;
      }.bind(this));
      // Subscribe to new messages from server
      MsgMan.subscribe( (newMsg) => this.messages.push );
    },
  };
</script>

<style>
  
</style>