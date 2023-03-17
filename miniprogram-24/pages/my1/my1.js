// pages/my1/my1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:"",
    url:[
          "https://img2.baidu.com/it/u=1003272215,1878948666&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
          
          "https://img1.baidu.com/it/u=2995157981,91041597&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
          "https://img2.baidu.com/it/u=2969169350,1551254405&fm=253&fmt=auto&app=120&f=PNG?w=1280&h=800"]
  },
//选择图片函数
  selectPic(){
    var that=this;
    wx.chooseImage({
      count: 9,
      sizeType:["original","compressed"],
      sourceType:["album","camera"],
      success:function(e){
        var x=e.tempFilePaths;
        that.setData({src:x});
        console.log(x);
      }
    })
  },
  // 预览图片函数
  previesPic(){
    wx.previewImage({
      urls: ["https://img2.baidu.com/it/u=2969169350,1551254405&fm=253&fmt=auto&app=120&f=PNG?w=1280&h=800"],
      current:"https://img2.baidu.com/it/u=2969169350,1551254405&fm=253&fmt=auto&app=120&f=PNG?w=1280&h=800"
    })
  },
  //图片保存到路径
  save(){
    //下载文件，b
    wx.downloadFile({
      url: this.data.url[2],
      type:'image',
      success:function(e){
        var x=e.tempFilePath;
        //保存到相册
        wx.saveImageToPhotosAlbum({
          filePath: x,
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //页面加载执行次函数
    //this.selectPic();
    //this.previesPic();
    this.save();
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