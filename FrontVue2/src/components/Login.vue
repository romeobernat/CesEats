<template>
   <div class="home">
    <section >
        <div class="hero-text">
          <h2>
              Connectez vous
          </h2>
        </div>
        <br><br><br>
      <v-content>
      <div class="hero-text container">
       <v-card width="500" class="mx-auto mt-9">
        <v-card-text>
          <v-text-field label="Username" prepend-icon="mdi-account-circle"/>
          <v-text-field 
          label="Password" 
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"/>
        </v-card-text>
        <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="success" :to="{ name: 'Register'}">Register</v-btn>
            <v-btn color="info">OK</v-btn>
          </v-card-actions>
      </v-card>
      </div>
      </v-content>
    </section>
  </div>
</template>

<script>
export default {
    name: "Login",
    data: () => ({
    
  }),
};
</script>

<style lang="scss" scoped>
.router-link{
  text-decoration: none;
}
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
  }
  .hero-text {
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #00c668;
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
  }
}
</style>