// pages/text/text.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myname:""
  },
//单行文本框输入事件
  in:function(e){
    var x=e.detail.value;
    this.setData({myname:x});
  },
  foc(e){
    wx:wx.showToast({
      title: '正处于焦点中',
    })
  },
  blur(e){
    wx:wx.showModal({
      cancelColor: 'cancelColor',
      title:"失去焦点"
    })
  },
  //多行文本框输入
  mul(e){
    var x=e.detail.value;
    this.setData({myname:x});
  },
  //换行
  ch(e){
    wx:wx.showToast({
      title: '换行了',
      
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