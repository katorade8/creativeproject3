
<template>
<body>
<div>
  <div>
    <div v-for="park in parks" :key="park.id">
      <div>
        <h1>{{park.fullName}}, {{park.states}}</h1>
      </div>
      <div>
        <img class='image' :src='park.images[0].url'/>
      </div>
      <div class='photo-text'>
        
        <button @click="changePark(park.id); goToActivites()">
          <h4>Activities in {{park.fullName}}</h4>
        </button>
      </div>
    </div>
  </div>
</div>
</body>
</template>

<script>

export default {
  name: 'ParkList',
  props: {
    parks: Array,
  },
  methods: {
    changePark(id) {
      this.$root.$data.currParkCode = id;
      console.log("changing park id to " + id)
      for (let i = 0; i < this.$root.$data.parks.length; ++i) {
        if (this.$root.$data.parks[i].id === this.$root.$data.currParkCode) {
          this.$root.$data.currPark = this.$root.$data.parks[i];
          this.$root.$data.images = this.$root.$data.parks[i].images;
          break;
        }
      }
    },
    goToActivites() { //whole button is now a link :)
      this.$router.push('/ThingsToDo');
    }
  }
}

</script>


<style>
.photo-text {
  margin-bottom: 50px;
}

button {
  padding-left: 10px;
  padding-right: 10px;
}
</style>