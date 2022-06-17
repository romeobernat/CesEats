<template>
   <div class="home">
    <section>
      <div class="hero-text">
          <h2>
              Inscrit toi
          </h2>
      </div>
        <v-content>
            <div class="hero-text container">
          <v-card width="500" class="mx-auto mt-9">
            <v-card-text>
                <v-text-field label="Username" prepend-icon="mdi-account-circle"/>
                <v-text-field label="E-mail" prepend-icon="mdi-email"/>
                <v-text-field label="number" prepend-icon="mdi-phone"/>
                <v-text-field 
                label="Password" 
                :type="showPassword ? 'text' : 'password'"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"/>
            </v-card-text>

              <v-card-actions>
               <v-btn color="success">OK</v-btn>
            </v-card-actions>

            <v-card-action>
              <router-link class="link" :to="{ name: 'Login'}">J'ai déja un compte</router-link>
            </v-card-action>
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
.hero-text{
  text-align: center;
}
.hero {
  background: url("../assets/login.jpg");
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
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: rgb(6, 193, 103);
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