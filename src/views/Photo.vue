<template>
  <div class="img" v-if="this.$root.$data.currPark == null">
    <p>Please select a park to see related photos!</p>
  </div>
  <div v-else>
    <h1>Viewing Photos for {{this.$root.$data.currPark.fullName}}</h1>
    <PhotoList :images="images"/>
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

<style scoped>

.img {
  justify-content: center;
}


</style>
