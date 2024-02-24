<template>
	<view class="container">
		<view class="cateList w100">
			<view class="cate flex" v-for="i in cate" @click="toList(i.classifyId)">
				<view class="left flex">
					<image src="../../../static/images/mcate/file.png" mode="scaleToFill"></image>
					<text>{{i.classifyName}}</text>
				</view>
				<view class="right">
					{{i.noteCount}}>
				</view>
			</view>
		</view>
		<view class="add-part w100 flex">
			<view class="left">
				<input type="text" placeholder="请输入新分类名称" v-model="cateForm.classifyName"/>
			</view>
			<view class="right">新增</view>
		</view>
		<custom-tab-bar v-show="0" ref="customTabBar" />
	</view>
</template>

<script>
	import {getCate} from '../../../api/classification.js'
	export default {
		data() {
			return {
				cateForm:{
					classifyName:undefined
				},
				cate:[]
			};
		},
		methods:{
			toList(id){
				uni.navigateTo({
					url:`/pages/category/list/list?classifyId=${id}`
				})
			}
		},
		onShow() {
		  this.$nextTick(() => {
			this.$refs.customTabBar.getTabBar().setData({
			  selected: 1
			})
		  })
		  getCate().then(res=>{
			  this.cate=res.data
		  })
		}
	}
</script>

<style lang="scss">
.container{
	.cateList{
		.cate{
			height: 104rpx;
			padding: 32rpx 20rpx;
			align-items: center;
			border-bottom: 1px solid #F0F0F0;
			justify-content: space-between;
			.left{
				gap: 22rpx;
				image{
					width: 40rpx;
					height: 40rpx;
					// margin-bottom: -10rpx;
				}
			}
			.right{
				color: #838383;
			}
		}
	}
	.add-part{
		height: 112rpx;
		border-bottom: 1px solid #F0F0F0;
		align-items: center;
		padding: 0 20rpx;
		.left{
			flex: 1;
			input{
				font-size: 16px;
			}
		}
		.right{
			width: 88rpx;
			height: 56rpx;
			line-height: 56rpx;
			border-radius: 5rpx;
			text-align: center;
			color: #fff;
			background-color: #5E8CEE;
		}
	}
}
</style>
