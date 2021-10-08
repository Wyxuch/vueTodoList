<template>
  <Navigation />
  <div class="navigation-layout">
    <div class="bg-filter">
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation";

export default {
  name: "NavigationLayout",
  components: {Navigation}
}
</script>

<style scoped>
  .navigation-layout {
    min-height: calc(100vh - 16px * 4);
    background-image: url("./../assets/logo.svg");
    background-repeat: repeat-x;
    background-attachment: fixed;
    background-size: 115.5vh;
    background-position: center top;
  }

  .navigation-layout > .bg-filter {
    padding: 32px;
    min-height: calc(100vh - 16px * 4);
    background-color: rgba(255, 255, 255, 0.85);
    background-attachment: fixed;
  }

  .content {
    margin: 0 auto;
    max-width: 1000px;
    border: 1px solid #c7c7c7;
    padding: 32px;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(240, 240, 240, 0.7));
    backdrop-filter: blur(10px);
    box-shadow: 2px 2px 8px rgba(100, 100, 100, 0.);
  }
</style>