<template>
  <div class="group">
  	<app-nav></app-nav>
    <div class="group-box">
      <h2 class="group-titl">租房找室友</h2>
      <ul class="group-items">
        <li v-for="single in groupInfo" :key="single.id" class="group-item">
          <router-link :to="{name:'groupDetail',params:{id:single.id}}">
            <div class="clearfix">
              <div class="group-pic fl"><img :src="single.img" alt=""></div>
              <p class="group-p1 fl">{{single.prov}}租房</p>
            </div>
            <p class="group-p2">{{single.number}}分钟前更新{{single.addr}}最新租房资讯</p>
          </router-link>
        </li>
      </ul>
    </div>


  </div>
</template>

<script>
import axios from 'axios'
import appNav from '../components/Nav'
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  name: 'Group',
  data () {
    return {
      msg: 'group'
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
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  font-size:0.2rem;
}
.group-box{
  padding:0.3rem;
}
.group-pic{
  width:0.96rem;
  height: 0.96rem;
}
.group-p1{
  line-height: 0.96rem;
  margin-left:0.2rem;
}
.group-item{
  padding-bottom:0.2rem;
  border-bottom: 1px solid #ccc;
  margin-top:0.2rem;
}
.group-p2{
  line-height: 0.4rem;
  margin-top: 0.1rem;
}
</style>
