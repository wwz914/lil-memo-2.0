<template>
	<view class="container">
		<div class="items w100">
			<div class="item flex phone">
				<view>手机账号</view>
				<view>15005988063</view>
			</div>
			<div class="item flex exit" @click="exit">注销账号</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			exit(){
				uni.setStorageSync('token',)
				uni.redirectTo({
					url:'/pages/log/log'
				})
			}
		}
	}
</script>

<style lang="scss">
.container{
	padding-top: 20rpx;
	height: 100vh;
	background-color: #F8F8F8;
	.items{
		padding: 0 40rpx;
		background-color: #fff;
		.item{
			height: 84rpx;
			align-items: center;
			justify-content: space-between;
		}
		.phone{
			border-bottom: 1px solid #F3F3F3;
		}
	}
}
</style>
