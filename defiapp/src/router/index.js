import Vue from 'vue'
import VueRouter from 'vue-router'

import vault from '../views/vault.vue'
import Home from '../views/home.vue'
import monitor from '../views/monitor.vue'
Vue.use(VueRouter)



let routes = [
    
  
  { path: '/', component: Home },
  { path: '/vault/:id', component: vault },
  { path: '/monitor', component: monitor },
    
   ]
   
   const router = new VueRouter({
       mode: 'history',
     routes // short for `routes: routes`
   })


export default router
