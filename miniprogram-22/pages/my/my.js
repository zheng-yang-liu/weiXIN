// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    audioSrc:"http://www.ihaoge.net/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_14882678&response=res&format=mp3|  aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3",
    poster:"https://ts1.cn.mm.bing.net/th/id/R-C.d494c9ed4400c123149ea9d5217cd860?rik=%2bFKwnWUa%2fegIhw&riu=http%3a%2f%2fgrassland.china.com.cn%2fimages%2f2020-07%2f03%2f5d8d6430-f143-480a-bd8c-734b531eaa4b.jpg&ehk=QlJVNnmsWl7n5nDZNUDz2ETPosQ%2bxacIUVCfyPI0rd0%3d&risl=&pid=ImgRaw&r=0",
    videoSrc:"http://vfx.mtime.cn/Video/2019/03/13/mp4/190313094901111138.mp4",
    msg:"",
  },
  // 播放播放音频事件
  play(){
    wx.showToast({
      title: '开始播放',
    })
  },
  // 暂停音乐事件
  pause(){
    wx.showToast({
      title: '暂停了',
    })
  },
  // 弹幕文本框事件
  ch(e){
    var x=e.detail.value;
    this.setData({msg:x});
  },
  // 发送弹幕按钮事件
  tap(){
    var context=wx.createVideoContext('v');
    context.sendDanmu({
      text:this.data.msg,
      color:"red"
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