<template>
	<view>
		<view>v-if</view>
		<view v-if="type==1">小鱼</view>
		<view v-else-if="type==2">小福</view>
		<view v-else>其他人</view>
		<view>-----------------</view>
		<view>v-show</view>
		<view v-show="isShow">显示</view>
		<view v-show="!isShow">隐藏</view>
		<view>v-for循环数组</view>
		<ul>
			<li v-for="item in names">{{item}}</li>
		</ul>
		<view v-for="item in books">
			<view>书名：{{item.title}}- 价格：{{item.price}}</view>
		</view>
		<view>v-for循环对象</view>
		<view v-for="(value, name, index) in object">
			{{ index }}. {{ name }}: {{ value }}
		</view>
		<view>-----------------</view>
		<view>v-bind</view>
		<image v-bind:src="img"></image>
		<image :src="img"></image>
		<view>-----------------</view>
		<image :src="'/static/images/pic'+i+'.jpg'" v-for="i in [1,2,3]" mode="aspectFill"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 2,
				isShow: true,
				names: ['小鱼', '小福', '小影', '鹏鹏'],
				books: [{
						title: "《世界喧嚣，我很好》",
						price: 55.00
					},
					{
						title: "《是我把你蠢哭了吗》",
						price: 33.05
					},
					{
						title: "《css揭秘》",
						price: 62.11
					}
				],
				object: {
					name: '小福',
					age: 5
				},
				img: "/static/logo.png"
			};
		},
		onLoad(data) {
			console.log(data)
			console.log(getCurrentPages())
		},
		methods:{
		
		}
		// mounted()
		// {
		// 	console.log('使用路由')
		// 	console.log(this.$route.query.id)
		// }
	}
</script>

<style lang="scss">

</style>
