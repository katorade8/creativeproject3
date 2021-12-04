<template>
  <div>
    <h1>Reviews</h1>

    <h5>Add Review</h5>

    <div class='reviewContainer'>
      <form><input class='newComment' type='text' placeholder="New Comment" v-model='newComment'/></form>
    </div>

    <p>New Comment is: {{newComment}}</p>  <!--Testing just ot see if newComment is update-->

    <Reviews/>



  </div>


</template>





<script>
import Reviews from '../components/Review.vue'

export default {

  data() {
    return {
      newComment: '',
    }
  },


  components: {
    Reviews,
  },

  methods: {
    
  }

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

.newComment {
  
  height: 30px;
  width: 100%;
}


</style>
