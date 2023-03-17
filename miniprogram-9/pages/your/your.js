// pages/your/your.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:[]
  },
  createArr:function(){
    var a=[];
    var ob0=new Object();
    ob0.src="../../images/1.png";
    ob0.title="美食乐园";
    ob0.text="浏览次数";
    ob0.count=100;
    a[0]=ob0;

    var ob1=new Object();
    ob1.src="../../images/2.png";
    ob1.title="宠物世界";
    ob1.text="浏览次数";
    ob1.count=300;
    a[1]=ob1;
    
    var ob2=new Object();
    ob2.src="../../images/3.png";
    ob2.title="植物乐园";
    ob2.text="浏览次数";
    ob2.count=1000;
    a[2]=ob2;

    var ob3=new Object();
    ob3.src="../../images/4.png";
    ob3.title="体育世界";
    ob3.text="浏览次数";
    ob3.count=300;
    a[3]=ob3;
    
    var ob4=new Object();
    ob4.src="../../images/5.png";
    ob4.title="美食乐园";
    ob4.text="浏览次数";
    ob4.count=100;
    a[4]=ob4;

    var ob5=new Object();
    ob5.src="../../images/6.png";
    ob5.title="宠物世界";
    ob5.text="浏览次数";
    ob5.count=300;
    a[5]=ob5;
    return a;
  }, 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var b=this.createArr();//调用函数
    this.setData({arr:b});
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