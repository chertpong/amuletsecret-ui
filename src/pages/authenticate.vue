<template>
  <div class="authenticate">
    <a href="/login">
      <v-btn block secondary dark>Login</v-btn>
    </a>
    <v-btn block secondary blue to="/authenticate/facebook">FB Login</v-btn>
  </div>
</template>

<script>
  export default {
    name: 'authenticate',
    data () {
      return {
        msg: 'Login'
      }
    },
    methods: {
      login () {
        window.location.replace('/login')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #35495E;
  }
</style>
