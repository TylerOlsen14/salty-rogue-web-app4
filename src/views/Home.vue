<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.jpg">
  </div>
</template>

<script>
// @ is an alias to /src
import Clients from '@/components/Clients.vue'
import PropertyProspects from '@/components/PropertyProspects.vue'
import PhoneRecords from '@/components/PhoneRecords.vue'

export default {
  name: 'home',
  components: {
    PropertyProspects,
    PhoneRecords,
    Clients,
  }
}
</script>
