<template>
  <div>
      <v-card id="v-card" class="mx-auto">
        <v-card-title>
          <span class="text-h4">Modifier un restaurant</span>
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
                    v-model="Name"
                    :rules="NameRules"
                    label="Nom*"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                    v-model="Adresse"
                    :rules="AdresseRules"
                    label="Adresse*"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                    v-model="PostalCode"
                    :rules="PostalCodeRules"
                    label="Postal Code"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                    v-model="Image"
                    label="Image*"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                 <v-text-field
                    v-model="id"
                    :rules="IDRules"
                    label="ID restaurant*">
                  </v-text-field>
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
  name: 'UpdateRestaurantComponent',
  data: () => ({
    NameRules: [
      v => !!v || 'Veuillez renseigner un nom',
    ],
    AdresseRules: [
      v => !!v || 'Veuillez renseigner une adresse',
    ],
    PostalCodeRules: [
      v => /[0-9].*$/.test(v) || 'Format incorrect',
    ],
    data(){
        return{
            id:'',
            Name: '',
            Adresse: '',
            PostalCode:null,
            Image: '',
            }
        }
  }),
  methods: {
    onCreatePost(){
        axios
            .put('http://localhost:3003/restaurant/' + this.id, {name: this.Name, address: this.Adresse, postal_code: this.PostalCode, img: this.Image},)
            .then((response) => {
            console.log(response);     
    });
  },
}
}
</script>


<style scoped>

</style>