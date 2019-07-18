// pages/mine/mine.js
let timer = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:true,
    current:0,
    banner:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    timer = setInterval(()=>{
      if(this.data.current<100){
        this.setData({
          current:++this.data.current
        })
      } else{
        clearInterval(timer);
        this.setData({
          show:!this.data.show
        })
        wx.showToast({
          title:"加载完成"
        })
      }
    },1)
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

  }
})