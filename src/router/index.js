import Vue from 'vue'
import Router from 'vue-router'


import Home from '@/pages/Home'
import HomeDetail from '@/pages/HomeDetail'

import Film from '@/pages/Film'
import FilmDetail from '@/pages/FilmDetail'

import Books from '@/pages/Books'
import BooksDetail from '@/pages/BooksDetail'


import Group from '@/pages/Group'
import GroupDetail from '@/pages/GroupDetail'

import Radio from '@/pages/Radio'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/homeDetail/:id',
      name: 'HomeDetail',
      component: HomeDetail
    },

    {
      path: '/film',
      name: 'Film',
      component: Film
    },
    {
      path: '/film/subject/:id',
      name: 'FilmDetail',
      component: FilmDetail
    },

    {
      path: '/books',
      name: 'Books',
      component: Books
    },
    {
      path: '/books/subject/:id',
      name: 'BooksDetail',
      component: BooksDetail
    },

    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/group/groupDetail/:id',
      name: 'groupDetail',
      component: GroupDetail
    },

    {
      path: '/radio',
      name: 'Radio',
      component: Radio
    }
  ]
})
