<template>
  <div class="mt-3 mb-8">
    <v-container class="pr-0 pl-0">
      <h2>Produit</h2>
      <!--v-row class="mt-5">
        <MenusComponent :menus="menus"/>
      </v-row-->
      <v-row class="mt-5">
        <ProductsComponent/>
      </v-row>
    </v-container>
  </div>
</template>

<script>
//import MenusComponent from '../components/MenusComponent.vue'
import ProductsComponent from '../components/ProductsComponent.vue'

export default {
  name: 'Products',
  components: {
    //MenusComponent,
    ProductsComponent
  },
  data: () => ({
  }),
}
</script>

<style scoped>

</style>
