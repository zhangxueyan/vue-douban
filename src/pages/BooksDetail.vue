<template>
  <div class="booksDetail">
  	<app-nav></app-nav>
  	<div class="book-div">
  		 <h1 class="book-titl">{{ book.title }}</h1>
         <div class="book-cont">{{ book.summary}}</div>
  	</div>
  </div>
</template>

<script>
	import axios from 'axios'
import appNav from '../components/Nav'
export default {
  name: 'BooksDetail',
  data () {
    return {
      msg: 'booksDetail',
      book:''
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
      axios.get("/api/book/"+this.$route.params.id)
      .then((response)=>{
        console.log(response.data)
        this.book = response.data
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
.book-div{
	padding:0.3rem;
}
.book-titl{
	font-size:0.4rem;
	color: #000;
}
.book-cont{
	font-size:0.3rem;
	line-height: 0.6rem;
	margin-top:0.3rem;
}
</style>
