// pages/chongzhi/chongzhi.js
Page({

  /**
   * 页面的初始数据
   */
  data:{
    array:[]
  },
  onLoad:function(options){
    var array = this.initData();
    this.setData({array:array});
  },
   initData:function(){
    var array = [];
    var object1 = new Object();
    object1.title='充值金额'
    object1.money='￥100.00';
    object1.time='2022-1--30 10:30:34';
    array[0] = object1;

    var object2 = new Object();
    object2.title='充值金额'
    object2.money='￥100.00';
    object2.time='2022-1--30 10:30:34';
    array[1] = object2;

    var object3 = new Object();
    object3.title='充值金额'
    object3.money='￥100.00';
    object3.time='2022-1--30 10:30:34';
    array[2] = object3;

    var object4 = new Object();
    object4.title='充值金额'
    object4.money='￥100.00';
    object4.time='2022-1--30 10:30:34';
    array[3] = object4;

    return array;
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