<template>
  <div>
    <h1>Reviews</h1>

    <Reviews/>

    <div class='reviewContainer'>
      <div class='reviewBox'>
        <p>Test</p>
      </div>
    </div>

  </div>


</template>





<script>
import Reviews from '../components/Reviews.vue'

export default {

  components: {
    Reviews,
  },

}

</script>








<style scoped>

.reviewContainer {
  display: flex;
  justify-content: center;
}


.reviewBox {
  display: flex;

  background-color: lightblue;

  width: 50%
}

</style>
