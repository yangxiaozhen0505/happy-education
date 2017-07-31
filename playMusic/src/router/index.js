import Vue from 'vue'
import Router from 'vue-router'
import List from '../containers/List.vue'
import Detail from '../containers/Detail.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: List
    },
    {
      path: '/detail/:id',  //this.$route.params.id
      component: Detail
    },
    {
      path: '*',
      redirect:'/'
    }
  ],
  linkActiveClass:'active'
})
