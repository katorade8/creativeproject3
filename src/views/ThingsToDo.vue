<template>

  <div>

    <h1>Things To Do</h1>


    <!--<ParkList :parks='parks'/>-->

  </div>

</template>

<script>
//import ParkList from "../components/ParkList.vue"

export default {
  name: 'ThingsToDo',


  computed: {
    moreInfo() {
      let park;
      for (let i = 0; i < this.$root.$data.parks.length; ++i) {
        if (this.$root.$data.parks[i].id === this.$root.$data.currParkCode) {
          park = this.$root.$data.parks[i]
        }
      }
      return park;
    },
  },

  //Will probably want to change filter to find parkId, could put a global variable in main.js or import a variable from parklist


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
