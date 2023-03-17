// ../cook/cook.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiabao:["../../images/haibao/haibao.jpg",
            "../../images/haibao/haibao-1.jpg",
            "../../images/haibao/haibao-2.jpg",
            "../../images/haibao/haibao-3.jpg"
          ],
    nav:[],
    headline:[]

  },
  initNav(){
    var a=[];
    var ob0=new Object();
    ob0.text="菜谱分类";
    ob0.icon="../../images/icon/fenlei.jpg";
    ob0.url="../fenlei/fenlei";
    a[0]=ob0;

    var ob1=new Object();
    ob1.text="视频";
    ob1.icon="../../images/icon/shipin.jpg";
    ob1.url="../shipin/shipin";
    a[1]=ob1;

    var ob2=new Object();
    ob2.text="美食";
    ob2.icon="../../images/icon/meishi.jpg";
    ob2.url="../meishi/meishi";
    a[2]=ob2;

    var ob3=new Object();
    ob3.text="闪购";
    ob3.icon="../../images/icon/shangou.jpg";
    ob3.url="../shangou/shangou";
    a[3]=ob3;
    return a;
  },
//创建一个头条的数组
initHead(){
  var a=[];
  var ob0=new Object;
  ob0.img="../../images/list/food-1.jpg";
  ob0.title="爱心早餐";
  ob0.type="健康养生";
  ob0.browse="208浏览";
  ob0.comment="8评论";
  a[0]=ob0;

  var ob1=new Object;
  ob1.img="../../images/list/food-2.jpg";
  ob1.title="想喝咖啡";
  ob1.type="家庭医生";
  ob1.browse="300浏览";
  ob1.comment="12评论";
  a[1]=ob1;

  var ob2=new Object;
  ob2.img="../../images/list/food-3.jpg";
  ob2.title="多吃橘子营养好";
  ob2.type="在线养生";
  ob2.browse="500浏览";
  ob2.comment="34评论";
  a[2]=ob2;

  var ob3=new Object;
  ob3.img="../../images/list/food-4.jpg";
  ob3.title="搜狐新闻，多用手机";
  ob3.type="家庭养生";
  ob3.browse="400浏览";
  ob3.comment="300评论";
  a[3]=ob3;

  var ob4=new Object;
  ob4.img="../../images/list/food-5.jpg";
  ob4.title="困了还想喝咖啡";
  ob4.type="家庭医生";
  ob4.browse="400浏览";
  ob4.comment="10评论";
  a[4]=ob4;
  return a;
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
    var a=this.initNav();
    this.setData({nav:a});

    var b=this.initHead();
    this.setData({headline:b});
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