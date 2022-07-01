<template>
  <div>
      <v-card id="v-card" class="mx-auto">
        <v-card-title>
          <span class="text-h4">Ajouter un nouveau produit</span>
        </v-card-title>
        <v-form
            ref="registerForm"
            @submit.prevent="onCreatePost"
            lazy-validation
        >
          <v-container>
            <v-card-title>
              <span class="text-h6">Informations produit</span>
            </v-card-title>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                    v-model="Name"
                    :rules="NameRules"
                    label="Nom*"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                    v-model="Price"
                    :rules="PriceRules"
                    label="price"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                    v-model="Description"
                    :rules="DescriptionRules"
                    label="description"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-checkbox
                  false-value="0"
                  true-value="1"
                  label="disponible"
                  v-model="Disponibilité">
                </v-checkbox>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                    v-model="Image"
                    label="Image*"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="3">
                <v-text-field
                    v-model="restaurant"
                    label="restaurant*"
                ></v-text-field>
              </v-col>

              <!--select v-model="selected">
                <option v-for="Restaurant in Restaurants" value="Restaurant._id">
                  {{ option.text }}
                </option>
              </select>
              <span>Sélectionné : {{ selected }}</span-->

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
  name: 'AddProductComponent',
  data: () => ({
    NameRules: [
      v => !!v || 'Veuillez renseigner un nom',
    ],
    PriceRules: [
      v => !!v || 'Veuillez renseigner un prix',
    ],
    DescriptionRules: [
      v => !!v || 'Veuillez renseigner une description',
    ],
    data(){
        return{
            Name: '',
            Description: '',
            Price:null,
            Image: '',
            Disponibilité:false,
            Restaurants:null,
            }
        }
  }),

mounted(){
    axios
    .get('http://localhost:3003/restaurant/')
    .then((response) => {
      console.log(response)
      this.Restaurants = response.data.data;
      console.log(this.Restaurants)
    }).catch(err =>{
      console.log(err);
    })
  },

  methods: {
    onCreatePost(){
        axios
            .post('http://localhost:3003/articleForRestaurantId/'+this.restaurant, {name: this.Name, descritpion: this.Description, price: this.Price, img: this.Image, available: this.Disponibilité},)
            .then((response) => {
            console.log(response);     
    });
  },
}
}
</script>


<style scoped>

</style>