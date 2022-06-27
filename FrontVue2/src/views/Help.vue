<template>
  <div id="customer-view">
    <CustomerOperation/>
    <RestaurantOwnerOperation/>
    <DeliveryManOperation/>
    <JoinUsComponent/>
  </div>
</template>

<script>
import CustomerOperation from '@/components/roles/CustomerOperation.vue'
import DeliveryManOperation from '@/components/roles/DeliveryManOperation.vue'
import JoinUsComponent from '@/components/roles/JoinUsComponent.vue'

export default {
  name: 'Help',
  components: {
    CustomerOperation,
    DeliveryManOperation,
    JoinUsComponent
  }
}
</script>

<style scoped>

</style>
