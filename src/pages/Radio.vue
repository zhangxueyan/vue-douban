<template>
  <div class="radio">
    <app-nav></app-nav>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
import axios from 'axios'
import appNav from '../components/Nav'
export default {
  name: 'Radio',
  data () {
    return {
      msg: 'radio'
    }
  },
  components:{
  	appNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  font-size:0.3rem;
}
</style>
