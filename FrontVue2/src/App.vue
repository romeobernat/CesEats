<template>
  <v-app>
    <v-main>
      <Sidebar/>
    </v-main>
    <router-view />
    <Footer/>
  </v-app>
</template>

<script>
import Sidebar from "../src/components/Sidebar.vue";
import Footer from "../src/components/Footer.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    Footer,
  },
};
</script>
