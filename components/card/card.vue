<template>
	<view class="card-container flex">
		<view class="left" @click="noteClick">
			<view class="title">{{noteData.noteTitle}}</view>
			<view class="time">{{noteData.createTime}}</view>
		</view>
		<view class="right flex" @click="opClick">
			<view class="lock" v-show="true"><u-icon name="lock"/></view>
			<view class="top" v-show="noteData.top==1"><u-icon name="bookmark"/></view>
			<image class="opImg" src="../../static/images/mlist/op.png" mode="scaleToFill"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name:"card",
		props:['note-data'],
		data() {
			return {
				
			};
		},
		methods:{
			opClick(){
				this.$emit('op-click',this.noteData.noteId)
			},
			noteClick(){
				this.$emit('note-click',this.noteData.noteId)
			}
		},
		created() {
			// console.log(this.noteData.noteId);
		}
	}
</script>

<style lang="scss">
.card-container{
	width: 702rpx;
	height: 104rpx;
	background-color: #fff;
	justify-content: space-between;
	align-items: center;
	font-size: 14px;
	padding: 0 20rpx 0 40rpx;
	margin-bottom: 16rpx;
	.left{
		flex: 1;
		.time{
			font-size: 10px;
			color: #D1D1D1;
		}
	}
	.right{
		gap: 22rpx;
		align-items: center;
		justify-content: flex-end;
		min-width: 30rpx;
		height: 30rpx;
		font-size: 15px;
		color: #D9D9D9;
		.opImg{
			width: 6rpx;
			height: 30rpx;
			margin-left: 4rpx;
		}
		.lock{
		}
	}
}
</style>