<template>
  <div id="products-component">
    <v-container>
      <h3>{{ category }}</h3>
      <v-row >
        <v-col>
          <v-sheet class="mx-auto" width="100%">
            <v-slide-group v-model="model" class="pa-4" multiple show-arrows>
              <v-slide-item v-for="(product, idx) in products.filter(product => product.categories.includes(category))" :key="idx" v-slot="{ active, toggle }">
                <v-card outlined class="mx-auto rounded-xl" max-width="250" min-width="200">
                  <v-img :src="product.image" height="200px"/>
                  <v-card-title>{{ product.name }}</v-card-title>
                  <v-card-subtitle>{{ product.price }} €</v-card-subtitle>
                  <v-card-actions>
                    <v-btn text color="#00c668" @click="toggle">En savoir plus</v-btn>
                      <v-spacer></v-spacer>
                    <v-btn icon class="mr-1" fab dark small color="#00c668">
                      <v-icon> mdi-shopping </v-icon>
                    </v-btn>
                  </v-card-actions>
                  <v-expand-transition>
                    <v-card v-if="active ? reveal=true : reveal=false" class="transition-fast-in-fast-out v-card--reveal mx-auto rounded-xl" style="height: 100%;">
                      <v-card-title>{{ product.name }}</v-card-title>
                      <v-card-subtitle>{{ product.description}}</v-card-subtitle>
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
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'ProductsComponent',
  props: {
    products: Array,
    category: String
  },
  data: () => ({
    model: [],
    reveal: false
  })
}
</script>

<style scoped>
#products-component .v-card--reveal {
  position: absolute;
  bottom: 0;
  width: 100%;
  opacity: 1 !important;
}
</style>
