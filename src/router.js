/*global Vue*/
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect:'/home',
      component: HelloWorld,
      children:[
        {
          path: '/home',
          name: 'Home',
          component: Home,
        }
      ]
    }
  ]
})
