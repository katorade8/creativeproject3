<template>

  <div>

    <h1>Things To Do</h1>

    <p>{{this.$root.$data.currPark.fullName}}</p>

    <img class='image' :src='this.$root.$data.currPark.images[0].url'/>


  </div>

</template>

<script>
//import ParkList from "../components/ParkList.vue"

export default {
  name: 'ThingsToDo',


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

.image {
  justify-content: center;
  width: 60%;
  border-radius: 50px;
}





</style>
