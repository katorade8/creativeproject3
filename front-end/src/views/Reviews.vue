<template>
  <div>
    <h1>Reviews</h1>

    <h5>Add Review</h5>
    
    <div class='reviewContainer'>

      <form><input type='text' placeholder="New Comment" v-model='newComment'/></form>
    </div>

    <Reviews/>






  </div>


</template>





<script>
import Reviews from '../components/Reviews.vue'

export default {

  data() {
    return {
      newComment: '',
    }
  },


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

  width: 50%;
}


</style>
