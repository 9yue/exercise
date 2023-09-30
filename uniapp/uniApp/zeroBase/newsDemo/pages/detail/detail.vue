<template>
	<view class="detail">
		<view class="title">{{news.title}}</view>
		<view class="info">
			<view>编辑：{{news.author}}</view>
			<view>发布日期：{{news.posttime}}</view>
		</view>
		<view class="content">
			<rich-text :nodes="news.content"></rich-text>
		</view>
		<view class="statement">
			声明：本站的内容均采集与腾讯新闻，如果侵权请联系管理（17227641@qq.com）进行整改删除，本站进行了内容采集不代表本站及作者观点，若有侵犯请及时联系管理员，谢谢您的支持。
		</view>
	</view>
</template>

<script>
	import {parseTime} from "@/utils/tool.js"
	export default {
		data() {
			return {
				options: {},
				news: {}
			};
		},
		onLoad(res) {
			this.options = res
			this.getData()
		},
		methods: {
			// 获取文章详情
			getData() {
				uni.request({
					url: "https://ku.qingnian8.com/dataApi/news/detail.php",
					data: this.options,
					success: res => {
						res.data.posttime=parseTime(res.data.posttime)
						res.data.content=res.data.content.replace(/<img/gi,'<img style="max-width:100%"')
						this.news = res.data
						this.setHistory()
					}
				})
			},
			//把页面加入浏览记录
			 setHistory()
			 {
				 let history=uni.getStorageSync("lookHistory") || []
				 let data={
					 classid:this.news.classid,
					 id:this.news.id,
					 title:this.news.title,
					 picurl:this.news.picurl,
					 looktime:parseTime(Date.now())
				 }//当前页面数据
				 // 插入前查询当前页面再历史记录下表，-1是不存在
				 let index=history.findIndex(item=>{
					 return item.id==data.id
				 })
				 console.log(index)
				 if(index>=0)
				 {
					 history.splice(index,1)
				 }
				 history.unshift(data)//像原历史记录前插入一条新数据
				 history=history.slice(0,10)
				 uni.setStorageSync('lookHistory',history)
			 }
		}
	}
</script>

<style lang="scss">
	.detail {
		padding: 20rpx;
	}

	.title {
		font-size: 50rpx;
		padding: 20rpx 0rpx;
	}

	.info {
		background: #f6f6f6;
		line-height: 70rpx;
		padding: 0rpx 10rpx;
		font-size: 18rpx;
		color: #6a6965;
		display: flex;
		justify-content: space-between;
	}

	.content {
		padding: 20rpx 0rpx;
	}

	.statement {
		background: #fff0f1;
		color: #ff626c;
		padding: 20rpx;
		border-radius: 10rpx;
	}
</style>
