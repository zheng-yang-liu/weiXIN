// pages/my/my.js
//创建数据库的引用
const db=wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    a:[],
  },
  //数据库查询的函数
  select(){
    var that=this;
    db.collection("phone").get(
      {
        success:function(e){
          var a=e.data
          // 验证数据
          // 1、控制台
          console.log(a[1].name);
          // 2、消息框
          wx.showToast({
            title: a[1].name,
          })
          //3、绑定到前台显示
          that.setData({a:e.data})
        }
      }
    );
  },

  //按照条件筛选
  select2(){
    var that = this;
    db.collection("phone")
    .where({name:"华为手机",price:5000})
    .get(
      {
        success:function(e){
           //3、绑定到前台显示
           that.setData({a:e.data})
        }
      }
    )
  },
  //插入数据到数据库
  input(){
    db.collection("phone")
    .add({data:{name:"小米",price:500}})
  },
  //数据库的删除函数
  del(){
    db.collection("phone")
    .where({name:"小米"})
    .remove();
  },
  //修改数据库的数据
  up(){
    db.collection("phone")
    .where({price:5000000})
    .update({data:{name:"小米手机",price:100}})
  },
  //复杂的查询函数
  // 排序desc降序
  selece2(){
    var that = this;
    db.collection("phone")
    .orderBy("price","desc")
    .orderBy("name","desc")
    .limit(3)
    .skip(1)
    .get({
      success(e){
        that.setData({a:e.data})
      }
    })
    
  },
  //区间查询(db.command.gt(100)大于)加e为等于
    //区间查询(db.command.lt(100)小于)

  selece3(){
    var that = this;
    var x=db.command;
    db.collection("phone")
    // .where({price:db.command.gte(2000)})
    // .where({price:db.command.neq(100)})
    // .where({price:db.command.in([5000,1999])})
    // .where({price:db.command.gte(1000).and(db.command.lte(4000))})
    // .where({name:db.command.eq("华为手机").or(db.command.eq("小米手机"))})
    .where({price:x.not(x.eq(100))})
    .get({
      success(e){
        that.setData({a:e.data})
      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // this.select();
    // this.input();
    // this.del();
    // this.up();
    this.selece3();
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