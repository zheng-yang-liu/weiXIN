// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      a:["北京","上海","河北","四川","新疆","保定","陕西","山西","杭州","开封"],
      b:["../../images/1.jpg",
        "../../images/2.jpg",
        "../../images/3.jpg",
        "../../images/4.jpg",
        "../../images/5.jpg"]
  },
// scroll:function(){
//   wx.showToast({
//     title: '滚动了',
//   })
// },
scroll2:function(){
  wx.showToast({
    title: '滚动到了最后',
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})