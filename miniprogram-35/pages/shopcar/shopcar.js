// pages/shopcar/shopcar.js
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
    object1.cpsrc='../shopcar/image/cp.png'
    object1.tbsrc='../shopcar/image/tb.png';
    object1.name='DMK氨基酸喷雾';
    object1.jieshao='商品规格';
    object1.money='￥840';
    array[0] = object1;

    var object2 = new Object();
    object2.cpsrc='../shopcar/image/cp.png'
    object2.tbsrc='../shopcar/image/tb.png';
    object2.name='DMK氨基酸喷雾';
    object2.jieshao='商品规格';
    object2.money='￥840';
    array[1] = object2;

    var object3 = new Object();
    object3.cpsrc='../shopcar/image/cp.png'
    object3.tbsrc='../shopcar/image/tb.png';
    object3.name='DMK氨基酸喷雾';
    object3.jieshao='商品规格';
    object3.money='￥840';
    array[2] = object3;

    var object4 = new Object();
    object4.cpsrc='../shopcar/image/cp.png'
    object4.tbsrc='../shopcar/image/tb.png';
    object4.name='DMK氨基酸喷雾';
    object4.jieshao='商品规格';
    object4.money='￥840';
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