// pages/detail/detail.js
Page({


  onLoad: function (options) {
    console.log(options)
  },
  onUnload() {
    //1，获取首页的页面对象
    //getCurrentPages当前所有栈的页面
    const pages = getCurrentPages();
    const home = pages[pages.length - 2];

    home.setData({
      title:'heheheh'
    })
    console.log(pages);
  }
 
})