<template>
	<view>
		<view @click="goBack">uni.navigateBack关闭当前页面，返回上一页面或多级</view>
		<form @submit="formSubmit">
			<view class="row">
				<input name="username" placeholder="请输入姓名" />
			</view>
			<view class="row">
				<textarea name="message" placeholder="请输入留言"></textarea>
			</view>
			<view class="row">
				<radio-group name="genter">
					<radio value="男" checked="true" />男
					<radio value="女" checked="true" />女
					<radio value="保密" checked="true" />保密
				</radio-group>
			</view>
			<view class="row">
				<picker mode="selector" :range="education" @change="selectEdu" name="edu">
					点击选择学历：{{education[selectIndex]}}
				</picker>
			</view>
			<button form-type="submit" type="primary">提交表单</button>
			<button form-type="reset">重置表单</button>
			{{FormData}}
		</form>
		
		<view>计算综合</view>
		<input type="number" placeholder="请输入第一个值" v-model.number="value1"/>
		<input type="number" placeholder="请输入第二个值" v-model.number="value2"/>
		<view>结果:{{sum}}</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				education:['高中','大专','本科','研究生','博士'],
				selectIndex:'',
				FormData:{},
				value1:0,
				value2:0
			};
		},
		computed:{
			sum()
			{
				return this.value1+this.value2
			}
		},
		onLoad(data) {
			console.log(data)
		},
		// 在demo4.vue页面，向index通过事件传递数据
		// onLoad: function(option) {
		//   // const eventChannel = this.getOpenerEventChannel();
		//   const eventChannel=this.getOpenerEventChannel();
		//   console.log(eventChannel)
		//   console.log('------')
		//   eventChannel.emit('acceptDataFromOpenedPage', {data: '向index传递demo4的数据'});
		//   eventChannel.emit('someEvent', {data: '向index传递监听demo4的someEvent方法数据'});
		//   // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
		//   eventChannel.on('acceptDataFromOpenerPage', function(data) {
		//     console.log(data)
		//   })
		// },
		methods:{
			goBack()
			{
				uni.navigateBack()
				console.log(getCurrentPages())
			},
			selectEdu(e){
				console.log(e.detail.value)
				this.selectIndex=e.detail.value
			},
			formSubmit(e)
			{
				console.log('formt提交')
				console.log(e.detail.value)
				this.FormData=e.detail.value
				this.FormData.edu=this.education[this.selectIndex]
			}
		}
	}
</script>

<style lang="scss">
form{
	display: block;
	padding: 20rpx;
	.row
	{
		min-height: 80rpx;
		padding: 10rpx;
		border-radius: 5rpx;
		border: 1px solid #eee;
		margin-bottom: 10rpx;
	}
}

</style>
