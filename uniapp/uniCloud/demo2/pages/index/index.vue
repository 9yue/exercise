<template>
	<view class="content">
		<view v-for="item in listArr" :key="item.id">
			<image :src="item.picurl" mode="aspectFill"></image>
			<view>{{item.title}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listArr:[]
			}
		},
		onLoad() {
			uniCloud.callFunction({
				name:"myCloudFun",
				num:3
			}).then(res=>{
				console.log(res);
				this.listArr=res.result
			})
		},
		methods: {

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
