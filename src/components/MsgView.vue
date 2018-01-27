<template>
  <div class="message-view">
    <div class="msg-header">
      <span>{{message.author}}</span>
      <span class="stamp">{{formattedStamp}}</span>
    </div>
    <div class="msg-body">
      {{message.text}}
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    
    props: ['message'],
    
    data () {
      return {
        
      };
    },
    
    computed: {
      formattedStamp () {
        return new Date(this.message.stamp).toLocaleString();
      },
    },
    
  }
</script>

<style>
  
  .message-view {
    margin: 1px;
    border: thin lightblue solid;
  }
  
  .msg-header {
    font-size: .9em;
    height: 1em;
    color: saddlebrown;
  }
  
  .stamp {
    float: right;
  }
  
  .msg-body {
    padding: 1em;
  }
  
</style>