<template>
  <div class="main">
    <Header />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default{
    components: { Header }
}
</script>

<style>
  body{
    margin: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .main{
    position: relative;
  }

  .content{
    position: absolute;
    width: 100%;
    top: 70%;
    padding: 20px 160px;
  }
</style>
