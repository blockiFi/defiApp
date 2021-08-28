import Vue from 'vue'
import VueRouter from 'vue-router'

import vaultmenu from '../views/vaultmenu.vue'
import Home from '../views/home.vue'
import monitor from '../views/monitor.vue'
import NotFoundComponent from '../components/NotFoundComponent'
Vue.use(VueRouter)



let routes = [
    
  
  { path: '/', component: Home },
  { path: '/vaultmenu/:id',name: 'vaultmenu', component: vaultmenu },
  { path: '/monitor', component: monitor },
  { 
    path: '/:catchAll(.*)', 
    component: NotFoundComponent,
    name: 'NotFound'
  } 
   ]
   
   const router = new VueRouter({
       mode: 'history',
     routes // short for `routes: routes`
   })


export default router
