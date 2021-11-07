<template>
  <div v-if="this.$root.$data.currPark != null">
    <h1>More Info</h1>
    <h2>{{this.$root.$data.currPark.fullName}}</h2>
    <img class='image' :src='this.$root.$data.currPark.images[1].url'/>
    <p>Entrance Fee: {{this.$root.$data.currPark.entranceFees[0].cost}}</p>
    <p>Description: {{this.$root.$data.currPark.entranceFees[0].description}}</p>
    <br/>
    <h1>Activities</h1>
    <div>
      <div class='activity-container'>
        <span class='activity' v-for='activity in this.$root.$data.currPark.activities' :key='activity.id'>{{activity.name + " / "}}</span>
      </div>
    <br>
    </div>
    <br/>
  </div>
  <div v-else>
    <h4>Please select a park to see more info!</h4>
  </div>
</template>

<script>
//import ParkList from "../components/ParkList.vue"

export default {
  name: 'ThingsToDo',
  activities: '',
  methods: {
    listActivities() {
      for (let i = 0; i < 10; ++i) {
        this.activities += this.$root.$data.currPark.activities[i].name
        this.activities += " "
      }
    },
  },


}
</script>



<style scoped>

.form-container {
  justify-content: center;
  width: 100%
}

p {
  font-size: 20px;
}


.form {
  width: 25%;
  height: 40px;
  font-size: 30px;
}


.activity-container {
  width: 75%;
  margin: auto;
}

.activity {
  font-size: 20px;
}



/* INHERIT FROM Parklist non-scope style
.image {
  justify-content: center;
  width: 60%;
  border-radius: 50px;
}*/
</style>
