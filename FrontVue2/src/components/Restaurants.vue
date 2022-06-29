<template>
  <div id="restaurants-view" class="mt-3 mb-8">
    <v-container class="pr-0 pl-0">
      <v-row id="search-bars">
        <v-col sm="12" md="12" lg="3">
          <h2>Offres du moment</h2>
        </v-col>
        <v-col md="6" lg="4" >
          <v-text-field hide-details prepend-icon="mdi-magnify" placeholder="Ville..." single-line></v-text-field>
        </v-col>
        <v-col md="6" lg="4">
          <v-text-field hide-details prepend-icon="mdi-magnify" placeholder="Restaurant..." single-line></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col md="12" lg="3">
          <v-card class="ma-auto" max-width="80%">
            <v-list>
              <v-list-item>Catégories :</v-list-item>
                <v-list-item-group multiple>
                  <template v-for="(category, i) in restau">
                    <v-divider v-if="!category" :key="`divider-${i}`"></v-divider>
                    <v-list-item v-else :key="`item-${category}`" active-class="text--accent-4">
                    <template v-slot:default="{ active }">
                      <v-list-item-content>
                        <v-list-item-title>{{ restau.category}}</v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-checkbox :input-value="active" color="#00c668"></v-checkbox>
                      </v-list-item-action>
                    </template>
                    </v-list-item>
                  </template>
                </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>

        <v-col md="12" lg="9">
          <v-card id="Card" :key="index" v-for="(restau, index) in restau" elevation="2" outlined class="restaurant-cards mb-5">
            <router-link :to="/restaurants/ + restau._id + '/' + nameForUrl(restau.name)" class="text-decoration-none">
              <v-row> 
                <v-col sm="3">
                  <!--v-img :src="restau.image" :alt="restau.name" height="100%"/-->
                </v-col>
                <v-col sm="9">
                  <div class="restaurant-theme">
                    <v-card-title > {{ restau.name }}</v-card-title>
                    <div class="categories">
                      <v-card-text>
                        {{ restau.category }}
                      </v-card-text>
                    </div>
                  </div>
                    <v-card-subtitle>{{ restau.description }}</v-card-subtitle>
                  <div class="restaurant-infos">
                    <v-card-subtitle>{{ restau.adress }}</v-card-subtitle>
                  </div>
                </v-col>
              </v-row>
            </router-link>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Restaurants',
  data(){
    return{
      restau:null,
    }
  },
  mounted(){
    axios
    .get('http://localhost:7000/restaurant')
    .then((response) => {
      console.log(response)
      this.restau = response.data;
      console.log(this.restau)
    }).catch(err =>{
      console.log(err);
    })
  },
  methods: {
    nameForUrl (name) {
      return name.toLowerCase().normalize('NFD')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '-')
    },
    nextPage (page) {
      this.pagination.pageNumber = page
    }
  },
  computed: {
    pageCount () {
      const length = this.restaurants.length
      const size = this.pagination.pageSize
      return Math.ceil(length / size)
    },
    restaurantToDisplay () {
      const start = this.pagination.pageNumber * this.pagination.pageSize - this.pagination.pageSize
      const end = start + this.pagination.pageSize

      const paginatedRestaurants = this.restaurants.slice(start, end)
      const filteredByCity = paginatedRestaurants.filter(restaurant => {
        return restaurant.location.city.toLowerCase().includes(this.search.searchByCity.toLowerCase())
      })
      const filteredByName = filteredByCity.filter(restaurant => {
        return restaurant.name.toLowerCase().includes(this.search.searchByName.toLowerCase())
      })

      return filteredByName
    }
  }
}
</script>

<style scoped>

div{
    color: black;
}
@media (max-width: 1150px) {
  #restaurants-view #search-bars {
    margin: auto;
    width: 80%;
  }
}
#restaurants-view .restaurant-cards {
  max-width: 90%;
}
@media (max-width: 1264px) {
  #restaurants-view .restaurant-cards {
    max-width: 80%;
    margin: auto;
  }
}
#restaurants-view .restaurant-theme, #restaurants-view .restaurant-infos {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#restaurants-view .restaurant-theme, #restaurants-view .restaurant-infos {
  margin-right: 20px;
}
#restaurants-view .categories {
  display: flex;
}
</style>
