<template>
	<view class="pub-tit">
		<view class="main-tit" @click="ClickTitle">{{title}}</view>
		<view class="sub-tit">{{subtitle}}</view>
		<view class="sub-tit">{{testarr}}</view>
		<view class="box"></view>
		<view>----------组件之间传值--------</view>
		<input type="text" placeholder="请输入向父组件传的值" @input="pushValue"/>
	</view>
</template>

<script>
	export default {
		name: "pubtitle",
		props:{
			title:{
				type:String,
				default:'主标题'
			},
			subtitle:{
				type:String,
				default:'这是副标题'
			},
			testarr:{
				type:Array,
				default(){
					return [1,2,3]
				}
			}
		},
		data() {
			return {

			};
		},
		methods:{
			pushValue(e)
			{
				this.$emit('getValue',e.detail.value)
			},
			ClickTitle()
			{
				this.$emit('update:title','.sync修饰符修改标题')
				this.$emit('update:subtitle','.sync修饰符修改副标题')
			}
		}
	}
</script>

<style lang="scss">
	.pub-tit {
		background: pink;
		text-align: center;
		color: #fff;
		padding: 20rpx 0px;
		.main-tit
		{
			font-size: 22px;
		}
		.sub-tit
		{
		}
		.box
		{
			width: 80rpx;
			height: 10rpx;
			background: hotpink;
			border-radius: 5rpx;
			display: inline-block;
		}
	}
</style>
