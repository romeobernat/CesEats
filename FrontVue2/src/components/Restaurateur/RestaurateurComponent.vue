<template>
  <div>
      <v-card id="v-card" class="mx-auto">
        <v-card-title>
          <span class="text-h4">Ajouter un nouveau restaurant</span>
        </v-card-title>
        <v-form
            ref="registerForm"
            @submit.prevent="onCreatePost"
            lazy-validation
        >
          <v-container>
            <v-card-title>
              <span class="text-h6">Informations restaurant</span>
            </v-card-title>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                    v-model="Restaurant.Name"
                    :rules="NameRules"
                    label="Nom*"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                    v-model="Restaurant.Adresse"
                    :rules="AdresseRules"
                    label="Adresse*"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                    v-model="Restaurant.PostalCode"
                    label="Postal Code"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                    v-model="Restaurant.Categorie"
                    :rules="CategorieRules"
                    label="Catégorie*"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-file-input
                    v-model="Restaurant.Image"
                    label="Image*"
                ></v-file-input>
              </v-col>
            </v-row>
          </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="#00c668"
            class="mr-4 white--text"
            type="submit"
            >
            Créer
            </v-btn>
        </v-card-actions>
        </v-form>
      </v-card>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RestaurateurComponent',
  data: () => ({
    NameRules: [
      v => !!v || 'Veuillez renseigner un nom'
    ],
    AdresseRules: [
      v => !!v || 'Veuillez renseigner une adresse',
    ],
    PostalCode: [
      v => !!v || 'Veuillez renseigner un code Postal',
    ],
    CategorieRules: [
      v => !!v || 'Veuillez renseigner une catégorie'
    ],
    Restaurant: {
      Name: '',
      Adresse: '',
      PostalCode:'',
      Categorie: '',
      Image: '',
    },
    data(){
        return{
            AddRestaurant:{
                Name: '',
                Adresse: '',
                PostalCode:'',
                Categorie: '',
                Image: '',
            }
        }
    }
  }),
  /*mounted(){
    axios
    .post('http://localhost:7000/restaurant', this.AddRestaurant)
    .then((response) => {
      console.log(response)
      this.AddRestaurant = response.data;
      console.log(this.AddRestaurant)
    }).catch(err =>{
      console.log(err);
    })
  },*/
  methods: {
    createSubmit () {
      if (this.$refs.AddRestaurantForm.validate()) {
        this.$refs.AddRestaurantForm.reset()
      }
    },
    onCreatePost(){
        axios
            .post('http://localhost:7000/restaurant/', {Name: this.Name, Adresse: this.Adresse, PostalCode: this.PostalCode, Categorie: this.Categorie},)
            .then((response) => {
            console.log(response);     
    });
  },
}
}
</script>


<style scoped>

</style>