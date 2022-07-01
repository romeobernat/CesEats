<template>
  <div>
      <v-card id="v-card" class="mx-auto">
        <v-card-title>
          <span class="text-h4">Supprimer un compte</span>
        </v-card-title>

        <v-btn
            color="#FF0000"
            class="mr-4 white--text"
            @click="DeteteUser()"
            >
            Supprimer
        </v-btn>
      </v-card>
    </div>
</template>

<script>
import axios from 'axios'
import jwtDecode from 'jwt-decode';

export default {
  name: 'DeleteProductComponent',
  data: () => ({
    IDRules: [
      v => !!v || 'Veuillez renseigner un ID',
    ],
    data(){
        return{
            id:'',
            }
        }
  }),
  methods: {
    DeteteUser(){
      axios
        .delete('http://localhost:3002/account/' + jwtDecode(localStorage.getItem("JWT"), { playload: true }).id_person)
          .then((response) => {
            console.log(response),
            localStorage.removeItem("JWT"),
            location.reload();
            })
    },
}
}
</script>


<style scoped>

</style>