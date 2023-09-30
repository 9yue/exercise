<template>
	<view class="home">
		<scroll-view scroll-x="" class="scroll-nav">
			<view class="item" :class="navIndex==index ? 'active':''" v-for="(item,index) in navArr" :key="item.id" @click="navClick(index,item.id)">
				{{item.classname}}
				</view>
		</scroll-view>
		<view class="list">
			<view class="row" v-for="(news,index) in newsArr" :key="news.id">
				<newsbox @click.native="goDetail(news)" :item="news"></newsbox>
			</view>
		</view>
		<view v-if="!newsArr.length" class="nodata">
			<image src="../../static/images/nodata.png" mode="aspectFill"></image>
		</view>
		<view class="dataState" v-if="newsArr.length">
			<view v-if="dataLoadState==1">加载数据中...</view>
			<view v-if="dataLoadState==2">没有更多了~~~</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navArr: [],//导航数据
				navIndex: 0,//选中导航坐标
				newsArr:[],//新闻列表数据
				currentPage:1,//当前页面
				dataLoadState:0,//数据加载状态 0默认  1加载中  2没有更多了
				
			}
		},
		onLoad() {
			this.getNav()
			this.getNews()
		},
		onReachBottom()
		{
			if(this.dataLoadState==2)
			{
				return
			}
			this.dataLoadState=1
			this.getNews()
		},
		methods: {
			// 获取导航数据
			getNav() {
				uni.request({
					url: "https://ku.qingnian8.com/dataApi/news/navlist.php",
					success: res => {
						this.navArr = res.data;
					}

				})
			},
			// 获取新闻列表
			getNews(id=50)
			{
				uni.request({
					url:"https://ku.qingnian8.com/dataApi/news/newslist.php",
					data:{
						cid:id,//分类id
						page:this.currentPage
					},
					success: res => {
						if(res.data.length==0)
						{
							this.dataLoadState=2
						}
						this.newsArr = [...this.newsArr,...res.data]
						this.currentPage+=1
					}
				
				})
			},
			// 点击切换导航
			navClick(index,id){
				this.navIndex=index
				this.dataLoadState=0
				this.currentPage=1
				this.newsArr=[]
				this.getNews(id)
			},
			goDetail(item) {
				uni.navigateTo({
					url: `/pages/detail/detail?cid=${item.classid}&id=${item.id}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.scroll-nav {
		background: #f7f8fa;
		white-space: nowrap;
		line-height: 100rpx;
		position: fixed;
		top: var(--window-top);
		z-index: 10;

		.item {
			display: inline-block;
			margin: 0rpx 30rpx;
			font-size: 36rpx;

			&.active {
				color: #30c27d;
			}
		}

		/deep/ ::-webkit-scrollbar {
			width: 4px !important;
			height: 1px !important;
			overflow: auto !important;
			background: transparent !important;
			-webkit-appearance: auto !important;
			display: block;
		}
	}

	.list {
		background: #fff;
		padding: 20rpx;
		padding-top: 110rpx;

		.row {

			padding: 20rpx 0rpx;
			border-bottom: 1px dashed #eee;
		}
	}
	.nodata 
	{
		display: flex;
		justify-content: center;
		image{
			width:500rpx;
		}
	}
	.dataState
	{
		text-align: center;
		view
		{
			font-size: 26rpx;
			line-height: 50rpx;
			color: #888;
		}
	
	}
</style>
