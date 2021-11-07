
<template>
<body>
<div>
  <div>
    <div v-for="park in parks" :key="park.id">
        <div>
        <h1>{{park.fullName}}</h1>
        <h3>{{park.states}}</h3>
      </div>
      <div>
        <img class='image' :src='park.images[0].url'/>
      </div>
      <div  class='photo-text'>
         <router-link to="/ThingsToDo">Activities</router-link>
      </div>
    </div>
  </div>
</div>
</body>
</template>

<script>

export default {
    name: 'ParkList',
    props: {
        parks: Array,
    },
}

</script>


<style scoped>

body {
  background: lightsteelblue;
}

.image {
  justify-content: center;
  width: 60%;
  border-radius: 50px;
}

.photo-text {
  margin-bottom: 200px;
}


</style>







<!--
<style scoped>

body {
  background: lightsteelblue;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #1d44f2;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
-->