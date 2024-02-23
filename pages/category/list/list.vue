<template>
	<scroll-view class="list-container">
		<view class="container">
			<view class="search w100 flex">
				<image style="width: 40rpx;height: 40rpx;;" src="../../../static/images/mlist/search.png" @click="show=true" mode="scaleToFill"></image>
				<u-input class="right" placeholder="搜索..."></u-input>
			</view>
			<view class="noteLists">
				<card :note-data="i" v-for="i in note" :key="i.noteId"></card>
			</view>
			<view class="tip w100" v-if="tip">
				<view class="content">
					<view>长按笔记可弹出快捷菜单</view>
					<view>点击左上角菜单按钮，可弹出侧边栏菜单</view>
					<view class="close"><text @click="closeTip">×</text>点击此处不再显示该提醒</view>
				</view>
			  </view>
			  <view class="floatWindows">
				<view class="floatWindow" @click="refresh">
				  <image src="../../../static/images/mlist/refresh.png" mode="scaleToFill"/>
				</view>
				<view class="floatWindow" @click="addnote">
				  <image src="../../../static/images/mlist/new.png" mode="scaleToFill"/>
				</view>
			  </view>
			<u-popup v-model="show">
				<view class="w100 items">
					<div class="item">全部</div>
					<div class="item">回收站</div>
				</view>
			</u-popup>
		</view>
		<custom-tab-bar v-show="0" ref="customTabBar" />
	</scroll-view>
</template>

<script>
	import {card} from '../../../components/card/card.vue'
	import {getLists} from '../../../api/list.js'
	export default {
		data() {
			return {
				tip:true,
				show:false,
				note:[],
				queryForm:{
				  pageNum:1,
				  pageSize:100,
				  recycleBin:0,
				},
			};
		},
		components:{card},
		methods:{
			refresh(){
				getLists(this.queryForm).then(res=>{
					this.note=res.rows
				})
			},
			addnote(){
				uni.setStorageSync('editId', )
				uni.navigateTo({
					url: '/pages/edit/edit',
				})
			}
		},
		onShow() {
		  this.$nextTick(() => {
			this.$refs.customTabBar.getTabBar().setData({
			  selected: 0
			})
		  })
		  getLists(this.queryForm).then(res=>{
			  this.note=res.rows
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
		.search{
			gap: 26rpx;
			height: 92rpx;
			align-items: center;
			padding: 26rpx 24rpx;
			margin-bottom: 32rpx;
			background-color: #fff;
			.right{
				flex: 1;
			}
		}
		.noteLists{
			padding: 0 24rpx;
		}
		.tip{
			padding: 0 24rpx;
			.content{
			  font-size: 14px;
			  color: #999999;
			  .close{
			  font-size: 12px;
			  }
			}
		}
		.floatWindows{
		  position: absolute;
		  right: 2%;
		  bottom: 12%;
		  image{
		    width: 80rpx;
		    height: 80rpx;  
		    margin-bottom: 5rpx;
		  }
		}
		.items{
			height: 100%;
			width: 360rpx;
			color:#fff;
			background-color: #648CEB;
			.item{
				height: 80rpx;
				text-align: center;
				line-height: 80rpx;
				border-top:1px solid #7DA3F8;
				border-bottom:1px solid #7DA3F8;
				margin-bottom: -1px;
			}
		}
	}
</style>
