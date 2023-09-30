<template>
	<view class="out">
		<view class="tit">使用js路由</view>
		<view @click="goDemo4">点击跳转到demo4</view>
		<view @click="goDemo">uni.redirectTo跳转到demo.vue</view>
		<view @click="goAbout">uni.reLaunch跳转到任何一个页面</view>
		<view @click="goTab">uni.switchTab跳转到tabBar页面路径</view>
		
		<view>------------------------------------</view>
		<!-- 使用 .native修饰符调用父组件方法-->
		<!-- <pubtitle :title="title" subtitle="这是首页" :testarr="[2,3,4]" @getValue="changeValue" @click.native="selfFunction" @changeTitle="changeTit"></pubtitle> -->
		<!-- 使用.sync，子组件可以改变title和subtitle -->
		<pubtitle :title.sync="title" :subtitle.sync="subtitle" :testarr="[2,3,4]" @getValue="changeValue" @click.native="selfFunction" @changeTitle="changeTit"></pubtitle>
		<view>{{childValue}}</view>

		<navigator url="/pages/list/list" open-type="switchTab">新闻列表</navigator>
		<navigator url="/pages/about/about" open-type="reLaunch">关于我们</navigator>

		<view class="tit">表单组件</view>
		<view>button</view>
		<button size="default" type="warn" plain>默认按钮</button>
		<button size="mini" type="primary">小按钮</button>
		<view>input</view>
		<input class="uni-input" focus placeholder="自动获得焦点" />
		<view class="tit">Video</view>
		<!-- <video src="/static/images/media.mp4" autoplay></video> -->

		<image src="/static/images/pic7.jpg" class="mypic"></image>
		<image src="/static/images/pic7.jpg" class="mypic" mode="heightFix"></image>
		<image src="/static/images/pic7.jpg" class="mypic" mode="widthFix"></image>
		<!-- 保持纵横比缩放图片，只保证图片的短边能完全显示出来 -->
		<image src="/static/images/pic7.jpg" mode="aspectFill" class="mypic"></image>
		<!-- 保持纵横比缩放图片，使图片的长边能完全显示出来 -->
		<image src="/static/images/pic7.jpg" mode="aspectFit" class="mypic"></image>

		<view class="tit">swiper滑动</view>
		<swiper autoplay indicator-dots indicator-color="rgba(255,255,255,.5)" indicator-active-color="#ffffff"
			class="swiper">
			<swiper-item>
				<image src="/static/images/pic1.jpg" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
				<image src="/static/images/pic2.jpg" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
				<image src="/static/images/pic3.jpg" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
				<image src="/static/images/pic4.jpg" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
				<image src="/static/images/pic5.jpg" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
				<image src="/static/images/pic6.jpg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>

		<view class="tit">scroll-view滚动视图</view>
		<scroll-view class="scroll" scroll-x="true">
			<view class="group">
				<view>111</view>
				<view>111</view>
				<view>111</view>
				<view>111</view>
				<view>111</view>
				<view>33</view>
				<view>22</view>
				<view>44</view>
			</view>
		</scroll-view>
		<view class="box"></view>
		<view class="block"></view>
		<icon type="info" size="26" />info
		<icon type="warn" size="26" />warn
		<icon type="waiting" size="26" />waiting
		<icon type="cancel" size="26" />cancel
		<icon type="download" size="26" />download
		<view>uniapp</view>
		<view>web前端开发</view>
		<text selectable>view替换div,</text>
		<text>text替换span</text>
	<!-- 	<text space="emsp" decode>vue &lt; js</text> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				childValue:'接受子组件的值',
				title:'首页',
				subtitle:'这是首页'
			};
		},
		methods:{
			// 在起始页面跳转到demo4.vue页面，并监听demo4.vue发送过来的事件数据
			goDemo4()
			{
				uni.navigateTo({
					url: '/pages/demo4/demo4?id=1&text=测试',
					  events: {
					    // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
					    acceptDataFromOpenedPage: function(data) {
					      console.log(data)
					    },
					    someEvent: function(data) {
					      console.log(data)
					    }
					  },
					  success: function(res) {
					    // 通过eventChannel向被打开页面传送数据
					    res.eventChannel.emit('acceptDataFromOpenerPage', { data: '这是index页面的数据' })
					  }
				})
			},
			goDemo()
			{
				uni.redirectTo({
					url:'/pages/demo/demo?id=1',
					success(res){
						// console.log(res)
					},
					fail(err){
						console.log(err)
					},
					complete(res){
						// console.log('complete')
						// console.log(res)
					}
				})
			},
			goAbout()
			{
				// uni.reLaunch({
				// 	url:'/pages/about/about'
				// })
				uni.reLaunch({
					url:'/pages/demo4/demo4'
				})
			},
			goTab()
			{
				uni.switchTab({
					url:'/pages/list/list'
				})
			},
			changeValue(e)
			{
				console.log(e)
				this.childValue=e;
			},
			selfFunction()
			{
				console.log('在子组件中使用自己的方法')
			},
			changeTit(title)
			{
				console.log(title)
				this.title=title
			}
		}
	}
</script>

<style lang="scss">
	.mypic {
		width: 400rpx;
		height: 400rpx
	}

	.out {
		.box {
			width: 200px;
			height: 200px;
			background: pink;
		}

		.block {
			width: 250rpx;
			height: 200rpx;
			background: #aaffff;
		}

		.tit {
			font-size: 18px;
			font-weight: bold;
			margin: 20rpx 0px;
		}
	}

	.scroll {
		border: 1px solid red;
		box-sizing: border-box;

		.group {
			white-space: nowrap;

			view {
				width: 200rpx;
				height: 200rpx;
				background: #aaffff;
				margin-left: 4px;
				display: inline-block;
			}
		}
	}

	.swiper {
		height: 400rpx;

		swiper-item {
			padding: 0 10px;
			box-sizing: border-box;

			image {
				width: 100%;
				height: 350rpx;
				border-radius: 10px;
			}
		}
	}
</style>
