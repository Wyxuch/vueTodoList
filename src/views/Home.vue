<template>
  <NavigationLayout>
    <div class="home">
      <h1>Create new list</h1>
      <Button label="Save" background="#28a745" :light-text="true" @save="handleSave" click="save"/>
      <input type="text" v-model="listName">
    </div>
  </NavigationLayout>
</template>

<script>
import NavigationLayout from "../layouts/NavigationLayout";
import Button from "../components/Button";
import {mapMutations} from "vuex"
import router from "../router";
import parseSlug from "../utils/parseSlug";

export default {
  name: 'Home',
  components: {
    Button,
    NavigationLayout,
  },
  data() {
    return {
      listName: ''
    }
  },
  methods: {
    ...mapMutations(['addList']),
    handleSave() {
      if(this.listName.length !== 0) {
        const name = this.listName
        router.addRoute({
          path: `/${parseSlug(name)}`,
          name: name,
          component: () => import('../views/List')
        })
        this.addList(name)
        this.listName = '';
      }
    }
  }
}
</script>

<style scoped>
  .home h1 {
    font-size: 2rem;
    margin-bottom: 16px;
  }

  .home input {
    border: 1px solid #989898;
    font-size: 1rem;
    padding: 4px;
    margin-left: 8px;
    margin-bottom: 16px;
  }
</style>

