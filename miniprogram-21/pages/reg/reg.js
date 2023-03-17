// pages/reg/reg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    province:"",//省份
    city:"",//城市
    vip:false,
    sex:"",
    hobby:[],//爱好
    age:0
  },
  // 提交事件
  submit(e){
    var x=e.detail.value;
    this.setData({
      province:x.province,
      city:x.city,
      vip:x.vip,
      sex:x.sex,
      hobby:x.hobby,
      age:x.age
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