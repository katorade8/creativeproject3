<template>
  <div class="img">
    <div v-for="image in images" :key="image.url">
      <img :src="image.url"> 
    </div>
    hello there
  </div>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'

export default {
  name: 'Photo',
  props: {
    images: Array
  }
}
</script>

<style scoped>

.img {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

img {
  margin: 20px;
}

</style>
