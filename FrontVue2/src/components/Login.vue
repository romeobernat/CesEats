<template>
   <div class="home">
    <section >
        <div class="hero-text white--text">
          <h2>
              Connectez vous
          </h2>
        </div>
        <br><br><br>
      <v-content>
      <div class="hero-text container">
       <v-card width="500" class="mx-auto mt-9">
        <v-card-text>
          <v-text-field 
            v-model="username" 
            :rules="usernameRules" 
            label="E-mail" 
            prepend-icon="mdi-email" 
            required/>

          <v-text-field 
          v-model="password" 
          :rules="passwordRules" 
          label="Password" 
          required
          prepend-icon="mdi-lock"
          :append-icon="passwordShow ? 'fas fa-eye-slash' : 'fas fa-eye'"
          @click:append="passwordShow = !passwordShow" 
          :type="passwordShow ? 'text' : 'password'"
          />
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

<script lang="ts">
export default {
    name: "Login",
    data: () => ({
    loginFail: false,
    loading: false,
    valid: true,
    passwordShow: false,
    password: '',
    passwordRules: [
      (v: string) => !!v || 'Password is required',
      (v: string) => (v && v.length >= 5) || 'Password must be more than 5 characters',
    ],
    username: '',
    usernameRules: [
      (v: string) => !!v || 'Username is required',
      //(v: string) => usernameRegex.test(v) || 'Username must be valid',
    ]
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
  background: url("../assets/bkgRegister.jpg");
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