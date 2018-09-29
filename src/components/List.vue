<template>
  <div class="list">
    <ul>
      <li class="list-item clearfix" v-for="event in events" :key = "event.id">
       <router-link :to="{ name:'HomeDetail',params: { id: event.id }}">
          <div class="list-txt">
            <h2 class="list-subt">{{event.title}}</h2>
            <h3 class="list-brief">{{event.content}}</h3>
            <p class="list-author">{{event.category_name}}</p>
          </div>
          <div class="list-pic"><img :src="event.image" alt=""></div>
       </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      msg: 'nav',
      events:''
    }
  },
  created(){
   this.getEvents()
  },
  methods:{
    getEvents(){
      axios.get("/api/event/list?loc=108288")
      .then((response)=>{
        console.log(response.data.events)
        this.events = response.data.events
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
.list{
	padding:0 0.3rem;
}
.list-item{
	padding:0.4rem 0;
  border-bottom: 1px solid #f3f3f3;
}
.list-txt{
	width:4.6rem;
	float: left;
}
.list-pic{
	width:1.8rem;
	float: right;
}
.list-subt{
    font-size: 0.26rem;
    font-weight: 500;
    line-height: 1.8;
    color: #494949;
}
.list-brief{
    font-size: 0.2rem;
    font-weight: 500;
    line-height: 1.8;
    color: #aaa;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;

}
.list-author{
	 font-size: 0.2rem;
    font-weight: 500;
    line-height: 1.41;
    color: #aaa;
    margin-top:0.2rem;
}

</style>
