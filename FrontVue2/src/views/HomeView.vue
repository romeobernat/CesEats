<template>
  <v-app>
    <br><br><br>
    <v-container fluid>
        <v-col cols="12">
          <v-card class="mx-auto rounded-xl" flat>
              <v-img src="../assets/Sushi.jpg" height="100%" max-width="100%" contain>
            <br><br><br>
              <v-card-title class="top ml-10">
                <h2 class="title1 white--text">Order your</h2>
              </v-card-title>
              <v-card-title class="ml-10 mt-n8">
                <h2 class="title2 white--text">Food</h2>
              </v-card-title>
              <v-card-text class="ml-10">
                <h3>#Free Delivery</h3>
              </v-card-text>
              
              <v-card-text class="ml-10">
                <v-row>
                  <v-col cols="4">
                    <v-text-field
                      label="Search your food"
                      class="d-none d-sm-none d-md-flex"
                      filled
                      prepend-inner-icon="mdi-magnify"
                      solo
                      flat
                      background-color=""
                      rounded
                      outlined
                      success
                    ></v-text-field>
                  </v-col>
                  <v-col  class="marginLeft">
                    <v-btn
                      color="#00c668"
                      rounded
                      dark
                      x-large
                      class="py-7 d-none d-sm-none d-md-flex"
                    >
                      search
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-img>
          </v-card>

          <v-toolbar flat class="mt-5">            
            <v-spacer></v-spacer>
            <v-btn rounded color="#00c668" dark class="px-8">See All</v-btn>
          </v-toolbar>
          <Restaurants/>
        </v-col>
    </v-container>
  </v-app>
</template>

<script>
import Restaurants from "../components/Restaurants.vue";

export default {
  components:{
    Restaurants,
  }
};
</script>

<style lang="scss" scoped>
h3{
  color: #00c668;
}
.marginLeft {
  margin-left: -90px;
}
.mtop {
  margin-top: 100px;
}
.mbottom {
  margin-bottom: 100px;
}
.v-card.borderme {
  border: 2px solid #00c668 !important;
}
.v-card.borderout {
  border: 1px solid #00c668 !important;
}
.v-btn:not(.v-btn--round).v-size--default.add {
  min-width: 0px !important;
}
.theme--light.v-sheet--outlined.mobile {
  border: 2px solid black !important;
}
@media only screen and (max-width: 600px) {
  h2.title1 {
    font-size: 15px;
  }
  h2.title2 {
    font-size: 15px;
  }
  .top {
    margin-top: 20px;
  }
}
@media only screen and (min-width: 600px) {
  .top {
    margin-top: 70px;
  }
}
@media only screen and (min-width: 768px) {
  .top {
    margin-top: 120px;
  }
}
</style>