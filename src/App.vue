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
</style>
