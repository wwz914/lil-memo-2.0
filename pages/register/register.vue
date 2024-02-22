<template>
	<view class="container">
		<view class="avatar">
			<u-avatar :src="src" size="164"></u-avatar>
		</view>
		<view class="inputs w100">
			<u-field
				v-model="regForm.name"
				icon="edit-pen"
				:clearable="false"
				label-width="40"
				class="pad0"
				placeholder="请输入昵称"
			/>
			<u-field
				v-model="regForm.username"
				icon="account"
				:clearable="false"
				label-width="40"
				placeholder="请输入您的账号"
			/>
			<u-field
				v-model="regForm.password"
				icon="lock"
				:clearable="false"
				label-width="40"
				type="password"
				placeholder="请输入您的密码"
			/>
		</view>
		<view class="w100">
			<u-button shape="circle" :hair-line="false":custom-style="btn" @click="toReg">注册</u-button>
		</view>
	</view>
</template>

<script>
	import {register,login} from '../../api/user.js'
	export default {
		data() {
			return {
				regForm:{
					name:undefined,
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
			toReg(){
				console.log(123123);
				register(this.regForm).then(res=>{
					console.log(res);
					if(res.code==200){
						login(this.regForm).then(res=>{
						  console.log(res);
						  uni.setStorageSync('token', res.data)
						  uni.switchTab({
							url: '/pages/list/list',
						  })
						}).catch(err=>{
						  console.log(err);
						})
					}
				}).catch(err=>{
					console.log(err);
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
		
	.container{
		padding: 0rpx 56rpx;
		box-sizing: border-box;
		.avatar{
			margin: 52rpx 0;
		}
		.inputs{
			margin-bottom: 72rpx;
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
