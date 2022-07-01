<template>
  <div>
      <v-card id="v-card" class="mx-auto">
        <v-card-title>
          <span class="text-h4">modifier un produit</span>
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
                    label="Nom*"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                    v-model="Price"
                    label="price"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                    v-model="Description"
                    label="description"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="1">
                <v-checkbox
                  false-value="0"
                  true-value="1"
                  label="disponible"
                  v-model="Disponibilité">
                </v-checkbox>
              </v-col>
              <v-col cols="12" md="5">
                 <v-text-field
                    v-model="id"
                    :rules="IDRules"
                    label="ID produit*">
                  </v-text-field>
                </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                    v-model="Image"
                    label="Image*"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="#f2ae3c"
            class="mr-4 white--text"
            type="submit"
            >
            Modifier
            </v-btn>
        </v-card-actions>
        </v-form>
      </v-card>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UpdateProductComponent',
  data: () => ({
    IDRules: [
      v => !!v || 'Veuillez renseigner un nom',
    ],
    data(){
        return{
            id:'',
            Name: '',
            Price: '',
            Disponibilité:'',
            Description:null,
            Image: '',
            }
        }
  }),
  methods: {
    onCreatePost(){
        axios
            .put('http://localhost:3003/article/' + this.id, {
                name: this.Name, 
                price: this.Price, 
                available: this.Disponibilité,
                descritpion: this.Description,  
                img: this.Image
                })
            .then((response) => {
            console.log(response);     
    });
  },
}
}
</script>


<style scoped>

</style>