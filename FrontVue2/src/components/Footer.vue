<template>
    <v-card id="footer-component" class="text-center" color="#092525">
      <v-container>
        <v-row>
          <v-col id="logo" sm="12" md="6">
            <a href="/" class="d-flex align-center" title="Page d'accueil">
               <div class="branding">
                  <v-toolbar-title class="ml-4">
                    <span class="green--text">CES</span><strong class="white--text">EAT</strong>
                  </v-toolbar-title>
                </div>
            </a>
          </v-col>
          <ul v-show="!mobile" class="sidebar">
            <li><router-link class="link" :to="{ name: 'aide'}">Obtenir de l'aide</router-link></li>
            <li><router-link class="link" :to="{ name: 'client'}">Comment ca marche ?</router-link></li>
            <li><router-link class="link" :to="{ name: 'livreur'}">Devenez coursier-partenaire</router-link></li> 
            <li><v-checkbox v-model="$vuetify.theme.dark"  on-icon="mdi-theme-light-dark" off-icon="mdi-theme-light-dark"></v-checkbox></li>
         </ul>
        </v-row>
      </v-container>

      <v-divider></v-divider>

      <v-card-text class="white--text pb-0">
        <strong>CESI Eats</strong> - {{ new Date().getFullYear() }}
      </v-card-text>
      <v-card-text class="pt-0">
        <v-btn icon
               v-for="icon in icons"
               :key="icon"
               class="mx-4 white--text"
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
</template>

<script>
export default {
  name: 'FooterComponent',
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram'
    ]
  })
}
</script>

<style lang="scss" scoped>
#footer-component div {
  width: 100%;
  border-radius: 0;
  background-color: rgb(9, 37, 37, 0.95);
  position: relative;
}
#footer-component a {
  text-decoration: none;
}
#logo {
  display: flex;
}
#logo h2 {
  color: black;
}
#links {
  display: block;
}
#links a {
  box-shadow: none;
  display: flex;
}
.sidebar{
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
}
ul,
    .link{
      font-weight: 500;
      color: white;
      list-style: none;
      text-decoration: none;
    }

    li{
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }
    .link{
      font-size: 14px;
      transition: 0.5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;

      &:hover{
        color: #00c668;
        border-color: #00c668;
      }
    }
    .branding{
      display: flex;
      align-items: center;
    }
</style>