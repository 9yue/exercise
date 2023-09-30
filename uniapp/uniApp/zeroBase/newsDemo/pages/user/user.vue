<template>
	<view>
		<view class="banner">
			<image src="/static/images/history.png" mode="aspectFill"></image>
			<view class="text">浏览历史</view>
		</view>
		<view class="list">
			<view class="row" v-for="item in list">
				<newsbox :item="item" @click.native="goDetail(item)"></newsbox>
			</view>
			<view v-if="!list.length" class="nohistory">
				<image src="../../static/images/nohis.png" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			};
		},
		onShow()
		{
			this.list=uni.getStorageSync('lookHistory')
		},
		methods:{
			goDetail(item) {
				uni.navigateTo({
					url: `/pages/detail/detail?cid=${item.classid}&id=${item.id}`
				})
			}
		}
		
	}
</script>

<style lang="scss">
	.banner
	{
		background:#f8f8f8;
		display:flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height:300rpx;
		image{
			width: 120rpx;
			height: 120rpx;
			margin-bottom:20rpx;
		}
		.text
		{
			color: #888;
		}
	}
	.list {
		background: #fff;
		padding: 20rpx;

		.row {

			padding: 20rpx 0rpx;
			border-bottom: 1px dashed #eee;
		}
	}
	.nohistory
	{
		display: flex;
		justify-content: center;
	}
</style>
