<template>
  <div>
      <v-card id="v-card">
        <v-card-title>
          <span class="text-h4">Inscription</span>
        </v-card-title>
        <v-form
            ref="registerForm"
            @submit.prevent="onCreatePost"
            lazy-validation
        >
          <v-container>
            <v-row>
             <v-col cols="4" md="2">
              <v-select
                v-model="role"
                label="Rôle*"
              ></v-select>
            </v-col>
            </v-row>
            <v-card-title>
              <span class="text-h6">Données personnelles</span>
            </v-card-title>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                    v-model="firstName"
                    label="Prénom*"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                    v-model="lastName"
                    label="Nom*"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                    v-model="mail"
                    label="E-mail*"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                    v-model="phone"
                    label="Téléphone*"
                ></v-text-field>
              </v-col>
              <v-col cols="6" md="4">
                <v-text-field
                    v-model="pwd"
                    label="Mot de passe*"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    @click:append="show1 = !show1"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-card-title>
              <span class="text-h6">Informations de livraison par défaut</span>
            </v-card-title>
            <v-row>
              <v-col cols="12" md="4">
              </v-col>
              <v-col cols="12" md="9">
                <v-text-field
                    v-model="address"
                    label="Adresse"
                ></v-text-field>
              </v-col>
              <v-col cols="4" md="3">
                <v-text-field
                    v-model="zipCode"
                    label="Code postal"
                ></v-text-field>
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
            Enregistrer
            </v-btn>
            <router-link class="link" :to="{ name: 'Login'}">J'ai déja un compte</router-link>
        </v-card-actions>
        </v-form>
      </v-card>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Register',
    data(){
      return{
          mail: '',
          pwd: '',
          role: 1,
          zipCode:13800,
          address: '',
          firstName: '',
          lastName: '',
          BirthDay: "1962-04-23",
          phone: 9
      }
  },
   methods: {
    onCreatePost(){
        axios
            .post('http://localhost:3002/account', {
              mail:this.mail, 
              password:this.pwd,
              postal_code_fk:this.zipCode,
              address:this.address,
              firstName:this.firstName,
              lastname:this.lastName,
              birth_date:this.BirthDay,
              phone_number:this.phone,
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
