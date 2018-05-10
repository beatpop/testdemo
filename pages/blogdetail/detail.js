// pages/blogdetail/detail.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {
      id: 1,
      title: "hey",
      cTime: "2018-05-02 10:30:00",
      img: "../../images/vans0413.jpg",
      content: "这是在学习小程序！！这是在学习小程序！！这是在学习小程序！！这是在学习小程序！！这是在学习小程序！！这是在学习小程序！！这是在学习小程序！！这是在学习小程序！！这是在学习小程序！！这是在学习小程序！！"
    },
    refugeInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    var that = this;
    wx.request({
      url: 'http://118.190.148.50:8081/api/refuges/'+id, //仅为示例，并非真实的接口地址
      method: 'GET',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          refugeInfo: res.data
        })
      }
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
  
  }
})