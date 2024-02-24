<template>
	<view class="container edit-container">
		<u-input v-model="noteForm.noteTitle" class="w100" height="50" placeholder="请输入您的标题"></u-input>
		<textarea v-model="noteForm.noteContent" placeholder="请输入正文内容"/>
		<view class="floatWindow" @click="addnote"> 
			<image src="../../static/images/medit/ok.png" mode="scaleToFill"/>
		</view>
	</view>
</template>

<script>
	import {addNewNote,note} from '../../api/list.js'
	export default {
		data() {
			return {
				noteForm:{
				      noteId:undefined,
				      noteTitle:'',
				      noteContent:''
				},
			};
		},
		methods:{
			addnote(){
			    let noteId=uni.getStorageSync('editId')
			    if(noteId){
			      this.noteForm.noteId=noteId
			      edit(this.noteForm).then(res=>{
			        console.log(res);
			        if(res.code==200){
			          uni.switchTab({
			            url: '/pages/list/list',
			          })
			        }
			      })
			    }else{
			      addNewNote(this.noteForm).then(res=>{
			        console.log(res);
			        if(res.code==200){
			          uni.switchTab({
			            url: '/pages/list/list',
			          })
			        }
			      })
			    }
			  },
		},
		created() {
			let noteId=uni.getStorageSync('editId')
			if(noteId){
				note(noteId).then(res=>{
					this.noteForm=res.data
				})
			}
		}
	}
</script>

<style lang="scss">
.edit-container{
	text-align: left;
	padding: 32rpx 40rpx;
	.title{
		font-size: 16px;
		height: 50rpx;
		padding-bottom: 16rpx;
	}
	textarea{
	  font-size: 14px;
	  height: 100%;
	  color: #333333;
	  width: 100%;
	  margin-top: 16rpx;
	  padding-top: 24rpx;
	  border-top: 1px solid #F0F0F0;
	}
	.floatWindow{
	  position: absolute;
	  bottom: 2%;
	  right: 4%;
	  z-index: 2;
	  image{
	    width: 88rpx;
	    height: 88rpx;
	  }
	}
}
::v-deep{
	.u-input__input{
		font-size: 16px !important;
		color: #666666 !important;
	}
}
</style>
