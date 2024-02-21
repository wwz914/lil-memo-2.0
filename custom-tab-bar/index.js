Component({
  data: {
    selected: 0,
    Color:"black",
    selectedColor: "#7395DD",
    list: [
      {
        "pagePath": "/pages/list/list",
        "iconPath": "/static/images/mlist.png",
        "selectedIconPath": "/static/images/s_mlist.png",
        "text": "列表"
      },
      {
        "pagePath": "/pages/category/category",
        "iconPath": "/static/images/mcategory.png",
        "selectedIconPath": "/static/images/s_mcategory.png",
        "text": "分类"
      },
      {
        "pagePath": "/pages/user/user",
        "iconPath": "/static/images/muser.png",
        "selectedIconPath": "/static/images/s_muser.png",
        "text": "我的"
      }
    ]
  }, 
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})