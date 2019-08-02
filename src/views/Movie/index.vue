<template>
	<div id="main">
		<Header title='喵喵电影'></Header>
			<div id="content">
        <ul class="movie_menu">
            <router-link tag="li" to="/movie/city" class="city_name">
                <span>北京</span><i class="iconfont icon-xiangxia"></i>
            </router-link>
            <router-link tag="li" to="/movie/nowplaying">正在热映</router-link>
            <router-link tag="li" to="/movie/commingsoon">即将上映</router-link>
            <router-link tag="li" to="/movie/search"><i class="search iconfont icon-sousuo"></i></router-link>
        </ul>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        </div>
		<TabBar></TabBar>
	</div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
export default {
  name: 'Movie',
  components:{
    Header,TabBar
    }
}
</script>

<style scoped>
#content{    display: flex;
    flex: 1;
    height: 100%;
    position: relative;
    z-index: 1;}
#content .movie_menu {
    overflow: hidden;
    position: fixed;
    top: 40px;
    left: 0;
    height: 40px;
    z-index: 999;
    background-color: #fff;
    width: 100%;
    overflow: hidden;

}
#content .movie_menu li{
    float: left;
    width: 25%;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    color: #444;
    font-weight: 500;
    text-align: center;
    padding: 0 10px;
    box-sizing: border-box;
}
#content .movie_menu li.search{
	font-size: 30px;
        color: red;
      }
    .router-link-active {
      color: red;
      border-bottom: 2px solid red;
    }
</style>


