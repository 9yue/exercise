<template>
	<view>
		------双向绑定基本使用------
		<view @click="btnClick">{{title}}</view>
		<input type="text" v-model="title"/>
		------v-model留言小案例-----------
		<view class="message">
			<view class="row">
				<input type="text" placeholder="请输入姓名" v-model="message.name"/>
			</view>
			<view class="row">
				<input type="text" placeholder="请输入联系电话" v-model="message.tel"/>
			</view>
			<view class="row">
				<textarea placeholder="请输入留言内容" v-model="message.content"></textarea>
			</view>
			<view >
				<button type="primary" @click="btnSubmit()">提交留言</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'小鱼',
				message:{
					name:'',
					tel:'',
					content:''
				}
			};
		},
		methods:{
			btnClick()
			{
				this.title=Math.random();
			},
			btnSubmit()
			{
				console.log(this.message)
			}
		}
	}
</script>

<style lang="scss">
	.message
	{
		padding: 15rpx;
		font-size: 14px;
		.row
		{
			border: 1px solid #eee;
			min-height:55rpx;
			margin-bottom: 15rpx;
			padding: 5px;
			border-radius: 5px;
		}
	}

</style>
