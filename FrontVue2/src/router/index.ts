import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Cart from '../views/Cart.vue'
import CustomerView from '../views/roles/CustomerView.vue'
import DeliveryManView from '../views/roles/DeliveryManView.vue'
import Help from '../views/Help.vue'
import Products from '../views/Products.vue'
import RestaurateurView from '../views/Restaurateur/RestaurateurView.vue'



Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/client',
    name: 'client',
    component: CustomerView
  },
  {
    path: '/livreur',
    name: 'livreur',
    component: DeliveryManView
  },
  {
    path: '/restaurateur',
    name: 'Restaurateur',
    component: RestaurateurView
  },
  {
    path: '/restaurants/:id/:name',
    name: 'Products',
    component: Products
  },
  {
    path: '/aide',
    name: 'aide',
    component: Help
  },
  {
    path: '/about',
    name: 'AboutView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
