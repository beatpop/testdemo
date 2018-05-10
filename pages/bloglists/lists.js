// pages/bloglists/lists.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsList: [
      { id: 1, title: 'hey', image: '../../images/01.jpg', cTime: '2018-04-28 18:00:00' },
      { id: 2, title: 'hello', image: '../../images/01.jpg', cTime: '2018-04-28 18:00:00' },
      { id: 3, title: 'guy', image: '../../images/01.jpg', cTime: '2018-04-28 18:00:00' },
      { id: 4, title: 'yo', image: '../../images/01.jpg', cTime: '2018-04-28 18:00:00' },
      { id: 5, title: 'hi', image: '../../images/01.jpg', cTime: '2018-04-28 18:00:00' }
    ],
    lists: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://118.190.148.50:8081/api/refuges', //仅为示例，并非真实的接口地址
      method: 'GET',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          lists: res.data
        })
      }
    });

    wx.getNetworkType({
      success: function (res) {
        // 返回网络类型, 有效值：
        // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
        var networkType = res.networkType
        console.log(networkType);
      }
    });
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