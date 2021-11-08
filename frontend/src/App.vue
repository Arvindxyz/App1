<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  
  }
}
</script>

<style>
body{
  margin:0;
  padding:0; 
  background-color:aquamarine;
}
*{
  box-sizing:border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a{
  text-decoration:none;
} 
a:hover {
    cursor: pointer;
 }
a:action {
    color: aquamarine;
 }
</style>
