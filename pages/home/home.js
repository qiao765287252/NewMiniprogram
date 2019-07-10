// pages/home/home.js
import request from '../../services/network.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
  //1，原生的方式发送网络请求
    //get_data_origin()
  //2，使用封装的request发送请求
  //promise最大的好处是防止回调地狱
  request({
    url:'http://123.207.32.32:8000/recommend'
  }).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
  },
  get_data_origin() {
     
    //发生网络请求
    //1，发生最简单的网络请求
    // wx.request({
    //   url: 'http://123.207.32.32:8000/recommend',
    //   success:function(res) {
    //     console.log(res);
    //   },
    // success: function (res) {
    //   console.log(res);
    // }
    // })
    //2，get请求，但是携带参数
    // wx.request({
    //   url: 'http://123.207.32.32:8000/home/data',
    //   data: {
    //     type:'sell',
    //     page:1
    //   },
    // success: function (res) {
    //   console.log(res);
    // }
    // })
    //3，post请求，并且携带参数
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method:'post',
    //   data: {
    //     name: 'coderwhy',
    //     age: 18
    //   },
    //   success: function(res) {
    //     console.log(res);
    //   },
    //   fail:function(err) {

    //   }
    // })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})