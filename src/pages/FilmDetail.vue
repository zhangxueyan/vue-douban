<template>
  <div class="subject">
  	<app-nav></app-nav>
    <div class="sub-cont" v-if="subjectInfo">
    	<div class="sub-brief clearfix">
    	    <div class="brief-txt">
    		 <h2 class="sub-titl">{{subjectInfo.title}}</h2>
    		 <p class="sub-rate">{{subjectInfo.rating.average}}分 {{subjectInfo.ratings_count}}人评价</p>
    		 <p class="sub-actor">{{subjectInfo.year}}/剧情/<span v-for="cast in subjectInfo.casts">{{cast.name}}/</span><span v-for="country in subjectInfo.countries">{{country}}</span></p>
    		 <p class="sub-rate sub-app">使用App查看影人资料</p>
    		</div>
    		<div class="brief-pic">
    			<img :src="subjectInfo.images.small" alt="">
    		</div>
    	</div>
    	<div class="sub-actor sub-jianjie">{{subjectInfo.summary}}</div>
    	<div class="sub-rate sub-juqing"><span v-for='genre in subjectInfo.genres'>{{genre}}</span></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import appNav from '../components/Nav'
export default {
  name: 'Subject',
  data () {
    return {
      msg: 'subject',
      subjectInfo:''
    }
  },
  components:{
    appNav
  },
  created(){
   this.getSubject()
  },
  methods:{
    getSubject(){
      axios.get("/api/movie/subject/"+this.$route.params.id)
      .then((response)=>{
        console.log(response.data)
        this.subjectInfo = response.data
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
.sub-titl{
	font-size:0.4rem;
	color:#000;
	font-weight: bold;
}
.sub-cont{
   padding:0.3rem;
}
.sub-rate,.sub-actor{
	font-size:0.3rem;
	color:#000;
	color: #494949;
	line-height: 1.6;
	margin-top:0.2rem;
}
.sub-actor span{
	margin:0 0.1rem;
}
.brief-pic{
	width:2.0rem;
	float: right;
}
.brief-txt{
	width:4.2rem;
	float: left;
}
.sub-app{
	color: #42bd56;
	font-weight: bold;
}
.sub-juqing span{
	background: #e4e2e2;
	display: inline-block;
	padding:0.05rem 0.2rem; 
	border-radius: 0.2rem;
	margin-left:0.2rem;
}
</style>
