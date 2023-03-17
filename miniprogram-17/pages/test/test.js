// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodes:[{
      name:"div",
      attrs:{"style":"color:red;background-color:yellow"},
      children:[
        {type:"text",text:"byebye"}
      ]},

      {
        name:"h1",
        attrs:{"style":"color:blue"},
        children:[
          {type:"text",text:"标题"}
        ] },
        
        {
          name:"img",
          attrs:{"src":"../../img/1.png",
                  "style":"width:100px;height:80px"}
        }
  ]
  },
tap(){
  wx:wx.showToast({
    title: 'hhh',

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