<template>
  <div>
    <h4>{{person}}'s Review</h4>

    <div class='reviewContainer'>
      <div class='reviewBox'>
        <p>Test</p>
      </div>
    </div>

  </div>
</template>





<script>
export default {

  name: 'John',

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
