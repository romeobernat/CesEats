<template>
  <div id="restaurants-view" class="mt-3 mb-8">
    <v-container class="pr-0 pl-0">
      <v-row id="search-bars">
        <v-col sm="12" md="12" lg="3">
          <h2>Offres du moment</h2>
        </v-col>
        <v-col md="6" lg="4" >
          <v-text-field hide-details v-model="search.searchByCity" prepend-icon="mdi-magnify" placeholder="Ville..." single-line></v-text-field>
        </v-col>
        <v-col md="6" lg="4">
          <v-text-field hide-details v-model="search.searchByName" prepend-icon="mdi-magnify" placeholder="Restaurant..." single-line></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col md="12" lg="3">
          <v-card class="ma-auto" max-width="80%">
            <v-list>
              <v-list-item>Catégories :</v-list-item>
              <v-list-item-group multiple>
                <template v-for="(category, i) in categories">
                  <v-divider v-if="!category" :key="`divider-${i}`"></v-divider>
                  <v-list-item v-else :key="`item-${i}`" :value="category" active-class="text--accent-4">
                    <template v-slot:default="{ active }">
                      <v-list-item-content>
                        <v-list-item-title v-text="category"></v-list-item-title>
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
          <v-card id="Card" v-for="restaurant in restaurantToDisplay" :key="restaurant.name"
            elevation="2" outlined class="restaurant-cards mb-5">
            <router-link :to="/restaurants/ + restaurant.id + '/' + nameForUrl(restaurant.name)" class="text-decoration-none">
              <v-row>
                <v-col sm="3">
                  <v-img :src="restaurant.image" :alt="restaurant.name" height="100%"/>
                </v-col>
                <v-col sm="9">
                  <div class="restaurant-theme">
                    <v-card-title >{{ restaurant.name }}</v-card-title>
                    <div class="categories">
                      <v-card-text v-for="category in restaurant.categories" :key="category">
                        {{ category }}
                      </v-card-text>
                    </div>
                  </div>
                    <v-card-subtitle>{{ restaurant.description }}</v-card-subtitle>
                  <div class="restaurant-infos">
                    <v-card-subtitle>{{ restaurant.location.city }} ({{ restaurant.location.zipCode }}), {{ restaurant.location.address }}</v-card-subtitle>
                    <div class="opening-hours">
                      <v-card-text>{{ restaurant.openingHours }}</v-card-text>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </router-link>
          </v-card>
        </v-col>
      </v-row>
      <div class="text-center" v-if="pageCount > 1">
        <v-pagination v-model="pagination.pageNumber" :length="pageCount" @input="nextPage"/>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Restaurants',
  data: () => ({
    search: {
      searchByCity: '',
      searchByName: ''
    },
    pagination: {
      pageNumber: 1,
      pageSize: 5
    },
    categories: [
      '',
      'Burger',
      'Chinois',
      'Japonais',
      'Pizza'
    ],
    restaurants: [
      {
        id: 0,
        name: 'Mc Donalds',
        description: 'McDonalds est la plus grande chaîne de restauration rapide au monde, fondée par Ray Kroc en 1952.',
        image: require("../assets/Mcdo.png"),
        categories: ['Fast Foods'],
        restaurantOwnersId: [13],
        openingHours: '9h - 12h / 14h - 19h',
        location: {
          city: 'Aix-en-Provence',
          zipCode: '13100',
          address: '42 rue du McDo',
        }
      },
      {
        id: 1,
        name: 'Burger King',
        description: 'Burger King, parfois abrégé en son acronyme BK, est une grande chaîne de restauration rapide américaine qui compte plus de 13 000 lieux de vente dans 100 pays, dont les deux tiers aux États-Unis, et beaucoup au Canada.',
        image: require("../assets/BK.png"),        
        categories: ['Fast Food'],
        restaurantOwnersId: [12],
        openingHours: '9h - 12h / 14h - 19h',
        location: {
          city: 'Marseille',
          zipCode: '13100',
          address: '43 rue du BK',
        }
      }
    ]
  }),
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
