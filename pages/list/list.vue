<template>
	<scroll-view class="list-container">
		<view class="noteLists">
			<card :note-data="obj"></card>
			<card :note-data="obj"></card>
		</view>
		<custom-tab-bar v-show="0" ref="customTabBar" />
	</scroll-view>
</template>

<script>
	import {card} from '../../components/card/card.vue'
	import {getLists} from '../../api/list.js'
	export default {
		data() {
			return {
				obj:{
					classifyName: null,
					createTime: "2024-02-19 17:50:38",
					isPassword: "0",
					noteId: 854,
					noteTitle: "lalala",
					top: "1"
				},
				queryForm:{
				  pageNum:1,
				  pageSize:100,
				  recycleBin:0,
				},
			};
		},
		components:{card},
		onShow() {
		  this.$nextTick(() => {
			this.$refs.customTabBar.getTabBar().setData({
			  selected: 0
			})
		  })
		  getLists(this.queryForm).then(res=>{
			  console.log(res);
		  }).catch(err=>{
			  console.log(err);
		  })
		}
	}
</script>

<style lang="scss">
	.list-container{
		height: 100vh;
		background-color: #f8f8f8;
		.noteLists{
			padding: 32rpx 24rpx;
		}
	}
</style>
