<template>

  <div>
    <div>
      <form>
        <input class='form' type='text' v-model="searchText" />
      </form>
    </div>

    <!--<div v-if="this.$data.pageLoaded">-->
      <ParkList :parks='parks'/>
    <!--</div>
    <div v-else>
      <p>Loading...</p>
    </div>-->

  </div>

</template>

<script>
import ParkList from "../components/ParkList.vue"

export default {
  name: 'Home',
  created: function() {
    let tmp = [];
    const url = 'https://developer.nps.gov/api/v1/parks?limit=465&api_key=NbIPOLabrmVaAyIClWYjTbBVpme58IAaB2pNKkHl';
    fetch(url).then(response => {
      return response.json();
      }).then(json => {
        console.log(json);
        for (let i = 0; i < json.data.length; i++) {
          if (json.data[i].designation == "National Park" || json.data[i].designation == "National Park & Preserve" ||
              json.data[i].designation == "National and State Parks" || json.data[i].designation == "National Parks" ||
              json.data[i].designation == "National Park and Preserve") {
            tmp.push(json.data[i]);
          }
          if(json.data[i].fullName == "National Park of American Samoa")
            tmp.push(json.data[i]);
        }
    }).finally(() => this.$root.$data.parks = tmp, this.$root.$data.pageLoaded = true, console.log(this.$root.$data.pageLoaded))

  },
  components: {
    ParkList,
  },
  data() {
    return {
      searchText: ''
    }
  },

  computed: {
    parks() {
      return this.$root.$data.parks.filter(park => park.fullName.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  }

}
</script>



<style scoped>

.form-container {
  justify-content: center;
  width: 100%
}

.form {
  width: 25%;
  height: 40px;
  font-size: 30px;
}





</style>
