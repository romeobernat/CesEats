<template>
   <div class="home">
    <br><br><br><br><br>
    <section>
      <div class="hero-text">
          <h2>
              Inscrit toi
          </h2>
          <br><br><br>
      </div>
        <v-content>
            <div class="hero-text container">
          <v-card width="500" class="mx-auto mt-9">
            <v-card-text>
                <v-text-field label="Nom" prepend-icon="mdi-account-circle"/>
                <v-text-field label="Prénom" prepend-icon="mdi-account-circle"/>
                <v-text-field label="Numéro de téléphone" prepend-icon="mdi-phone"/>
                <v-text-field label="E-mail" prepend-icon="mdi-email"/>
                <v-text-field 
                label="Mot de passe" 
                :type="showPassword ? 'text' : 'password'"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"/>
                <v-text-field 
                label="Confirmer le mot de passe" 
                :type="showPassword ? 'text' : 'password'"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"/>
                <v-text-field label="Adresse" prepend-icon="mdi-map-marker"/>
                <v-text-field label="Code de parrainage" prepend-icon="mdi-account-multiple"/>
            </v-card-text>
              <v-card-actions>
               <v-btn color="success">Valider</v-btn>
            </v-card-actions>
            <v-card-action>
              <router-link class="link" :to="{ name: 'Login'}">J'ai déja un compte</router-link>
            </v-card-action>
            <br><br>
          </v-card>
            </div>
        </v-content>
    </section>
  </div>
</template>

<script>
export default {
    name: "Register",
    data: () => ({
    
  }),
};
</script>

<style lang="scss" scoped>
  .hero-text {
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: rgb(6, 193, 103);
    h2 {
      font-size: 50px;
      @media (min-width: 550px) {
        font-size: 80px;
      }
    }
  }
</style>