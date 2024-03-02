<template>
	<scroll-view class="list-container">
		<view class="container">
			<view class="search w100 flex">
				<image style="width: 40rpx;height: 40rpx;;" src="../../static/images/mlist/search.png" @click="show=true" mode="scaleToFill"></image>
				<u-input class="right" placeholder="搜索..."></u-input>
			</view>
			<view class="noteLists">
				<card :note-data="i" v-for="i in note" :key="i.noteId" @op-click="opHandler" @note-click="noteHandler"></card>
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
				  <image src="../../static/images/mlist/refresh.png" mode="scaleToFill"/>
				</view>
				<view class="floatWindow" @click="addnote">
				  <image src="../../static/images/mlist/new.png" mode="scaleToFill"/>
				</view>
			  </view>
			<u-popup v-model="show">
				<view class="w100 items">
					<div class="item" @click="all">全部</div>
					<div class="item" @click="huishouzhan">回收站</div>
				</view>
			</u-popup>
			<u-popup v-model="opShow" mode="bottom" border-radius="20">
				<view class="op-items">
					<view class="item flex" @click="setTop">置顶</view>
					<view class="item flex" @click="remove">删除</view>
					<view class="item flex">加密</view>
					<view class="item flex" @click="setCate">分类</view>
					<view class="item flex" @click="copy">复制</view>
					<view class="item flex cancel" @click="cancel">取消</view>
				</view>
			</u-popup>
			<u-select v-model="cateShow" :list="cateList" @confirm="confirmCate"></u-select>
		</view>
		<custom-tab-bar v-show="0" ref="customTabBar" />
	</scroll-view>
</template>

<script>
	import {card} from '../../components/card/card.vue'
	import {getCate} from '../../api/classification.js'
	import {getLists,toTopAction,removeNote,setCate} from '../../api/list.js'
	export default {
		data() {
			return {
				tip:true,
				show:false,
				opShow:false,
				cateShow:false,
				note:[],
				cateList:[],
				queryForm:{
				  pageNum:1,
				  pageSize:100,
				  recycleBin:0,
				},
				setCateForm:{},
			};
		},
		components:{card},
		methods:{
			refresh(){
				this.getNoteList()
			},
			addnote(){
				uni.setStorageSync('editId', )
				uni.navigateTo({
					url: '/pages/edit/edit',
				})
			},
			opHandler(data){
				this.opShow=true
				uni.setStorageSync('opId',data)
			},
			noteHandler(data){
				uni.setStorageSync('editId',data)
				uni.navigateTo({
					url:'/pages/edit/edit'
				})
			},
			setTop(){
				let noteId=uni.getStorageSync('opId')
				toTopAction(noteId).then(res=>{
					console.log(res);
					if(res.code==200){
						this.getNoteList()
					}
					this.opShow=false
				}).catch(err=>{
					console.log(err);
				})
			},
			cancel(){
				this.opShow=false
			},
			remove(){
				let noteId=uni.getStorageSync('opId')
				removeNote(noteId).then(res=>{
					console.log(res);
					this.opShow=false
				}).catch(err=>{
					console.log(err);
				})
			},
			copy(){
				uni.showToast({
					title: '已复制',
					duration: 1000
				});
				this.opShow=false
			},
			getNoteList(){
				getLists(this.queryForm).then(res=>{
					this.note=res.rows
				}).catch(err=>{
					console.log(err);
				})
			},
			huishouzhan(){
				this.queryForm.recycleBin=1
				this.show=false
				this.getNoteList()
			},
			all(){
				this.queryForm.recycleBin=0
				this.show=false
				this.getNoteList()
			},
			getCateList(){
				getCate().then(res=>{
					this.cateList=res.data.map(e=>({
						label:e.classifyName,
						value:e.classifyId
					}))
				})
			},
			confirmCate(e){
				console.log(e);
				this.setCateForm.classifyId=e[0].value
				setCate(this.setCateForm).then(res=>{
					console.log(res);
					if(res.code==200){
						uni.showToast({
							title:res.msg,
							duration: 1000
						})
					}
					this.opShow=false
					this.cateShow=false
				})
			},
			setCate(){
				let noteId=uni.getStorageSync('opId')
				this.setCateForm.noteId=noteId
				this.cateShow=true
			},
			closeTip(){
				this.tip=false
			}
		},
		onShow() {
		  this.$nextTick(() => {
			this.$refs.customTabBar.getTabBar().setData({
			  selected: 0
			})
		  })
		  uni.setStorageSync('opId',)
		  uni.setStorageSync('editId',)
		  this.getNoteList()
		  this.getCateList()
		}
	}
</script>

<style lang="scss">
	.list-container{
		background-color: #f8f8f8;
		.container{
			padding-bottom: 96rpx;
		}
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
		  position: fixed;
		  z-index: 2;
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
		.op-items{
			overflow: hidden;
			font-size: 16px;
			font-weight: 400;
			background-color: #F7F7F7;
			.item{
				height: 106rpx;
				align-items: center;
				justify-content: center;
				background-color: #fff;
				border-bottom: 1px solid #E5E5E5;
			}
			.cancel{
				margin-top: 16rpx;
			}
		}
	}
</style>
