<template>
	<view class="card-container flex">
		<view class="left">
			<view class="title">{{noteData.noteTitle}}</view>
			<view class="time">{{noteData.createTime}}</view>
		</view>
		<view class="right">
			<view class="ops">-</view>
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
		created() {
			console.log(this.userData);
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
	.time{
		font-size: 10px;
		color: #D1D1D1;
	}
}
</style>