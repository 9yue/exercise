<template>
	<view class="news">
		<image :src="item.picurl" mode="aspectFill"></image>
		<view class="text">
			<view class="title">{{item.title}}</view>
			<view class="info" v-if="!item.looktime">
				<view>{{item.author}}</view>
				<view>{{item.hits}}浏览</view>
			</view>
			<view class="info" v-else>
				<view>浏览时间</view>
				<view>{{item.looktime}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"newsbox",
		props:{
			item:{
				type:Object,
				default(){
					return {
						title:"击败日韩，国产系能源车打入BBA老巢，电动车打针打饭打水测试测试",
						author:"市场观察",
						hits:999,
						picurl:"../../static/images/nopic.jpg",
						looktime:null
					}
				}
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.news
	{
		display: flex;	
		image{
			width: 220rpx;
			height: 140rpx;
		}
		.text
		{
			padding-left: 20rpx;
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.title
			{
				font-size: 33rpx;
				color: #333;
				display: -webkit-box;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
			.info
			{
				display: flex;
				font-size: 18rpx;
				color: #9d9d9d;
				view
				{
					margin-right: 10rpx;
				}
			}
		}
	}

</style>