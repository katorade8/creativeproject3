<template>
  <div>
  
<!--  Actual For Loop for going through all reviews
    <div v-for='review in reviews' :key='review.name'>
      <div class='reviewContainer'>
        <div class='reviewBox'>
          <p>{{FIXME}}</p>
        </div>
      </div>
    </div>
-->

<!--Testing-->
    <div class='reviewContainer'>
      <div class='reviewBox'>
          <p>{{person}}'s Review</p>
          <span>Stars: {{stars}}</span>

      </div>
    </div>


  </div>
</template>





<script>
export default {

  name: 'Review',

  props: {
    stars: Number,
    person: String,
    reviews: Object,
  },

  methods: {

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

  flex-direction: column;

  width: 50%;
}


</style>
