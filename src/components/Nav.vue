<template>
  <div class="nav clearfix">
    <router-link to="/"><h2 class="nav-logo"></h2></router-link>
    <div class="nav-items clearfix">
    	<a class="nav-item" :href="cate.path" v-for="cate in cates" :class="{'c1':cate.type==1,'c2':cate.type==2,'c3':cate.type==3,'c4':cate.type==4}">{{cate.name}}</a>
    </div>
    <h3 class="nav-sch"></h3>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'nav',
      cates:[
        {name:'电影',path:'/film' ,type:1},
        {name:'图书',path:'/books',type:2},
        {name:'广播',path:'/radio',type:3},
        {name:'小组',path:'/group',type:4}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
	padding-top:1.0rem;
}
.nav{
	height:1.0rem;
	padding:0.25rem 0.3rem;
	border-bottom: 1px solid #f3f3f3;
}
.nav-logo{
	width: 1.2rem;
	height: 0.5rem;
	background: url(../assets/images/yd_01.png) no-repeat center;
	background-size: contain;
	float: left;
}
.nav-items{
	float: left;
	margin-left:1.0rem;
}
.nav-item{
	width: 1rem;
	font-size:0.3rem;
	color: #31af25;
	line-height: 0.56rem;
	text-align: center;
	float: left;
}
.c1{
    color: #2384E8;
}
.c2{
    color: #9F7860;
}
.c3{
    color: #E4A813;
}
.c4{
    color: #2AB8CC;
}

.nav-sch{
	width: 0.6rem;
	height: 0.5rem;
	background: url(../assets/images/yd_02.png) no-repeat center;
	background-size: contain;
	float: right;
}
</style>
