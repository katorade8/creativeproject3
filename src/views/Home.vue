<template>

  <div>

    <div>
      <form>
        <input class='form' type='text' v-model="searchText" />
      </form>

    </div>


    <ParkList :parks='parks'/>

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
      searchText: '',
    }
  },

  computed: {
    parks() {
      return this.$root.$data.parks.filter(park => park.fullName.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  }

}
</script>



<style scoped>

.form-container {
  justify-content: center;
  width: 100%
}

.form {
  width: 25%;
  height: 40px;
  font-size: 30px;
}





</style>
