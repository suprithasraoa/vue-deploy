import Vue from 'vue'
import Router from 'vue-router'

import about from '../components/About'
import HelloWorld from '../components/HelloWorld'
import terms from '../components/Terms'

Vue.use(Router)
export default new Router({
  mode : 'history',
  routes: [
   
    {
      path: '/',
      redirect: '/home'
    },
  
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    },
   
  
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/terms',
      name: 'terms',
      component: terms
    },
    
    
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
/* router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('fire')
  else next()
})

export default router */