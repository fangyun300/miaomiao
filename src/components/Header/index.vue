<template>
	<header id="header">
			<h1>{{title}}</h1>
		</header>
</template>

<script>

export default {
  name: 'Header',
  props:{
  	title:{
  		type:String,
  		default:'喵喵影院'
  	}
  }
}
</script>

<style scoped>
#header{position: fixed;
        top: 0;
        left:0;
        height: 40px;
        width: 100%;
        background-color: #e54847;
        z-index: 10;
        text-align: center;
        line-height: 40px;
        font-size: 18px;
        color: #fff;}
#header h1{ font-size: 18px; }
</style>
