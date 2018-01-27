<template>
  <div>
    <form id="compose">
      <textarea v-model="newMsg.text" @keydown="keySend" ref="input" />
      <button @click.prevent="sendMsg" >Send</button>
    </form>
  </div>
</template>

<script>
  
  
  export default {
    name: '',
    props: ['username'],
    
    data () {
      return {
        newMsg: {},
      };
    },
    
    methods: {
      sendMsg () {
        this.newMsg.author = this.username;
        this.newMsg.stamp = Date.now();
        this.$emit('send', this.newMsg);
        this.newMsg = {};
        this.$refs.input.focus();
      },
      keySend (e) {
        if (e.key == "Enter" && !e.shiftKey) {
          this.sendMsg();
          e.preventDefault();
        }
      },
    },
    
    mounted () {
      this.$refs.input.focus();
    },
    
  };
</script>

<style>
  
  #compose {
    position: relative;
    height: 4em;
  }
  
  #compose * {
    position: absolute;
    top: 1px;
    bottom: 1px;
  }
  
  #compose button {
    right: 1px;
    width: 12%;
  }
  
  #compose textarea {
    left: 1px;
    width: 85%;
  }
  
</style>