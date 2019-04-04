<template>
  <div class="home">
    <div class="router-link">
      <router-link to="PropertyProspects" class="links">Home</router-link>
      <router-link to="PropertyProspects" class="links">About</router-link>
      <router-link to="PropertyProspects" class="links">Property Prospects</router-link>
      <router-link to="PhoneRecords" class="links">Phone Records</router-link>
    </div>
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

<style scoped>
.router-link{
  display: flex;
  flex-direction: row;
  margin: auto;
  text-align: center;
  margin-bottom: 10px;
}
.links{
  display: flex;
  flex-direction: row;
  align-self: auto;
  text-align: center;
  margin: auto;
}
</style>
