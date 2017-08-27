import Vue from 'vue'
import Router from 'vue-router'
import SentimentsBritechartsStackedArea from '@/SentimentsBritechartsStackedArea'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/sentiments-britecharts-stacked-area/:id',
      name: 'SentimentsBritechartsStackedArea',
      component: SentimentsBritechartsStackedArea,
      props: true,
      meta: { reuse: false }
    }
  ]
})
