// pages/ny/ny.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //异步获取缓存
  get1(){
    // 异步缓存
    wx.setStorage(
      {
        key:'001',
        data:{name:"张三",sex:"男",age:18},
        // 回调函数
        success:function(e){
          // wx.showToast({
          //   title: '缓存成功',
          // })
        }
      }
    )
  },
  get2(){
    
    wx.setStorageSync(
      '100', 
      {
        hobbly:"足球",
        add:"卡塔尔",
      }
    )
  },
  
  read1(){
      //实现异步的获取数据
      wx.getStorage({
          key:'100',  
          success:function(e){
            wx.showToast({
              title: e.data.add,
            })
          }    
        })
  },
  //同步获取缓存
  read2(){
     
     var x=wx.getStorageSync('100',)
     wx.showToast({
       title: x.add,
     })

   },
   //异步清除缓存
   del1(){
    wx.removeStorage({
      key: '001',
      success:function(e){
        wx.showToast({
          title:'成功清除缓存'
        })
      }
    })
   },
   //同步清除缓存
   del2(){
    wx.removeStorageSync('001')
   },
   //异步清理所有的缓存清理
   clear1(){
    wx.clearStorage({
      success: (res) => {
        wx.showToast({
          title: 'clear1清理成功',
        })
      },
    })
   },
   //同步清除缓存
   clear2(){
    wx.clearStorageSync();
   },
   //异步获取缓存信息
   getInfo(){
    wx.getStorageInfo({
      success:(option) => {
        wx.showToast({
          title: option.currentSize.toString(),
        })
      }
    })
   },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //同步缓存
    this.get1();
    //清除缓存异步
    //this.del1();
    //同步清除缓存
    //this.del2();
    //异步清理全部缓存
    // this.clear1();
    //同步清理所有缓存
    //this.clear2();
    //异步获取缓存信息
    this.getInfo();
    //同步获取缓存

    //异步读取缓存

    //实现同步获取缓存
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