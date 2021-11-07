
<template>
<body>
<div>
  <div>
    <div v-for="park in parks" :key="park.id">
      <div>
        <h1>{{park.fullName}}</h1>
        <h3>{{park.states}}</h3>
      </div>
      <div>
        <img class='image' :src='park.images[0].url'/>
      </div>
      <div class='photo-text'>
        <button @click='changePark(park.id)'><router-link to="/ThingsToDo">More Info</router-link></button>
        <p>{{park.id}}</p>
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
    }
  }
}

</script>


<style>
.photo-text {
  margin-bottom: 100px;
}

.image {
  justify-content: center;
  width: 60%;
  border-radius: 10px;
  margin-bottom: 10px;
}
</style>