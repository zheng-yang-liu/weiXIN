// pages/weizhi/weizhi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:1,
    latitude:1,
    name:"",
    add:""

  },
  //获取当前位置函数
  getloc(){
    var that=this;
    wx.getLocation({
     type:"ags84",
     success:function(e){
      that.setData({longitude:e.longitude,latitude:e.latitude})
     }
    })
  },
  //选择一个位置
  chooseloc(){
    var that=this;
    wx.chooseLocation({
      success:function(e){
        that.setData({
          longitude:e.longitude,
          latitude:e.latitude,
          name:e.name,
          add:e.address})
      }
    })
  },
  //选择一个位置
  chooseloc2(){
    var that=this;
    wx.chooseLocation({
      longitude:116.316833,
      latitude:39.998877,

      success:function(e){
        that.setData({
          longitude:e.longitude,
          latitude:e.latitude,
          name:e.name,
          add:e.address})
      }
    })
  },
  //打开位置
  openloc(){
   wx.openLocation({
    longitude:116.316833,
    latitude:39.998877,
    name:"beijin",
    address:"sssss"
   }) 
  },
  //获取当前位置并打开
  geranfopenloc(){
    wx.getLocation({
      type:"gci02",
     success:function(e){
       var lon=e.longitude;
       var lat=e.latitude;
       wx.openLocation({
         latitude: lat,
         longitude: lon,
       })

     }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //sthis.getloc(),
    // this.chooseloc2()
    // this.openloc();
    this. geranfopenloc()
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