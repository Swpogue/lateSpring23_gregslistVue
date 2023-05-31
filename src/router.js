import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    // NOTE instead of mounting views AND controllers here....we mount page components
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/cars',
    name: 'Cars',
    component: loadPage('CarsPage')
  },
  {
    path: '/houses',
    name: 'Houses',
    component: loadPage('HousesPage')
  },
  {
    // NOTE we can create unique endpoints through the use of parameters and ':'
    path: '/cars/:carId',
    name: 'CarDetails',
    component: loadPage('CarDetailsPage')
  },
  {
    path: '/houses/:houseId',
    name: 'HouseDetails',
    component: loadPage('HouseDetailsPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
