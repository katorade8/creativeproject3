<template>
  <div>
    <h4>{{}}'s Review</h4>

    <div class='reviewContainer'>
      <div class='reviewBox'>
        <p>Test</p>
      </div>
    </div>

  </div>
</template>





<script>
export default {

  data() {
    return {
      review: {
        content: 'It sucked',
        stars: 0,
        person: 'John',

      }
    }
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
