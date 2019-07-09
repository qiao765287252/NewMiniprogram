// components/w-tab-content/w-tab-content.js
Component({
  
  properties: {
    titles: {
      type:Array,
      value:['a','b'],
      observer: function (newVal, oldVal) {
        console.log(newVal, oldVal);
      }
    }
  },
  data: {
    currentIndex: 0
  },
  methods: {
    handleItemClick(event) {
      //1，取出index
      const index = event.currentTarget.dataset.index;

      //2，修改currentIndex
      this.setData({
        currentIndex: index
      })

      //3，通知页面内部的点击事件
      this.triggerEvent('itemClick',{index,title:this.properties.titles[index]})
    }
  },

 

  
})
