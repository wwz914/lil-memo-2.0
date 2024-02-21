<template>
	<view>
		<custom-tab-bar v-show="0" ref="customTabBar" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onShow() {
		  this.$nextTick(() => {
		        this.$refs.customTabBar.getTabBar().setData({
		          selected: 1
		        })
		      })
		}
	}
</script>

<style lang="scss">

</style>
