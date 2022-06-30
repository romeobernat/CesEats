<template>
  <div id="products-component">
    <v-container>
      <v-row >
        <v-col md ="12" lg="12">
          <v-sheet class="mx-auto" width="100%">
            <v-slide-group class="pa-4" multiple show-arrows>
              <v-slide-item :key="index" v-for="(produit, index) in produit">
                <v-card outlined class="mx-auto rounded-xl" max-width="250" min-width="200">
                  <v-img :src="produit.img" height="200px"/>
                  <v-card-title>{{ produit.name }}</v-card-title>
                  <v-card-subtitle>{{ produit.descritpion}}</v-card-subtitle>
                  <v-card-subtitle>{{ produit.price }} €</v-card-subtitle>
                  <v-card-subtitle> disponibilité :{{ produit.available }}</v-card-subtitle>
                      <v-spacer></v-spacer>
                    <v-btn icon class="mr-1" fab dark small color="#00c668">
                      <v-icon> mdi-shopping </v-icon>
                    </v-btn>
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
import axios from 'axios'

export default {
  name: 'ProductsComponent',
  props: {
    products: Array,
    category: String
  },
  data(){
    return{
      produit:null,
    }
  },
  mounted(){
    axios
    .get('http://localhost:3003/article')
    .then((response) => {
      console.log(response)
      this.produit = response.data.data;
      console.log(this.produit)
    }).catch(err =>{
      console.log(err);
    })
}
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
