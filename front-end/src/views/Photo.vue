<template>
  <div class="img" v-if="this.$root.$data.currPark == null">
    <h4>Please select a park to see related photos!</h4>
  </div>
  <div v-else>
    <p>Viewing photos for</p>
    <h1>{{this.$root.$data.currPark.fullName}}</h1>
    <PhotoList :images="images"/>
    <br>
  </div>
</template>

<script>
import PhotoList from "../components/PhotoList.vue"

export default {
  name: 'Photo',
  components: {
    PhotoList
  },
  computed: {
    images() {
      return this.$root.$data.images;
    }
  }
}
</script>
