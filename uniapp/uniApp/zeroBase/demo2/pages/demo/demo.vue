<template>
	<view>
		<view v-for="(item,index) in list" :key="item.id" class="list" @click="goDetail(item.id)">
			<view class="title">{{index+1}}.{{item.title}}</view>
			<view class="subtitle">{{item.body}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [], //列表数据
			};
		},
		onLoad() {
			uni.showLoading({
				title:'正在数据中...'
			})
			this.getList();
		},
		methods:{
			getList()
			{
				// 获取列表数据
				uni.request({
					url: "https://jsonplaceholder.typicode.com/posts",
					success: (res) => {
						this.list = res.data
					},
					complete() {
						uni.hideLoading()
					}
				})
			},
			goDetail(id)
			{
				uni.navigateTo({
					url:'/pages/detail/detail?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
	.list {
		padding: 12rpx;
		border-bottom: 1px solid #eee;

		.title {
			font-size: 30rpx;
			margin-bottom: 10rpx;
		}

		.subtitle {
			color: #b8b8b8;
			font-size: 16rpx;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
</style>
