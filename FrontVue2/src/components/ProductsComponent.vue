<template>
    <v-container class="pr-0 pl-0">
      <v-row >
        <v-col md ="4" lg="2" :key="index" v-for="(produit, index) in produit">
              <v-card outlined class="rounded-xl" max-width="250" min-height="450" max-height="450">
                <v-img :src="produit.img" height="200px"/>
                <v-card-title>{{ produit.name }}</v-card-title>
                <v-card-subtitle>{{ produit.descritpion}}</v-card-subtitle>
                <v-card-subtitle>{{ produit.price }} €</v-card-subtitle>
                <v-card-subtitle> disponibilité :{{ produit.available }} 
                  <v-btn icon class="mr-1" fab dark small color="#00c668">
                    <v-icon> mdi-shopping </v-icon>
                  </v-btn></v-card-subtitle>
              </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ProductsComponent',
  data(){
    return{
      produit:null,
    }
  },
  mounted(){
    axios
    .get('http://localhost:3003/articleFromRestaurant/'+location.pathname.split('/')[2])
    .then((response) => {
      console.log(response.data.data);
      this.produit = response.data.data;
      console.log(this.produit)
    }).catch(err =>{
      console.log(err);
    })
}
}
</script>

<style scoped>

</style>
