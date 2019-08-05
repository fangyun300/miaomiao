<template>
	<div class="city_body">
		<div class="city_list">
			<div>
				<div class="city_hot">
					<h2>热门城市</h2>
                    <ul class="clearfix">
                        <li v-for="(item, index) in hotList" :key="item.id">{{item.nm}}</li>
                    </ul>
					<!-- <ul class="clearfix">
                        <li>北京</li>
                        <li>杭州</li>
                        <li>南京</li>
                        <li>广州</li>
                    </ul> -->
				</div>
				<div class="city_sort" ref="city_sort">
                    <div v-for="(item, index) in cityList" :key="item.id">
                        <h2>{{item.index}}</h2>
                        <ul>
                            <li v-for="(itemN, indexN) in item.list">{{itemN.nm}}</li>
                        </ul>
                    </div>
					<!-- <div>
                        <h2>A</h2>
                        <ul>
                            <li>阿拉</li>
                            <li>阿拉善</li>
                            <li>澳门</li>
                        </ul>
                    </div> -->
				</div>
			</div>
		</div>
			<div class="city_index">
				<ul>
					<li v-for="(item, index) in cityList" :key="item.id" @click="handleToIndex(index)">{{item.index}}</li>
				</ul>
			</div>
	</div>
</template>

<script>
export default {
  name: 'City',
  data(){
    return {
        cityList:[],
        hotList:[]
    }
  },
  mounted(){
    this.$axios.get('/api/cityList').then((res)=>{
        var msg = res.data.msg;
        if(msg === 'ok'){
            var cities = res.data.data.cities;
           // [{index:'A', list:[{nm:'北京', id:1}]}]
           var {cityList, hotList} = this.formatCityList(cities)
           this.cityList = cityList;
           this.hotList = hotList;
        }
    })
  },
  methods:{
    formatCityList(cities){
        var cityList = []
        var hotList = []

        for(let i=0; i<cities.length; i++){
            if(cities[i].isHot === 1){
                hotList.push(cities[i])
            }
        }

        for(let i=0; i<cities.length; i++){
            var firstLetter = cities[i].py.substring(0,1).toUpperCase();
            if(toCom(firstLetter)){
                //新添加index
                cityList.push({index:firstLetter, list:[{nm:cities[i].nm, id:cities[i].id}]})
            }else{
                //添加到已有index
                for(let j=0; j<cityList.length; j++){
                    if(cityList[j].index === firstLetter){
                        cityList[j].list.push({nm:cities[i].nm, id:cities[i].id})
                    }
                }
            }
        }

        function toCom(firstLetter){
            for(let i=0; i<cityList.length; i++){
                if(cityList[i].index === firstLetter){
                    return false
                }
            }
            return true
        }

        cityList.sort((n1,n2) => {
            if(n1.index > n2.index){
                return 1
            }else if(n1.index < n2.index){
                return -1
            }else{
                return 0
            }
        })

        return {
            cityList, hotList
        }
    },
    handleToIndex(index){
        var h2 = this.$refs.city_sort.getElementsByTagName('h2'); //h2数组
        this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop
    }
  }
}
</script>

<style scoped>
.clearfix {
    overflow: hidden;
}

#content .city_body {
    margin-top: 80px;
    margin-bottom: 60px;
    display: flex;
    width: 100%;
    /*  position: absolute;
  top: 0;
  bottom: 0*/
}

.city_body .city_list {
    flex: 1;
    width: 100%;
    overflow: auto;
    background: #fff;
}

.city_body .city_list::-webkit-scrollbar {
    background-color: transparent;
    width: 0;
}

.city_body .city_hot {
    margin-top: 20px;
}

.city_body .city_hot h2 {
    padding-left: 15px;
    line-height: 30px;
    font-size: 14px;
    background: #f0f0f0;
    font-weight: normal;
}

.city_body .city_hot ul li {
    float: left;
    background: #fff;
    width: 29%;
    height: 33px;
    margin-top: 15px;
    margin-left: 3%;
    padding: 0 4px;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    line-height: 33px;
    text-align: center;
    box-sizing: border-box;
}

.city_body .city_sort div {
    margin-top: 20px;
}

.city_body .city_sort h2 {
    padding-left: 15px;
    line-height: 30px;
    font-size: 14px;
    background: #f0f0f0;
    font-weight: 700;
}

.city_body .city_sort ul {
    padding-left: 10px;
    margin-top: 10px;
}

.city_body .city_sort ul li {
    line-height: 30px;
}

.city_body .city_index {
    width: 20px;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    flex-direction: column;
    text-align: center;
    border-left: 1px solid #e6e6e6;
    position: fixed;
    right: 0;
    height: 100%;
}
</style>
