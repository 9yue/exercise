<template>
	<view>
		<view class="content">
			<view class="body">
				<view class="title">{{all.title}}</view>
				<view class="text">{{all.body}}</view>
			</view>
			<view class="comment">
				<view class="c-title">评论</view>
				<view v-for="item in comments" :key="item.id" class="c-body">
					<view class="name">{{item.name}}</view>
					<view class="email">{{item.email}}</view>
					<view class="text">{{item.body}}</view>
				</view>
			</view>

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
				all: {},//文章详情
				comments:[],//评论
			};
		},
		onLoad(data) {
			uni.showLoading({
				title: "加载详情..."
			})
			this.id=data.id;
			this.getDetail()
			this.getComment()
		},
		methods: {
			// 文章详情
			getDetail() {
				uni.request({
					url: "https://jsonplaceholder.typicode.com/posts/"+this.id,
					success: (res) => {
						this.all = res.data
					},
					complete() {
						uni.hideLoading()
					}
				})
			},
			// 获取文章相关评论
			getComment(){
				uni.request({
					url: `https://jsonplaceholder.typicode.com/posts/${this.id}/comments`,
					success: (res) => {
						this.comments = res.data
						console.log(this.comments)
					},
					complete() {
						uni.hideLoading()
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {

		padding: 15rpx;

		.body {
			margin-bottom: 40rpx;

			.title {
				font-size: 40rpx;
				font-weight: bold;
				border-bottom: 1px solid #eee;
				padding-bottom: 15rpx;
				margin-bottom: 15rpx;
			}

			.text {
				font-size: 18rpx;
				color: #bbb;
				text-indent: 2em;
			}
		}

		.comment {
			.c-title{
				font-size: 36rpx;
			}
			.c-body{
				border-bottom: 1px solid #eee;
				margin-bottom: 20rpx;
				padding: 10rpx;
				.name,.email
				{
					font-size: 28rpx;
				}
				.email
				{
					color: #1486cc;
				}
				.text
				{
					color: #ccc;
					font-size: 18rpx;
				}
			}
			
		}
	}
</style>
