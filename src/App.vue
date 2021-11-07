<template>
  <div id="app">
    <div id="content-wrap">
      <div id="nav">
        <h2>
          <router-link to="/">Home</router-link> |
          <router-link to="/photo">Photos</router-link> |
          <router-link to="/ThingsToDo">Activities</router-link>
        </h2> 
      </div>
      <router-view/>
    </div>
    <div class="footer"> 
      <h2><a class="github-link" href="https://github.com/katorade8/creativeproject3">github</a></h2>
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
* {
  padding: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  min-height: 96vh; 
}

#content-wrap {
  margin-bottom: 2.5rem;
}

#nav a,
.footer a {
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  text-decoration: none;
  color: #42b983;
  font-weight: 900;
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

.footer {
  position: absolute;
  bottom: 0;
  width: 98%;
  height: 2.5rem;
}

.github-link:hover {

  color: #42b983;
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
