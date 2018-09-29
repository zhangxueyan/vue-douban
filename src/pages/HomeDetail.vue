<template>
  <div class="detail">
  	<app-nav></app-nav>
  	<div class="event-box" v-if="event">
	    <h1 class="event-titl">{{ event.title }}</h1>
	    <h2 class="event-loc">
	    	<span>{{ event.loc_name }}</span>
	    </h2>
	    <div class="event-pic"><img :src="event.image_hlarge" alt=""></div>
	    <ul class="event-brief">
	    	<li class="clearfix">
	    		<p class="brief-key">时间:</p>
	    		<p class="brief-val">{{event.begin_time}}<br>{{event.end_time}}</p>
	    	</li>
	    	<li class="clearfix">
	    		<p class="brief-key">地点:</p>
	    		<p class="brief-val">{{event.address}}</p>
	    	</li>
	    	<li class="clearfix">
	    		<p class="brief-key">费用:</p>
	    		<p class="brief-val">{{event.fee_str}}</p>
	    	</li>
	    	<li class="clearfix">
	    		<p class="brief-key">类型:</p>
	    		<p class="brief-val">{{event.category_name}}</p>
	    	</li>
	    	<li class="clearfix">
	    		<p class="brief-key">起始时间:</p>
	    		<p class="brief-val">{{event.owner.name}}</p>
	    	</li>
	    </ul>
	    <div class="event-part">
	    	<h2 class="part-titl">活动详情</h2>
	    	<p class="part-cont" v-html="event.content"></p>
	    </div>
  	</div>
  </div>
</template>

<script>
import axios from 'axios'
import appNav from '../components/Nav'
export default {
  name: 'HomeDetail',
  data () {
    return {
      msg: 'detail',
      event:''
    }
  },
  components:{
    appNav
  },
  created(){
   this.getEvent()
  },
  methods:{
    getEvent(){
      axios.get("/api/event/"+this.$route.params.id)
      .then((response)=>{
        console.log(response.data)
        this.event = response.data
      })
      .catch((error)=>{
        console.log(error);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event-box{
	padding:0.2rem 0.3rem;
}
.event-titl{
	font-size: 0.44rem;
	font-weight: bold;
    color: #494949;

    color: #494949;
}
.event-loc{
	font-size:0;
}
.event-loc span{
	display: inline-block;
	background-color: #FF8263;
	font-size: 0.26rem;
	color:#fff;
    font-weight: 500;
    padding:0.05rem 0.1rem;
    border-radius: 5px;
}
.event-pic{
	width:5rem;
	margin:0.3rem auto;
}
.brief-key{
     font-size: 0.26rem;
	color:#000;
	display: inline-block;
	float: left;
	line-height: 0.5rem;	
}
.brief-val{
	width:5.4rem; 
	 font-size: 0.26rem;
	color:#000;
    line-height: 0.5rem;
    float: left;
    margin-left:0.2rem;
}
.part-titl{
	color: #072;
	font-size:0.4rem;
	font-weight: bold;
	margin:0.3rem 0;
}
.part-cont{
	 font-size: 0.26rem;
	color:#000;
    line-height: 0.5rem;	
}
</style>
