// pages/home/home.js
Page({
  data:{
    counter: 0
  },
  handleIncrement(event) {
    console.log(event);
    this.setData({
      counter: this.data.counter +1
    })
  },
  handelTabClick(event) {
    console.log(event);
  },
  handleIncrementCpn() {
    //最终目的：修改my-sel中的counter
    //获取组件对象
    const my_sel = this.selectComponent('#sel-id');
    
    //通过setData修改组件中的数据(不合理)
    // my_sel.setData({
    //   counter:my_sel.data.counter + 1
    // })
    //3，通过方法对数据进行修改
    my_sel.incrementCounter(20);
  }
})