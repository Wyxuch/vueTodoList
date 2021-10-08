<template>
  <div class="wrapper">
    <Button label="Add item" background="#28a745" :light-text="true" @addItem="handleAddItem" click="addItem"/>
    <Button label="Resolve All" background="#ffc107" @resolveAll="handleResolveAll" click="resolveAll"/>
    <Button label="Clear All" background="#dc3545" :light-text="true" @deleteAll="handleDeleteAll" click="deleteAll"/>
  </div>
</template>

<script>
import Button from "./Button";
import {mapActions} from "vuex";
export default {
  name: "ListActionBar",
  components: {Button},
  props: {
    listId: String
  },
  methods: {
    ...mapActions(['resolveAll', 'deleteAll', 'addItem']),
    handleResolveAll() {
      const listId = this.listId
      this.resolveAll({listId})
    },
    handleDeleteAll() {
      const listId = this.listId
      this.deleteAll({listId})
    },
    handleAddItem() {
      const listId = this.listId
      this.addItem({listId})
    }
  }
}
</script>

<style scoped>
  .wrapper {
    display: flex;
    justify-content: flex-end;
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid #c7c7c7;
  }

  button:first-of-type {
    margin-right: auto;
  }

  button:last-of-type {
    margin-left: 8px;
  }
</style>