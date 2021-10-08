<template>
  <button @click="handleClick">
    {{ label }}
  </button>
</template>

<script>

import CDL from "../utils/colorDarkenLighten";

export default {
  name: "Button",
  props: {
    label: String,
    click: String,
    background: String,
    lightText: Boolean,
  },
  methods: {
    handleClick() {
      this.$emit(this.click)
    }
  },
  data() {
    return {
      textColor: this.lightText ? '#fff' : '#2e2e2e',
      backgroundColor: this.background || '#5fe3a8',
      backgroundColorLighten: this.background ? CDL(0.1, this.background) : CDL(0.1, '#5fe3a8'),
      backgroundColorDarken: this.background ? CDL(-0.2, this.background) : CDL(-0.2, '#5fe3a8'),
    }
  }
}
</script>

<style scoped>
  button {
    padding: 6px 14px;
    border: 2px solid v-bind(backgroundColorDarken);
    background-color: v-bind(backgroundColor);

    color: v-bind(textColor);
    font-weight: 600;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;

    transition: background-color 0.3s;

    cursor: pointer;
  }

  button:hover {
    background-color: v-bind(backgroundColorLighten);
  }

  button:active {
    background-color: v-bind(backgroundColorDarken);
  }
</style>