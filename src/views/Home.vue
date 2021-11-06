<template>

  <div>

    <div class="search">
      <form class="pure-form">
        <input type='text' v-model="searchText" />
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
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
