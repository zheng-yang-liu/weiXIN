// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    marker:[
      {
        longitude:"115.452900",
        latitude:"38.852000",
        iconPath:"../../images/1.png",
        width:40,
        height:40
      }
    ],
    
    poly:[
      {
        points:[
                  {longitude:115.452900,latitude:38.852000},
                  {longitude:115.45856,latitude:38.85186},
                  {longitude:115.462132,latitude:38.837792}
               ],
        color:"#Ff0000",
        width:10,
        arrowline:true,

      }
    ],

    circle:[
      {
        longitude:"115.452900",
        latitude:"38.852000",
        color:"#Ff0000",
        fillColor:"#c0c0c0",
        strokewidth:2,
        radius:100
      }
    ]
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