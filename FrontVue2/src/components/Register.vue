<template>
  <div>
      <v-card id="v-card" class="mx-auto">
        <v-card-title>
          <span class="text-h4">Inscription</span>
        </v-card-title>
        <v-form
            v-model="validate"
            ref="registerForm"
            @submit.prevent="registerSubmit"
            lazy-validation
        >
          <v-container>
            <v-row>
             <v-col cols="4" md="2">
              <v-select
                v-model="user.role"
                :items="roles"
                :rules="roleRules"
                label="Rôle*"
                required
              ></v-select>
            </v-col>
            </v-row>
            <v-card-title>
              <span class="text-h6">Données personnelles</span>
            </v-card-title>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                    v-model="user.firstName"
                    :rules="firstNameRules"
                    label="Prénom*"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                    v-model="user.lastName"
                    :rules="lastNameRules"
                    label="Nom*"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                    v-model="user.mail"
                    :rules="emailRules"
                    label="E-mail*"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                    v-model="user.phone"
                    :rules="phoneRules"
                    label="Téléphone*"
                ></v-text-field>
              </v-col>
              <v-col cols="6" md="4">
                <v-text-field
                    v-model="user.pwd"
                    :rules="passwordRules"
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
                <v-text-field
                    v-model="user.city"
                    label="Ville"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                    v-model="user.address"
                    label="Adresse"
                ></v-text-field>
              </v-col>
              <v-col cols="4" md="2">
                <v-text-field
                    v-model="user.zipCode"
                    label="Code postal"
                    :rules="zipRules"
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
            @click="validate"
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
export default {
  name: 'Register',
  data: () => ({
    firstNameRules: [
      v => !!v || 'Veuillez renseigner votre prénom'
    ],
    lastNameRules: [
      v => !!v || 'Veuillez renseigner votre nom'
    ],
    emailRules: [
      v => !!v || 'Veuillez renseigner votre E-mail',
      v => /.+@.+/.test(v) || 'le format est incorrect'
    ],
    passwordRules: [
      v => !!v || 'Veuillez renseigner votre mot de passe',
      v => /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/.test(v) || 'Le mot de passe doit contenir au moins 8 caractères dont minimum 1 minuscule, 1 majuscule et 1 chiffre'
    ],
    roleRules: [
      v => !!v || 'Veuillez sélectionner votre rôle'
    ],
    phoneRules: [
      v => !!v || 'Veuillez renseigner votre numéro de téléphone',
      v => /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/.test(v) || 'Format incorrect (+33xx ou 0xx)'
    ],
    zipRules: [
      v => /[0-9].*$/.test(v) || 'Format incorrect'
    ],
    user: {
      mail: '',
      pwd: '',
      role: null,
      city: '',
      zipCode: '',
      address: '',
      firstName: '',
      lastName: '',
      phone: ''
    },
    show1: false,
    roles: [
      'Client',
      'Restaurateur',
      'Livreur'
    ]
  }),
  methods: {
    registerSubmit () {
      if (this.$refs.registerForm.validate()) {
        this.$refs.registerForm.reset()
      }
    }
  }
}
</script>

<style scoped>
#v-card {
    margin-top: 20px;
}

</style>
