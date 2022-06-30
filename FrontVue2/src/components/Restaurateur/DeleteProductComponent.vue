<template>
  <div>
      <v-card id="v-card" class="mx-auto">
        <v-card-title>
          <span class="text-h4">Supprimer un produit</span>
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
              <v-col cols="12" md="12">
                <v-text-field
                    v-model="id"
                    :rules="IDRules"
                    label="ID Article*"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="#FF0000"
            class="mr-4 white--text"
            type="submit"
            >
            Supprimer
            </v-btn>
        </v-card-actions>
        </v-form>
      </v-card>
    </div>
</template>

<script>
import axios from 'axios'

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
    onCreatePost(){
        axios
            .delete('http://localhost:3003/article/' + this.id)
            .then((response) => {
            console.log(response);     
    });
  },
}
}
</script>


<style scoped>

</style>