<template>
	<view class="container">
		<view class="info-part w100">
			<view class="avatar">
				<u-avatar :src="src" size="164" @click="toLogin"></u-avatar>
			</view>
			<view class="name">{{name}}</view>
		</view>
		<view class="items w100">
			<view class="item flex" @click="toAccount">
				<view class="left flex">
					<view class="item-icon">
						<img src="../../../static/images/muser/account.png"/>
					</view>
					<text>账号安全</text>
				</view>
				<view class="right" style="color: #CACACA;">></view>
			</view>
			<view class="item flex" @click="show = true">
				<view class="left flex">
					<view class="item-icon">
						<img src="../../../static/images/muser/lock.png"/>		
					</view>
					<text>保险箱</text>
				</view>
				<view class="right" style="color: #CACACA;">></view>
			</view>
		</view>
		<view>
			<u-popup v-model="show" border-radius="15" width="654rpx" height="416rpx" mode="center">
				<view class="pop flex h100">
					<u-input v-model="setPwd.password" type="password" :border="true" placeholder="请输入您的密码" />
					<u-input v-model="setPwd.confirmPwd" type="password" :border="true" placeholder="请再次输入您的密码" />
					<div class="btn">
						<u-button shape="circle" :hair-line="false":custom-style="btn" @click="toSetPwd">确定</u-button>
					</div>
				</view>
			</u-popup>
		</view>
		<custom-tab-bar v-show="0" ref="customTabBar" />
	</view>
</template>

<script>
	import {getInfo} from '../../../api/user.js'
	export default {
		data() {
			return {
				name:undefined,
				show:false,
				setPwd:{
					noteId: 0,
					password: undefined,
					confirmPwd:undefined
				},
				btn:{
					backgroundColor: '#DEE0EB',
					border:'none'
				}
			};
		},
		methods:{
			toLogin(){
				if(!uni.getStorageSync('token')){
					uni.navigateTo({
					  url: '/pages/log/log',
					})
				  }
			},
			toAccount(){
				uni.redirectTo({
					url: '/pages/user/account/account'
				})
			},
			toSetPwd(){
				uni.showToast({
					title: '密码设置成功',
					duration: 1000
				})
				this.show=false
			}
		},
		onShow() {
		  this.$nextTick(() => {
			this.$refs['customTabBar'].getTabBar().setData({
			  selected: 2
			})
		  })
		  getInfo().then(res=>{
			  this.name=res.data.name
		  }).catch(err=>{
			  console.log(err);
		  })
		}
	}
</script>

<style lang="scss">
	.container{
		height: 100vh;
		
		background-color: #F8F8F8;
		.info-part{
			background-color: #648CEB;
			height: 248rpx;
			.avatar{
				width: 164rpx;
				height: 164rpx;
				margin: 16rpx auto;
			}
			.name{
				color: #EFF3FD;
				font-size: 12px;
			}
		}
		.items{
			.item{
				height: 84rpx;
				margin-top: 20rpx;
				padding: 0 40rpx;
				background-color: #fff;
				justify-content: space-between;
				align-items: center;
				.left{
					.item-icon{
						width: 36rpx;
						height: 36rpx;
						img{
							width: 100%;
							height: 100%;
						}
					}
					gap: 8rpx;
				}
			}
		}
		.pop{
			text-align: center;
			flex-direction: column;
			justify-content: space-between;
			padding: 64rpx;
			.btn{
				width: 224rpx;
				height: 72rpx;
				margin: 0 auto;
			}
		}
	}
	.u-input {
		border-radius: 50px !important;
	}
</style>
