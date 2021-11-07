<template>

  <div>
    <div>
      <form>
        <input class='form' type='text' v-model="searchText" />
      </form>
    </div>
    <div v-if="this.$root.$data.isLoaded">
      <ParkList :parks='parks'/>
    </div>
    <div v-else>
      <p>Loading park list...</p>
    </div>

  </div>

</template>

<script>
import ParkList from "../components/ParkList.vue"

export default {
  name: 'Home',
  components: {
    ParkList,
  },
  data() {
    return {
      searchText: ''
    }
  },
  computed: {
    parks() {
      return this.$root.$data.parks.filter(park => park.fullName.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  },
  watch: {

  }
}
</script>

<style scoped>
.form-container {
  justify-content: center;
  width: 100%
}
/* form in global style in App.vue for media query purposes */
</style>
