// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    word:"这里是第七史诗Wiki的攻略页面",
    flag:false,
    id:1902,
    count:66666,
    imgUrl:"https://i0.hdslb.com/bfs/game/ae19dc41f9a013f83654f34552b85ef5ed485b7e.jpg",
    url:"https://game.bilibili.com/finalgear/",
    arr:[
      {
        message:"A"
      },
      {
        message:"B"
      },
      {
        message:"C"
      },
      {
        message:"D"
      },
      {
        message:"E"
      }
    ],
    num:[1,2,3,4,5,6,7,8,9],
    isLogin:true,
    users:{
      names:"EPIC7",
      age:2018
    },
    liker:{
      liker:"寇雷",
      count:9999
    },
    loginlist:{
      isLogin:false,
      mobilePhone:0,
      code:""
    },
  },

  changeflag(e){
    this.setData({
      flag:!this.data.flag
    })
  },
  countADD(){
    this.setData({
      count:this.data.count - 10
    })
  },
  login(e){
    console.log(e);
    console.log("clientX:"+e.touches[0].clientX);
    console.log(e.target.dataset.msg);
    this.setData({
      "loginlist.isLogin":false
    })
  },
  getphone(e){
    console.log(e.detail.value)
  },
  childOne(){
    console.log("childOne不会阻止事件冒泡")
  },
  childTwo() {
    console.log("childTwo会阻止事件冒泡")
  },
  parent(){
    console.log("这是父元素")
  },
  openModal(){
    wx.showModal({
      title:"Epic Wiki",
      content:"EPIC7 1ZN",
      cancelText:"不庆祝",
      cancelColor:"red",
      confirmText:"庆祝",
      confirmColor:"green",
      success(res){
        if(res.confirm){
          console.log("庆祝");
          wx.showToast({
            title: '撒花',
            icon: 'success',
            duration: 500
          })
        } else if(res.cancel){
          console.log("不庆祝")
        }
      }
    })
  },
  openAction(){
    wx.showActionSheet({
      itemList: ['拍照上传', '相册上传', '默认头像'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },


  getPhone(e){
    this.setData({
      "loginlist.mobilePhone":e.detail.value
    })
  },
  getCode(e){
    this.setData({
      "loginlist.code":e.detail.value
    })
  },
  checkCode(e){
    wx.showLoading({
      title:"请求中....."
    })
    const requestTask = wx.request({
      url: 'http://47.103.81.2:1903/vue/sendCode', //仅为示例，并非真实的接口地址
      method:"POST",
      data: {
        mobile: this.data.loginlist.mobilePhone
      },
      header: {
        'content-type': 'application/json'
      },
      success (res) {
        console.log(res.data)
        wx.hideLoading();
        wx.showToast({
          title:res.data.msg
        })
      }
    })
  },
  logincancel(){
    this.setData({
      "loginlist.isLogin":true
    })
  },
  autologin(){
    var _this = this
    wx.showLoading({
      title:"请求中....."
    })
    const requestTask = wx.request({
      url: 'http://47.103.81.2:1903/vue/checkCode', //仅为示例，并非真实的接口地址
      method:"POST",
      data: {
        mobile: this.data.loginlist.mobilePhone,
        code:this.data.loginlist.code,
      },
      header: {
        'content-type': 'application/json'
      },
      success (res) {
        console.log(res.data)
        wx.hideLoading();
        wx.showToast({
          title:res.data.msg
        })
        if(res.data.type===2){
          wx.setStorageSync("isLogin",true),
          wx.setStorageSync("username",res.data.token)
        } else {
          wx.setStorageSync("isLogin",false)
        }
        _this.setData({
          "loginlist.isLogin":true
        })
      }
    })
  },











  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        "loginlist.isLogin":!!wx.getStorageSync("isLogin")
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return{
      title:"和其他游戏好友分享情报",
      url:"pages/home/home"
    }
  }
})