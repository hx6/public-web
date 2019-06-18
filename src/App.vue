<template>
  <div id="app">
    <Header :menu="menu" />
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import Header from "./components/Blocks/Header";
export default {
  components: {
    Header
  },
  data() {
    return {
      menu: [
        { id: 1, url: "/", title: "Home" },
        { id: 2, url: "/login", title: "Login" },
        { id: 3, url: "/register", title: "Register" }
      ]
    };
  }
};
</script>

