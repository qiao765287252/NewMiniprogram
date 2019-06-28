// pages/home/home.js
Page({
  data: {
    counter: 0
  },
  addBtn() {
    this.setData({
      counter: this.data.counter +1
    })
  },
  retractBtn() {
    this.setData({
      counter: this.data.counter -1
    })
  }
 
})