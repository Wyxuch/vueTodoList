<template>
  <nav class="nav">
    <router-link
        class="nav_button"
        v-for="route in this.routes"
        :key="route.name"
        :to="route.path"
    >
      {{ route.name }}
    </router-link>
  </nav>
</template>

<script>
import routes from '../router/routes'
export default {
  name: "Navigation",

  data() {
    return {
      routes: routes.filter(el => !el.redirect)
    }
  },
}
</script>

<style scoped>
  .nav {
    z-index: 999;
    position: sticky;
    top: 0;
    display: flex;
    padding: 16px;
    background-color: #42b983;
    box-shadow: 2px 2px 8px rgba(100, 100, 100, 0.3);
  }

  .nav_button {
    min-width: 96px;
    padding: 8px 16px;
    margin-right: 8px;
    border: 0;
    background-color: #35495e;

    color: #fff;
    font-weight: 600;
    text-decoration: none;
    text-align: center;

    transition: background-color 0.3s;
  }

  .nav_button.add {
    min-width: 0;
    font-weight: 900;
  }

  .nav_button:hover {
    background-color: #486376;
  }

  .nav_button:active {
    background-color: #293b4c;
  }
</style>