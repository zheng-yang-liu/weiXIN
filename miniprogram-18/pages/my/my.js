// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hobby:[],
    b:[
      {value:"游戏",name:"游戏",checked:"true"},
      {value:"跳舞",name:"跳舞",checked:"false"},
      {value:"唱歌",name:"唱歌",checked:"false"},
      {value:"睡懒觉",name:"睡懒觉",chacked:"true"},
    ],
    c:[
      {value:"北京",mark:"北京",checked:"true"},
      {value:"上海",mark:"上海"},
      {value:"保定",mark:"保定"},
      {value:"成都",mark:"成都"},
    ],
    address:[]
  },
  // 复选框
c1(e){
  var a=e.detail.value;
  this.setData({hobby:a});
},
//获取当选按钮
c2(e){
  var x=e.detail.value;
  this.setData({address:x});
  wx.showModal({
    cancelColor: 'cancelColor',
    title:x
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