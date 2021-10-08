<template>
  <div class="wrapper">
    <textarea class="textInput" type="text" v-if="edit" v-model="editableContent" />
    <p v-else :class="{resolved: resolved}">{{content}}</p>
    <div v-if="edit" class="buttons-wrapper">
      <Button label="save" background="#28a745" click="edit" @edit="handleEdit"/>
      <Button label="cancel" background="#dc3545" :light-text="true" click="cancel" @cancel="cancel"/>
    </div>
    <div v-else class="buttons-wrapper">
      <Button label="resolve" background="#28a745" :light-text="true" click="resolve" @resolve="handleResolve"/>
      <Button label="edit" background="#ffc107" click="edit" @edit="handleEdit"/>
      <Button label="delete" background="#dc3545" :light-text="true" click="delete" @delete="handleDelete"/>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
import { mapActions } from "vuex";
import {getCurrentInstance} from "vue";
export default {
  name: "ListItem",
  props: {
    content: String,
    listId: String,
    resolved: Boolean,
  },
  components: {Button},
  data() {
    return {
      currentKey: getCurrentInstance().vnode.key,
      edit: false || !this.content,
      editableContent: this.content,
    }
  },
  computed: {
    payload() {
      const listId = this.listId;
      const itemId = this.currentKey;
      const content = this.editableContent;
      return {listId, itemId, content};
    }
  },
  methods: {
    ...mapActions(["resolveItem", "changeContent", "deleteItem"]),
    handleResolve() {
      this.resolveItem(this.payload)
    },
    handleDelete() {
      this.deleteItem(this.payload)
    },
    handleEdit() {
      if(this.edit && !this.editableContent) {
        this.deleteItem(this.payload)
        return
      }
      if(this.edit) {
        this.changeContent(this.payload)
      }
      this.edit = !this.edit
    },
    cancel() {
      this.editableContent = this.content
      if (!this.editableContent) {
        this.deleteItem(this.payload)
      }
      this.edit = !this.edit
    }
  },
}
</script>

<style scoped>
  .wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid #c7c7c7;
  }

  .wrapper > p {
    margin-top: 8px;
    margin-right: 16px;
    color: #2e2e2e;
  }

  .wrapper > .resolved {
    color: #989898;
    text-decoration: line-through;
  }

  .buttons-wrapper button:not(:last-of-type) {
    margin-right: 8px;
  }

  .textInput {
    flex: 1;
    margin-right: 16px;
    background: transparent;
    font-family: sans-serif!important;
    font-size: 1rem;
  }
</style>