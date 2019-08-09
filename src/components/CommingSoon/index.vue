<template>
		<div class="movie_body">
			<Loading v-if="isLoading"></Loading>
			<Scroller v-else>
				<ul>
					<li v-for="(item, index) in comingList" :key="index">
						<div class="pic_show" ><img :src="item.img | setWH('128.180')"></div>
						<div class="info_list">
							<h2>{{item.nm}}</h2>
							<p>{{item.wish}}人想看</p>
							<p>主演：{{item.star}}</p>
							<p>{{item.showInfo}}</p>
						</div>
						<div class="btn_pre">预售</div>
					</li>
					<!-- <li>
						<div class="pic_show" ><img src="/images/1.jpg"></div>
						<div class="info_list">
							<h2>天山童姥</h2>
							<p>258人想看</p>
							<p>主演：马龙·白兰度</p>
							<p>2018/01/20上映</p>
						</div>
						<div class="btn_pre">预售</div>
					</li> -->
				</ul>
			</Scroller>
	</div>
</template>

<script>
export default {
	name: 'CommingSoon',
	data(){
		return {
			comingList:[],
			isLoading:true,
			preCity:-1
		}
	},
  activated(){
  	var cityId = this.$store.state.city.id
    if(this.preCity === cityId) return
		this.$axios.get('/api/movieComingList?cityId='+cityId).then((res)=>{
			var msg = res.data.msg;
			if(msg === 'ok'){
				this.comingList = res.data.data.comingList
				this.isLoading = false
				this.preCity = cityId
			}
		})
	}
}
</script>

<style scoped>
	#content .movie_body{  flex: 1;
  padding: 0 10px;
  margin-top: 80px;
  margin-bottom: 60px; height: 100vh;}
	.movie_body ul{ margin: 0 12px; overflow: hidden; }
	.movie_body ul li{margin-top: 12px; display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex; align-items: center;; border-bottom: 1px #e6e6e6 sllid;padding-bottom: 10px;}
	.movie_body .pic_show{ width: 64px; height: 90px; }
	.movie_body .pic_show img{width: 100%;}
	.movie_body .info_list{margin-left: 10px; flex:1; position: relative;}
	.movie_body .info_list h2{font-size: 17px; line-height: 24px; width: 150px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}
	.movie_body .info_list p{font-size: 13px; color: ##666; line-height: 22px; width: 200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
	.movie_body .info_list .grade{font-weight: 700; color: #faaf00; font-size: 15px;}
	.movie_body .info_list img{width: 50px; position: absolute; right: 10px; top: 5px;}
	.movie_body .btn_mall, 	.movie_body .btn_pre{width: 47px; height: 27px; line-height: 28px; text-align: center; background: #f03d37; color: #fff; border-radius:4px;font-size: 12px; cursor: pointer;}
	.movie_body .btn_pre{background: #3c9fe6;}
</style>
