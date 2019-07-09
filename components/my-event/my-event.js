// components/my-event/my-event.js
Component({
  
 
  methods: {
    handleIncrements() {
      this.triggerEvent('increment',{name:'why',age:18})
    }
  }
})
