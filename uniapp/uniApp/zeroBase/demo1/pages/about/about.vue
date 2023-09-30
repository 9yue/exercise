<template>
	<view>
		<pubtitle title="关于" subtitle="这是关于我们"></pubtitle>
		<navigator url="/pages/list/list" open-type="redirect">新闻列表</navigator>
		<navigator url="/pages/index/index" open-type="reLaunch">返回首页</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad() {
			console.log('aaa')
			uni.setTabBarItem({
			  index: 0,
			  text: '测试222',
			  pagePath:'pages/list/list'
			})
		}
	}
</script>

<style lang="scss">

</style>
