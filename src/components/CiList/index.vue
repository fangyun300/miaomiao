<template>
	<div class="cinema_body">
		<ul>
			<li>
				<div>
					<span>天龙八部</span>
					<span class="q"><span class="price">34.00</span>元起</span>
				</div>
				<div class="address">
					<span>时代电影院</span>
					<span>2.3km</span>
				</div>
				<div class="card">
					<div>小吃</div>
					<div>折扣卡</div>
				</div>
			</li>
		</ul>
    </div>
</template>

<script>
	export default{
		name:'CiList'
	}
</script>

<style scoped>
#content .cinema_body {
    flex: 1;
    padding: 0 10px;
    margin-top: 80px;
    margin-bottom: 60px;
    height: 100vh;
}

.cinema_body ul {
    padding: 20px;
}

.cinema_body li {
    border-bottom: 1px solid #e6e6e6;
    margin-bottom: 20px;
}

.cinema_body div {
    margin-bottom: 10px;
}

.cinema_body .q {
    font-size: 11px;
    color: #f03d37;
}

.cinema_body .price {
    font-size: 18px;
}

.cinema_body .address {
    font-size: 13px;
    color: #666;
}

.cinema_body .address span:nth-of-type(2) {
    float: right;
}

.cinema_body .card {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
}

.cinema_body .card div {
    padding: 0 3px;
    height: 15px;
    line-height: 15px;
    border-radius: 2px;
    color: #f90;
    border: 1px solid #f90;
    font-size: 13px;
    margin: 2px;
}

.cinema_body .card div.or {
    color: #f90;
    border: 1px solid #f90;
}

.cinema_body .card div.bl {
    color: #589daf;
    border: 1px solid #589daf;
}
</style>