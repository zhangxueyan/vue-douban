<template>
  <div class="subject">
  	<app-nav></app-nav>
    <h2>{{singleInfo[idx].num}} {{singleInfo[idx].address}}</h2>
  </div>
</template>

<script>
import axios from 'axios'
import appNav from '../components/Nav'
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  name: 'groupDetail',
  data () {
    return {
      msg: 'groupDetail',
      idx:''
    }
  },
  components:{
    appNav
  },
  computed:{
    ...mapState([
          'count',
          'groupInfo',
          'singleInfo'
      ])
  },
  created(){
   this.idx = this.$route.params.id
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  font-size:0.3rem;
}
</style>
