// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    country:["中国","美国","英国","日本","韩国","茶香","年后"],
    i:0,
    time:"14:30",
    date:'2022-11-16',
    address:["河北","保定市","竞秀区"]
  },
  c1(e){
    var x=e.detail.value;
    this.setData({i:x});
  },  
  c2(e){
    this.setData({time:e.detail.value});
  },  
  c3(e){
    this.setData({date:e.detail.value});
  },  
  c4(e){
    this.setData({address:e.detail.value});
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