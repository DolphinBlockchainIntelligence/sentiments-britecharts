import Vue from 'vue'
import Router from 'vue-router'
import SentimentsBritechartsStackedArea from '@/SentimentsBritechartsStackedArea'
import SentimentsBritechartsDonut from '@/SentimentsBritechartsDonut'
import SentimentsBritechartsLine from '@/SentimentsBritechartsLine'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/sentiments-britecharts-stacked-area/:id',
      name: 'SentimentsBritechartsStackedArea',
      component: SentimentsBritechartsStackedArea,
      props: true,
      meta: { reuse: false }
    },
    {
      path: '/sentiments-britechart-donut/:id',
      name: 'SentimentsBritechartsDonut',
      component: SentimentsBritechartsDonut,
      props: true,
      meta: { reuse: false }
    },
    {
      path: '/sentiments-britechart-line/:id',
      name: 'SentimentsBritechartsLine',
      component: SentimentsBritechartsLine,
      props: true,
      meta: { reuse: false }
    }
  ]
})
