<template>
  <div class="mt-3 mb-8">
    <v-container fluid>
      <h2>Produit</h2>
        <ProductsComponent/>
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
