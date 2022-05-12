import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/views/homePage.vue'
import dataset1 from '@/views/DataSet1.vue'
import USDailyCase from '@/views/Chart1.vue'
import chart2 from '@/views/Chart2.vue'
import chart3 from '@/views/Chart3.vue'
import dataset2 from '@/views/DataSet2.vue'
import chart4 from '@/views/Chart4.vue'
import chart5 from '@/views/Chart5.vue'
import chart6 from '@/views/Chart6.vue'
import dataset3 from '@/views/DataSet3.vue'
import chart7 from '@/views/Chart7.vue'
import chart8 from '@/views/Chart8.vue'
import chart9 from '@/views/Chart9.vue'
import dataset4 from '@/views/DataSet4.vue'
import chart10 from '@/views/Chart10.vue'
import chart11 from '@/views/Chart11.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/dataset1',
      name: 'dataset2',
      component: dataset1,
      redirect:'/USDailyCase',
      children:[
        {
          path: '/USDailyCase',
          name: 'USDailyCase',
          component: USDailyCase
        },
        {
          path: '/USStateCase',
          name: 'chart2',
          component: chart2
        },
        {
          path: '/USMortality',
          name: 'chart3',
          component: chart3
        }
      ]
    },
    {
      path: '/dataset2',
      name: 'dataset2',
      component: dataset2,
      redirect:'/AUDailyCase',
      children:[
        {
          path: '/AUDailyCase',
          name: 'chart4',
          component: chart4
        },
        {
          path: '/AUVaccination',
          name: 'chart5',
          component: chart5
        },
        {
          path: '/AUMonthlyCase',
          name: 'chart6',
          component: chart6
        }
      ]
    },
    {
      path: '/dataset3',
      name: 'dataset3',
      component: dataset3,
      redirect:'/chart7',
      children:[
        {
          path: '/chart7',
          name: 'chart7',
          component: chart7
        },
        {
          path: '/chart8',
          name: 'chart8',
          component: chart8
        },
        {
          path: '/chart9',
          name: 'chart9',
          component: chart9
        }
      ]
    },
    {
      path: '/dataset4',
      name: 'dataset4',
      component: dataset4,
      redirect:'/CaseNumber',
      children:[
        {
          path: '/CaseNumber',
          name: 'chart10',
          component: chart10
        },
        {
          path: '/Vaccination',
          name: 'chart11',
          component: chart11
        }
      ]
    }
  ]
})
