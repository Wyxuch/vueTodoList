<template>
  <NavigationLayout>
    <div class="list_wrapper">
      <ListActionBar :listId="list.id"/>
      <div>
        <ListItem
            v-for="item in this.list.listItems"
            :key="item.id"
            :content="item.content"
            :resolved="item.resolved"
            :listId="list.id"
        />
      </div>
    </div>
  </NavigationLayout>
</template>

<script>
import NavigationLayout from "../layouts/NavigationLayout";
import ListActionBar from "../components/ListActionBar";
import ListItem from "../components/ListItem";

export default {
  name: "List",
  components: {NavigationLayout, ListActionBar, ListItem},
  computed: {
    list () {
      return this.$store.state.lists[0]
    }
  },
}
</script>

<style scoped>

</style>