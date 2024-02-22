<template>
	<view class="container">
		<view class="inputs w100">
			<u-field
				v-model="loginForm.username"
				icon="account"
				:clearable="false"
				label-width="40"
				placeholder="请输入您的账号"
			/>
			<u-field
				v-model="loginForm.password"
				icon="lock"
				:clearable="false"
				label-width="40"
				placeholder="请输入您的密码"
			/>
		</view>
		<view class="w100">
			<u-button shape="circle" :hair-line="false":custom-style="btn" @click="toLog">登录</u-button>
		</view>
		<text class="tip" bind:tap="toRegPage">还没有账号？立即注册</text>
	</view>
</template>toLog

<script>
	import {login} from '../../api/user.js'
	export default {
		data() {
			return {
				loginForm:{
					password:undefined,
					username:undefined
				},
				btn:{
					backgroundColor: '#DEE0EB',
					border:'none'
				}
			};
		},
		methods:{
			toLog(){
				login(this.loginForm).then(res=>{
				  console.log(res);
				  uni.setStorageSync('token', res.data)
				  uni.switchTab({
					url: '/pages/list/list',
				  })
				}).catch(err=>{
				  console.log(err);
				})
			},
			toRegPage(){
				uni.navigateTo({
				      url: '/pages/register/register',
				    })
			}
		}
	}
</script>

<style lang="scss" scoped>
		
	.container{
		padding: 52rpx 56rpx;
		box-sizing: border-box;
		.inputs{
			margin-bottom: 72rpx;
		}
		.tip{
		  color: #648CEB;
		  font-size: 24rpx;
		  margin-top: 32rpx;
		}
	}
	::v-deep{
		.u-field{
			padding-left: 0rpx !important;
		}
		.u-btn{
		}
	}
</style>
