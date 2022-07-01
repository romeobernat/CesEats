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
        <v-form @submit.prevent="onCreatePost" >
          <v-card width="500" class="mx-auto mt-9">
            <v-card-text>
              <v-text-field 
                v-model="mail" 
                label="E-mail" 
                prepend-icon="mdi-email" 
                required/>

              <v-text-field 
              v-model="pwd" 
              label="Password" 
              required
              prepend-icon="mdi-lock"
              />
            </v-card-text>
            <v-divider></v-divider>
              <v-card-actions>
                <v-btn color="success" :to="{ name: 'Register'}">Register</v-btn>
                <v-btn
                  color="info"
                  type="submit"
                  >
                  Ok
                </v-btn>
              </v-card-actions>
          </v-card>
        </v-form>
      </div>
      </v-content>
    </section>
  </div>
</template>

<script lang>
import axios from 'axios';

export default {
  name: "Login",
  data(){
    return{
      mail:'',
      pwd:'',
    }
  },
  methods: {
    onCreatePost(){
        axios
        .post('http://localhost:3001/account/login', {
        mail:this.mail,
        password:this.pwd,
      })
      .then((response) => { 
        localStorage.setItem("JWT", response.data.data)
            setAuthHeader(response.data.data);
      });
    },
  }
}
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