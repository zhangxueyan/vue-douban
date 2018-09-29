<template>
  <div class="home">
    <div class="test">
      <h1>{{ msg }}</h1>
      <h2 @click='add()'>{{count}}</h2>
      <h3>{{getOdd}}</h3>
    </div>
    <app-nav></app-nav>
    <app-list></app-list>



  </div>
</template>

<script>
import axios from 'axios'
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

import appNav from '../components/Nav'
import appList from '../components/List'

export default {
  data () {
    return {
      msg: 'home'
    }
  },
  components:{
    appNav,
    appList
  },
  computed:{
    ...mapState([
          'count'
      ]),
    ...mapGetters([
          'getCount',
          'getOdd'
      ])
  },
  methods:mapActions([
      'add',
      'decrease',
      'oddAdd'
    ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test{
  margin-bottom:5rem;
  display:none;
}
</style>
