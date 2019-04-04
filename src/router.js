import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Clients from './components/Clients.vue'
import PropertyProspects from './components/PropertyProspects.vue'
import PhoneRecords from './components/PhoneRecords.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Clients',
      name: 'Clients',
      component: Clients
    },
    {
      path: '/PhoneRecords',
      name: 'PhoneRecords',
      component: PhoneRecords
    },
    {
      path: '/PropertyProspects',
      name: 'ProperyProspects',
      component: PropertyProspects
    },
    {
      path: './views/About.vue',
      name: 'about',
      component: About
    }
  ]
})
