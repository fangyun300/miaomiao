<template>
	<div class="messageBox">
		<h2>{{title}}</h2>
		<p>{{content}}</p>
		<div class="choose">
			<div @touchstart="handleToCancel">{{cancel}}</div>
			<div @touchstart="handleToOk">{{ok}}</div>
		</div>
	</div>
</template>
<script>
	name:'MessageBox'
</script>
<style scoped>
	.messageBox{width: 200px; height: 120px; position: absolute; top: 50%; left: 50%; margin:-70px 0 0 -100px; border:1px solid #ccc; border-radius: 4px; box-shadow:3px 3px 3px 3px #ccc; background: #fff; z-index: 2; padding-top: 10px;}
	.messageBox h2{text-align: center; font-size: 18px; line-height: 40px;}
	.messageBox P{text-align: center; font-size: 16px; line-height: 40px;}
	.messageBox .choose{display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex; width: 100%; position: absolute; bottom:0; border-top:1px solid #ccc;}
	.messageBox .choose > div{flex:1; text-align: center; line-height: 30px; border-right:1px solid #ccc;}
	.messageBox .choose > div:last-child{border-right:none;}
</style>