<template>
	<div id="main">
		<Header title='电影院'></Header>
		<div id="content">
			<div class="cinema_menu">
				<div class="city_switch">
					全城<i class="iconfont icon-xiangxia"></i>
				</div>
				<div class="brand_switch">
					品牌<i class="iconfont icon-xiangxia"></i>
				</div>
				<div class="brand_switch">
					特色<i class="iconfont icon-xiangxia"></i>
				</div>
			</div>
			<CiList></CiList>
		</div>
		<TabBar></TabBar>
	</div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import CiList from '@/components/CiList'
export default {
  name: 'Cinema',
  components:{
		Header,TabBar,CiList
	}
}
</script>

<style scoped>
	#content .cinema_menu{overflow: hidden;
    position: fixed;
    top: 40px;
    left: 0;
    height: 40px;
    z-index: 999;
    background-color: #fff;
    width: 100%;
    overflow: hidden;}
    #content .cinema_menu > div{
    	float: left;
    width: 33%;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    color: #444;
    font-weight: 500;
    text-align: center;
    padding: 0 10px;
    box-sizing: border-box;
    }
</style>

