const TOKEN = 'token'

App({
  globalData:{
    token:''
  },
  onLaunch:function() {
    //1，先从缓存中取出token
    const token = wx.getStorageSync(TOKEN)
    
    // 2，判断token是否存在
    if(token && token.length !== 0) {//已经有token，验证token 是否过期
      this.check_token(token) //验证token是否过期

    }else {//没有token，进行登录操作
      this.login();
    }
  },
  check_token(token) {
    console.log('执行了验证登录操作');
    wx.request({
      url:'http://123.207.32.32:3000/auth',
      method:'post',
      header: {
        token
      },
      success:(res) => {
        if(!res.data.errCode) {
          this.globalData.token = token
        }else {
          this.login();
        }
      },
      fail:(err) => {
        console.log(err);
      }
    })
  },
  login() {
    console.log('执行了登录操作');
    wx.login({
      //code只有5分钟有效期
      success: (res) => {
        const code = res.code;
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            console.log(res)
            //1，取出token
            const token = res.data.token;

            //2，将token保存在globalData中
            this.globalData.token = token

            //3，进行本地存储 同步
            wx.setStorageSync(TOKEN, token);
          }
        })
      }
    })
  }

})