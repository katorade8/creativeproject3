<template>
<div class=img-list>
  <div v-for="image in images" :key="image.url" class="image-w-caption">
    <img class="image" :src="image.url">
    <p class=caption>{{image.caption}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'PhotoList',
  props: {
    images: Array
  }
}
</script>

<style scoped>
.img-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
}

.caption {
  margin-bottom: 40px;
}
</style>