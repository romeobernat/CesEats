<template>
  <div id="menus-component">
    <v-container>
      <h3>Menus</h3>
      <v-rows>
        <v-col>
          <v-sheet class="mx-auto" width="100%">
            <v-slide-group v-model="model" class="pa-4" multiple show-arrows>
              <v-slide-item v-for="(menu, idx) in menus" :key="idx" v-slot="{ active, toggle }">
                <v-card flat outlined class="mx-auto rounded-xl" max-width="250" min-width="200">
                  <v-img :src="menu.image" height="200px"/>
                  <v-card-title>{{ menu.name }}</v-card-title>
                  <v-card-subtitle>{{ menu.price }} €</v-card-subtitle>
                  <v-card-actions>
                    <v-btn text color="#00c668" @click="toggle">En savoir plus</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn icon class="mr-1" fab dark small color="#00c668">
                      <v-icon>mdi-shopping</v-icon>
                    </v-btn>
                  </v-card-actions>
                  <v-expand-transition>
                    <v-card v-if="active ? reveal=true : reveal=false" class="transition-fast-in-fast-out v-card--reveal mx-auto rounded-xl" style="height: 100%;">
                      <v-card-title>{{ menu.name }}</v-card-title>
                      <v-card-subtitle>
                        {{ menu.description}}
                        <br/><br/>
                        Produits disponibles:
                        <ul v-for="product in productsFromMenu" :key="product">
                          <li>{{ product.name }}</li>
                        </ul>
                      </v-card-subtitle>
                      <v-card-actions class="pt-0">
                        <v-btn text color="#00c668" @click="toggle">Fermer</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon class="mr-1" fab dark small color="#00c668">
                          <v-icon> mdi-shopping </v-icon>
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-expand-transition>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </v-col>
      </v-rows>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'MenusComponent',
  props: {
    menus: Array
  },
  data: () => ({
    model: [],
    reveal: false
  }),
  methods: {
    addToCart (item) {
      this.$store.commit('addToCart', item)
    },
    removeFromCart (item) {
      this.$store.commit('removeFromCart', item)
    },
    fetchQuantity (item) {
      const mp = this.cart.cart.find(mp => mp.id === item.id && mp.name === item.name)
      if (mp) {
        return mp.quantity
      }
      return 0
    }
  },
  computed: {
    productsFromMenu () {
      return [
        { name: '1' },
        { name: '2' },
        { name: '3' }
      ]
    }
  }
}
</script>

<style scoped>
#menus-component .v-card--reveal {
  position: absolute;
  bottom: 0;
  width: 100%;
  opacity: 1 !important;
}
</style>
