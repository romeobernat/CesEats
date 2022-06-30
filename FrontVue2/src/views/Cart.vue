<template>
  <v-contain>
    <br><br><br>
    <section class="hero">
        <div class="dishes">
            <v-row>
                <v-col>
                    <v-card class="pa-2" outlined tile>
                      <div>
                          <h1>panier plein</h1>
                      </div>
                      <div>
                          <p>Votre Panier est vide</p>
                      </div>
                    </v-card>
                    <v-card class="pa-2" outlined tile>
                    <DeliveryInfos :deliveryData="{ adresse: 'test', number: 'testcommand',
                    code: 'pricecommand', complement: 'adressecommande', }" />
                    </v-card>
                </v-col>
            </v-row>
            <v-card-actions  class="justify-center">
                <v-btn outlined rounded text @click="pay"> Payer </v-btn>
            </v-card-actions>
        </div>
    </section>
    </v-contain>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero {
  //background: url("../assets/BN.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size:cover;
  position: relative;
  height: 100vh;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .hero-text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: rgb(46, 155, 155);
    h4 {
      text-transform: uppercase;
      font-size: 22px;
      padding-bottom: 4px;
    }
    h2 {
      font-size: 50px;
      @media (min-width: 550px) {
        font-size: 80px;
      }
    }
    hr:nth-child(2) {
      max-width: 365px;
      margin-bottom: 16px;
    }
    hr:nth-child(4) {
      height: 6px;
      background-color: #fff;
      border: none;
      max-width: 85px;
      margin-top: 16px;
    }
  }
}
</style>