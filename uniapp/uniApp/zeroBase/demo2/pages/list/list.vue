<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad() {
			uni.showLoading({
				title: '加载中'
			});
			setTimeout(()=>{
				uni.hideLoading()
			},1000)
		},
		onReady() {
			uni.showNavigationBarLoading()
			uni.setNavigationBarTitle({
				title: '新闻列表'
			});
			uni.setNavigationBarColor({
				frontColor:'#ffffff',
				backgroundColor:'#1aa034'
			})
			setTimeout(()=>{
				uni.hideNavigationBarLoading()
			},1000)
		}
	}
</script>

<style lang="scss">

</style>
