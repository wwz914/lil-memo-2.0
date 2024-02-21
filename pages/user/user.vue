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
		        this.$refs['customTabBar'].getTabBar().setData({
		          selected: 2
		        })
		      })
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
</style>
