<template>
  <div id="products-view" class="mt-3 mb-8">
    <br><br><br>
    <v-container class="pr-0 pl-0">
      <h2>Notre sélection chez {{ restaurant.name }}</h2>
      <v-row class="mt-5">
        <MenusComponent :menus="menus"/>
      </v-row>
      <v-row class="mt-5" v-for="category in getAllCategories" :key="category">
        <ProductsComponent :products="products" :category="category"/>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import MenusComponent from '../components/MenusComponent.vue'
import ProductsComponent from '../components/ProductsComponent.vue'

export default {
  name: 'Products',
  components: {
    MenusComponent,
    ProductsComponent
  },
  data: () => ({
    restaurant: {},
    restaurants: [
      {
        id: 0,
        name: 'McDonalds',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices fringilla justo, ut pellentesque diam pulvinar id. Sed pretium diam id elit mattis, sed vehicula dolor tempor. Sed sagittis arcu id orci commodo feugiat. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec sit amet euismod mi. Etiam condimentum magna sed nisi interdum, id fringilla nibh blandit. Nulla fringilla gravida mi at fermentum.',
        image: require("../assets/Mcdo.png"),        
        categories: ['Japonais', 'Healthy'],
        restaurantOwnersId: [42],
        openingHours: '9h - 12h / 14h - 19h',
        location: {
          city: 'Guérande',
          zipCode: '42024',
          address: '42 rue du Lorem',
          latitude: 42,
          longitude: 24
        }
      },
      {
        id: 1,
        name: 'Burger King',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices fringilla justo, ut pellentesque diam pulvinar id. Sed pretium diam id elit mattis, sed vehicula dolor tempor. Sed sagittis arcu id orci commodo feugiat. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec sit amet euismod mi. Etiam condimentum magna sed nisi interdum, id fringilla nibh blandit. Nulla fringilla gravida mi at fermentum.',
        image: require("../assets/BK.png"), 
        restaurantOwnersId: [42],
        openingHours: '9h - 12h / 14h - 19h',
        location: {
          city: 'Saint-Nazaire',
          zipCode: '42024',
          address: '42 rue du Lorem',
          latitude: 42,
          longitude: 24
        }
      }
    ],
    menus: [
      {
        id: 0,
        name: 'Maxi Best Of',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        products: [0, 1, 2],
        restaurantId: 0,
        price: 8.50,
        image: require("../assets/MaxiBestof.png")
      }
    ],
    products: [
      {
        id: 0,
        name: 'Big Mac',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        restaurantId: 0,
        price: 7.50,
        image: require("../assets/BigMac.png"),
        categories: [
          'Burgers'
        ],
        isOutOfStock: false
      },
      {
        id: 1,
        name: 'Frite',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        restaurantId: 0,
        price: 2.90,
        image: require("../assets/frites.png"),
        categories: [
          'Petites faim'
        ],
        isOutOfStock: false
      },
      {
        id: 2,
        name: 'Coca Cola',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        restaurantId: 0,
        price: 2.80,
        image: require("../assets/Coca.png"),
        categories: [
          'Boissons'
        ],
        isOutOfStock: false
      }
    ]
  }),
  computed: {
    getAllCategories () {
      const categories = []
      for (let i = 0; i < this.products.length; i++) {
        const productCategories = this.products[i].categories
        for (let j = 0; j < productCategories.length; j++) {
          if (!categories.includes(productCategories[j])) {
            categories.push(productCategories[j])
          }
        }
      }
      return categories
    }
  },
  mounted () {
    this.restaurant = this.restaurants.find(r => r.id === parseInt(this.$route.params.id))
  }
}
</script>

<style scoped>

</style>
