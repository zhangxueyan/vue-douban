<template>
  <div class="film">
  	<app-nav></app-nav>
  	<div class="film-box">
      <h2 class="film-cate">{{filmData.title}}</h2>
	  <swiper :options="swiperOption" ref="mySwiper">
	    <swiper-slide v-for="subject in filmData.subjects" :key="subject.id">
          <router-link :to="{name:'FilmDetail',params:{id:subject.id}}">
          	<div class="film-item">
          		<ul class="film-reprs clearfix">
          			<li class="film-repr">
          				<div class="film-pic"><img :src="subject.images.small" alt=""></div>
          				<p class="film-titl">{{subject.title}}</p>
          				<p class="film-titl">综合评分:{{subject.rating.average}}</p>
          			</li>
          		</ul>
          	</div>
          </router-link>
	    </swiper-slide>
	    <div class="swiper-scrollbar" slot="scrollbar"></div>
	  </swiper>
  	</div>
  </div>
</template>

<script>
import axios from 'axios'
import appNav from '../components/Nav'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Film',
  data () {
    return {
      msg: 'film',
      filmData:'',
      swiperOption:{
        notNextTick: true,
        autoplay: 3000,
        paginationClickable :true,
        scrollbar:'.swiper-scrollbar',
        mousewheelControl : true,
        observeParents:true,
        slidesPerView : 2.8,
        spaceBetween : 5,
       }
    }
  },
  components:{
    appNav,
    swiper,
    swiperSlide
  },
  created(){
   this.getFilms()
  },
  methods:{
    getFilms(){
      axios.get("/api/movie/in_theaters")
      .then((response)=>{
        console.log(response.data)
        this.filmData = response.data
      })
      .catch((error)=>{
        console.log(error);
      });
    }
  },
  computed: {
  	swiper() {
  		return this.$refs.mySwiper.swiper
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.film-box{
	padding:0.3rem;
}
.film-cate{
	font-size:0.4rem;
	margin:0.3rem 0;
}
.film-pic img{
	height:3.2rem;
	overflow: hidden;
}
.film-titl{
	font-size:0.3rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	padding-top: 0.1rem;
	text-align: center;
}
.film-repr{
	padding-bottom:0.5rem;
}
</style>
