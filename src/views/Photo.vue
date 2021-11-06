<template>
  <div class="img">
    <!--<img src="image.src">-->
    <!--<i>{{image.caption}}</i>-->
    hello there
  </div>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'

export default {
  name: 'Photo'
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
