<template>
	<view class="content">
		<view @click="showToast">显示消息提示框</view>
		<view @click="clickModel">显示模态框</view>
		<view @click="showMenu">弹出菜单</view>
		<navigator open-type="reLaunch" url="/pages/list/list">跳转页面</navigator>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				menu:['猫条','鸡胸肉','猫粮']
			}
		},
		onLoad() {

		},
		methods: {
			clickModel()
			{
				uni.showModal({
					title:'测评',
					content:'你认为小福是猪咪吗',
					cancelText:'no',
					cancelColor:'#ff0000',
					confirmText:'yes',
					success(res)
					{
						if(res.confirm)
						{
							console.log('你的答案是：yes')
						}
						else
						{
							console.log('你的答案是：no')
						}
					}
				})
			},
			showMenu()
			{
				uni.showActionSheet({
					title:'小福爱吃食物',
					itemList:this.menu,
					success:(res)=> {
						console.log(res.tapIndex)
						console.log('小福爱吃'+this.menu[res.tapIndex]);
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				})
			},
			showToast()
			{
				uni.showToast({
					title: '标题',
					icon:'loading',
					mask:true,
					duration: 2000
				});
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
