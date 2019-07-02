// pages/home/home.js
//注册一个页面
//页面也有自己的生命周期函数
Page({
  // ----------------- 2，初始化数据---------------
  data() {
    list:[]
  },
  //----------------- 1，监听页面的生命周期函数-----------------
  //页面被加载出来
  onLoad() {
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success:(res) => {
        console.log(res);
        const data = res.data.data.list;
        //监听数据变化
        this.setData({
          list:data
        })
      }
    })
  },
  //页面显示出来时
  onShow() {

  },
  //页面初次渲染完成时
  onReady() {

  },
  
  onHide() {

  },
  onUnload() {

  },
  //----------------- 3，监听wxml中相关的一些事件-----------------
  handleViewClick() {
    console.log(23232);
  },
  //----------------- 4，其他事件-----------------
  //监听页面的滚动
  onPageScroll(obj) {
    //console.log(obj);
  },
  //监听页面滚动到顶部
  onReachBottom() {
    console.log('页面滚动到底部');
  },
  onPullDownRefresh() {
    console.log('监听下拉刷新');
  }
})