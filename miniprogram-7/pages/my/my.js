// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:"河北省保定市",
    name:"煦炎",
    course:["数学","英语","语文","体育","政治"],
    student:{name:"花城",sex:"男",age:19},
    a:10,
    b:20,
    c:30,
    condition:true
  },
click(){
  // this：当前对象
  // setData:1、修改变量2、把后台的数据推送到前台
  this.setData({
    address:"河北省沧州市",
    // 改变json格式数据的改法
    student:{name:"谢怜",sex:"女",age:18}
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