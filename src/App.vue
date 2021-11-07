<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/photo">Photos</router-link>
    </div>
    <router-view/>
    <div class="footer"> 
      <a href="https://github.com/katorade8/creativeproject3">github</a>
    </div>
  </div>
</template>


<script>
export default {
  created: function() {
    const url = 'https://developer.nps.gov/api/v1/parks?limit=465&api_key=NbIPOLabrmVaAyIClWYjTbBVpme58IAaB2pNKkHl';
    fetch(url).then(response => {
      return response.json();
      }).then(json => {
        console.log(json);
        for (let i = 0; i < json.data.length; i++) {
          if (json.data[i].designation == "National Park" || json.data[i].designation == "National Park & Preserve" ||
              json.data[i].designation == "National and State Parks" || json.data[i].designation == "National Parks" ||
              json.data[i].designation == "National Park and Preserve") {
            this.$root.$data.parks.push(json.data[i]);
          }
          if(json.data[i].fullName == "National Park of American Samoa")
            this.$root.$data.parks.push(json.data[i]);
        }
    }).finally(() => this.$root.$data.isLoaded = true)
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a,
.footer a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.image {
  justify-content: center;
  width: 90%;
  border-radius: 10px;
  margin-bottom: 10px;
}

.form {
  width: 50%;
  height: 40px;
  font-size: 30px;
}

@media only screen and (min-width: 600px) {
  .image {
    width: 70%;
  }
  .form {
    width: 35%;
  }
}

@media only screen and (min-width: 1000px) {
  .image {
    width: 60%;
  }
  .form {
    width: 27%;
  }
}

@media only screen and (min-width: 1500px) {
  .image {
    width: 900px;
  }
  .form {
    width: 400px;
  }
}
</style>
