import Vue from 'vue'
import Router from 'vue-router'
import Hello2 from '@/components/Hello22'
import Hello from '@/components/Hello'
import goods from '@/components/goods/goods'
import ratings from '@/components/ratings/ratings'
import seller from '@/components/seller/seller'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'Hello',
      components: {
        default: Hello2,
        Hello: Hello
      }
    },
    {
      // 地址
      path: '/goods',
      components: {
        default: goods,
        Hello: Hello
      }
    },
    {
      path: '/ratings',
      components: {
        default: ratings
      }
    },
    {
      path: '/seller',
      components: {
        default: seller
      }
    }

  ]

})
