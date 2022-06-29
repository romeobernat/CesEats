<template>
<header :class="{'scrolled-nav': scrolledNav}">
  <nav id="navbar-component">
    <div class="branding">
      <v-toolbar-title class="ml-4">
        <a href="/">
      <span class="green--text">CES</span><strong>EAT</strong>
        </a>
        <div :key="index" v-for="(utilisateur, index) in utilisateur">
        <h1>{{ utilisateur.firstName }}</h1>
      </div>
    </v-toolbar-title>
    </div>
    <ul v-show="!mobile" class="sidebar">
      <li><router-link class="link" :to="{ name: 'HomeView'}">Restaurants</router-link></li>
      <li><router-link class="link" :to="{ name: 'Register'}">Authentification</router-link></li>
      <li><router-link class="link" :to="{ name: 'Cart'}">Panier</router-link></li>
      <li><router-link class="link" :to="{ name: 'Restaurateur'}">Ajouter un restaurant</router-link></li>
    </ul>
    <div class="icon">
      <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{'icon-active': mobileNav}"></i>
    </div>
    <transition name="mobile-nav">
      <ul v-show="mobileNav" class="dropdown-nav">
        <li><router-link class="link" :to="{ name: 'HomeView'}">Home</router-link></li>
        <li><router-link class="link" :to="{ name: 'Login'}">Authentification</router-link></li>
        <li><router-link class="link" :to="{ name: 'Cart'}">Panier</router-link></li>
        <li><router-link class="link" :to="{ name: 'Restaurateur'}">Ajouter un restaurant</router-link></li>
      </ul>
    </transition>
  </nav>
</header>
</template>

<script>
import axios from 'axios'

export default {
  name: "sidebar",
  data() {
   return {
    scrolledNav:null,
    mobile:null,
    mobileNav:null,
    windowWidth:null,
    utilisateur:null
   };
  },
   mounted(){
    axios
    .get('http://localhost:3002/account/')
    .then((response) => {
      console.log(response)
      this.utilisateur = response.data.data;
      console.log(this.utilisateur)
    }).catch(err =>{
      console.log(err);
    })
    window.addEventListener("scroll", this.updateScroll);
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },

  methods: {
    toggleMobileNav() {
      this.mobileNav= !this.mobileNav;
    },

    updateScroll() {
      const scrollPosition = window.scrollY;
      if(scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      else {
        this.scrolledNav = false;
        return;
      }
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      else {
        this.mobile = false;
        this.mobileNav = false;
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#navbar-component a {
  text-decoration: none;
  box-shadow: none;
  color: white;
}
header {
  background-color: rgb(9, 37, 37, 0.95);
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: white;

  nav {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;
    
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

      img{
        width: 50px;
        transition: 0.5s ease all;
      }
    }

    .sidebar{
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
    }

    .icon{
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;

      i{
        cursor: pointer;
        font-size: 24px;
        transition: 0.8s ease all;
      }
    }

    .icon-active{
      transform: rotate(180deg);
    }

    .dropdown-nav{
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 250px;
      height: 100%;
      background-color: rgb(9, 37, 37);
      top: 0;
      left: 0;

      li{
        margin-left: 0;
        .link{
          color: rgb(0, 0, 0);
        }
      }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: 1s ease all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transform: translateX(-250px);
    }

    .mobile-nav-enter-to {
      transform: translateX(0);
    }
  }
}

.scrolled-nav {
  background-color: rgb(9, 37, 37);

  nav{
    padding: 8px 0;

    .branding {
      img {
        width: 40px;
      }
    }
  }
}
</style>