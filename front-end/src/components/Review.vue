<template>
  <div>
    <div class='reviewContainer'>
      <div class='reviewBox'>
        <p>{{content}}</p>
      </div>
    </div>

  </div>
</template>





<script>
export default {

  name: 'Review',
/*
  data() {
    return {
      review: {
        content: 'It sucked',
        stars: 0,
        person: 'Tony',

      }
    }
  },
*/

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

  width: 50%;
}


</style>
