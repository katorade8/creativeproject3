import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


let tmp = []
let url = 'https://developer.nps.gov/api/v1/parks?limit=465&api_key=NbIPOLabrmVaAyIClWYjTbBVpme58IAaB2pNKkHl'
fetch(url)
    .then(response => {
      return response.json()
}).then(json => {
      console.log(json)
      
      for (let i = 0; i < json.data.length; i++) {
        if (json.data[i].designation == "National Park") {
          tmp.push(json.data[i])
        }
      }

})

let data = {
  parks: tmp,
}



new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
