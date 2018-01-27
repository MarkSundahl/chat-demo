<template>
  <div id="login">
    <form @submit.prevent="">
      <input type="text" v-model="nameInput" ref="input" />
      <button @click="login" >Sign In</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: '',
    
    data () {
      return {
        nameInput: localStorage.getItem('username'),
      };
    },
    
    methods: {
      login () {
        localStorage.setItem('username', this.nameInput);
        this.$emit('login', this.nameInput);
      },
    },
    
    mounted () {
      this.$refs.input.focus();
    },
  }
</script>

<style>
  
</style>