<template>
  <div>
    <h1>Reviews</h1>
    <h5>Add Review</h5>
    <div class='reviewContainer'>
      <form>
        <input class='newComment' type='text' placeholder="New Comment" v-model='newComment'/>
        <input type='submit'/>
      </form>
    </div>
    <p>Testing - New Comment is: {{newComment}}</p>  <!--Testing just ot see if newComment is update-->
    <Review :reviews="reviews"/>
  </div>
</template>


<script>
import Review from '../components/Review.vue'
import axios from 'axios'

export default {
  data() {
    return {
      newComment: '',
      person: 'John',
    }
  },
  name: 'Reviews',
  components: {
    Review
  },
  computed: {
    reviews() { //fetch reviews for current park from database
      let reviews = axios.get("api/reviews/" + this.$root.$data.currPark);
      return reviews;
    }
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

.newComment {
  height: 30px;
  width: 100%;
}

</style>
