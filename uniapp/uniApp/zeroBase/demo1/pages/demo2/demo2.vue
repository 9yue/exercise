<template>
	<view>
		<view>v-on</view>
		<view @click="onclick">{{title}}</view>
		<!-- <view class="box"  :style="{background:bgColor}"></view> -->
		<view class="box"  :style="{background:bgColor}" @click="btnClick">
			{{random}}
		</view>
		<!-- 对象方式 -->
		<view class="box" :class="{box2:state}" @click="clickBox2"></view>
		<!-- 三目运算 -->
		<view class="box" :class="state ? 'box2':''" @click="clickBox2"></view>
		
		<!-- 小案例：点击导航高亮 -->
		<view class="nav-content">
			<view class="item" :class="{active:index==navIndex}" v-for="(item,index) in nav" @click="clickNav(index)">{{item.title}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'点击我',
				bgColor:"pink",
				random:0,
				state:false,
				nav:[{id:1,title:'番剧'},
					{id:2,title:'国创'},
					{id:3,title:'综艺'},
					{id:4,title:'动画'},
					{id:4,title:'鬼畜'}],
				navIndex:0
			};
		},
		methods:{
			onclick(){
				this.title="已修改"
			},
			btnClick(){
				let aa=String(Math.random())
				let color="#"+String(Math.random()).substr(3,6)
				this.bgColor=color
				this.random=Math.round(Math.random() * 100);
			},
			clickBox2()
			{
				this.state=!this.state
			},
			clickNav(e)
			{
				console.log(e)
				this.navIndex=e
			}
		}
	}
</script>

<style lang="scss">
.box
{
	width: 250rpx;
	height: 250rpx;
	background: skyblue;
}
.box2{
	width: 350rpx;
	border-radius: 5px;
	background: hotpink;
}
.nav-content
{
	display: flex;
	justify-content: space-around;
	margin-top: 15px;
	.item
	{
		flex: 1;
		text-align: center;
		line-height: 80rpx;
		background: palegoldenrod;
		&.active{
			background: skyblue;
			color: #fff;
		}
	}
	
}
</style>
