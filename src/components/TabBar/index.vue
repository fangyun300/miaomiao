<template>
	<footer id="footer">
		<ul>
			<router-link to="/movie" tag="li">
				<i class="iconfont icon-dianying"></i>
				<p>电影</p>
			</router-link>
			<router-link to="/cinema" tag="li">
				<i class="iconfont icon-yingyuana"></i>
				<p>影院</p>
			</router-link>
			<router-link to="/mine" tag="li">
				<i class="iconfont icon-my"></i>
				<p>我的</p>
			</router-link>
		</ul>
	</footer>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped>
	#footer{width: 100%; height: 50px; background: #fff; border-top: 2px solid #ebe8e3; position: fixed; left: 0; bottom: 0; z-index: 2}
	#footer ul{display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
text-align: center; height: 50px; align-items: center;}
	#footer ul li{flex:1; height: 40px;}
	#footer ul li.router-link-active{color: red}
	#footer ul li i{font-size: 20px;}
	#footer ul li p{font-size: 12px; line-height: 18px;}
</style>