<template>
  <div class="books">
    <app-nav></app-nav> 
    <div class="book-box">
      <h2 class="book-cate">最受关注的书籍/虚构类</h2>
	  <swiper :options="swiperOption" ref="mySwiper">
	    <swiper-slide v-for="book in books" :key="book.id">
          <router-link :to="{name:'BooksDetail',params:{id:book.id}}">
          	 <div class="book-titl">{{book.title}}<br>{{book.rating.average}}</div>
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
  name: 'Books',
  data () {
    return {
      msg: 'books',
      books:'',
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
   this.getBooks()
  },
  methods:{
    getBooks(){
      axios.get("/api/book/search?q=虚构类&count=8")
      .then((response)=>{
        console.log(response.data)
        this.books = response.data.books
      })
      .catch((error)=>{
        console.log(error);
      });
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.book-box{
	padding:0.3rem;
}
.book-cate{
  font-size:0.3rem;
}
.book-titl{
    font-size:0.3rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	text-align: center;	
	padding:0.1rem 0 0.3rem;
	line-height: 0.5rem;
}
</style>
