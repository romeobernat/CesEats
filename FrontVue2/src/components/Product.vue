<template>
  <v-row class="space px-16">
    <v-col
      cols="12"
      xs="3"
      sm="6"
      md="3"
      xl="2"
      v-for="(product, i) in products"
      :key="i"
    >
      <v-card class="mx-auto rounded-xl" max-width="250" min-width="200" flat outlined>
        <div align="center" justify="center">
          <v-img
            min-height="200"
            min-width="200"
            max-height="200"
            max-width="200"
            contain
            v-bind:src="product.img" 
          ></v-img>
        </div>

        <v-card-title class="">{{ product.title }}</v-card-title>
        <v-card-title class="grey--text text-grey-darken-1 caption mt-n6">{{
          product.subtitle
        }}</v-card-title>
        <v-card-title class="mt-n4">{{ product.price }}</v-card-title>

        <v-card-actions class="mx-2 mt-n4">
          <v-btn outlined class="mt-n2 add">
            <v-icon color="#00c668" @click="decrement"> mdi-minus </v-icon>
          </v-btn>

          <strong class="mx-2" v-text="bpm"></strong>
          <v-btn outlined class="mt-n2 add">
            <v-icon color="#00c668" @click="increment"> mdi-plus </v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn class="mx-2 mt-n3" fab dark small color="#00c668">
            <v-icon dark> mdi-shopping </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
      bpm: 0,
    products: [
      { img: require("../assets/PrBurger1.png"), title: "Cheesburger", subtitle: "300gr", price: "$6" },
      { img: require("../assets/PrCroque.png"), title: "Croque Mcdo", subtitle: "75gr", price: "$2" },
      { img: require("../assets/PrFrite.png"), title: "Frites", subtitle: "100gr", price: "$2" },
      { img: require("../assets/PrNugget.png"), title: "Nuggets", subtitle: "10pc", price: "$10" },
      { img: require("../assets/PrPotetoes.png"), title: "Potetoes", subtitle: "100gr", price: "$2.5" },
      { img: require("../assets/PrTacos.png"), title: "Tacos", subtitle: "200gr", price: "$5" }
    ],
  }),
   methods: {
      decrement () {
        this.bpm--
      },
      increment () {
        this.bpm++
      },
     
    },
};
</script>